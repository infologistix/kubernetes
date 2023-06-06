---
slug: webcrawler
title: Use Case for a WebCrawler
tags: [Python3, Azure]
---
WebCrawlers are a simple, effective and inexpensive way to search websites for specific information and make it available in compressed form. The programs are thus ideally suited to perform repetitive tasks.
In this article, we present a use case for a WebCrawler and give you a detailed how-to on setting up a cloud-based Docker.
<!--truncate-->
### WebCrawler - Use Case
WebCrawlers are lightweight and cost-effective data collectors that give you an information edge. Nowadays, (almost) all information is available online. Googling has become synonymous with finding information, from a simple cooking recipe to a scientific paper.

Most of this data is freely available and can be easily accessed. However, the sheer volume of data and websites makes a search very time-consuming and labor-intensive. The time required is particularly important if the search is not to be carried out just once, but on a regular basis, so that changes and developments can be monitored. Here, so-called WebCrawlers offer themselves as a simple and, above all, cost-efficient way to automate the search.

WebCrawlers are programs that automatically search the Internet and analyze websites. They are therefore perfectly suited for repetitive tasks.

#### Example
At infologistix GmbH, we use WebCrawler for various tasks, including monitoring public tender sites and filtering out the tenders that are of interest to us. For this purpose we crawl about two dozen different websites of public authorities, companies and portals. Here, crawling means that a cloud-based <u>Docker</u> calls up the pages one after the other, searches them for interesting tenders and provides us with a result list containing only relevant tenders. Technical details, as well as the Docker image and instructions for rebuilding it, can be found in the [How-To section](#webcrawler---how-to) below.

The results list of relevant RFPs represents a huge time and cost savings for us. Instead of having to search through hundreds of RFPs per day, we now only have to review half a dozen RFPs. And this at only about 1€ operating costs per week for the WebCrawler.

#### Resumé
WebCrawlers are a simple, effective and inexpensive way to search websites for specific information and to make the results available in compressed form. Our Docker image is a particularly lightweight and easy-to-use variant. If you have any questions about WebCrawlers or are looking for a customized solution, please feel free to contact us.

### WebCrawler - How-To
With this How-To we show how to set up a cloud-based Docker to crawl websites for information and provide prepared search results via notification over social chat like MS Teams or Slack or even email.

####  What you need
- Local Docker runtime
- Social chat (MS Teams, Slack) or email client
- [infologistix WebCrawler from Docker Hub](https://hub.docker.com/r/infologistix/docker-selenium-python)
- Some experience with [Python](https://www.python.org/), Command Line, HTML

#### For using in the cloud optionally:
- [Microsoft Azure](https://azure.microsoft.com/en-us/)
- [Amazon AWS](https://aws.amazon.com/)
- [Google Cloud Platform](https://cloud.google.com/)

#### Let's get started
<u> 0. Clone GitHub repository </u>

This How-To is based on a project structure, which we have already created and which you can transfer directly into your project. Under the following link you can also find this how-to as a **finished program in the Examples folder.**
```
$ git clone https://github.com/infologistix/docker-selenium-python.git ./infologistix
```
Let's look at a simple example here and first find out what services our company offers. The functions shown here can be easily adapted to new circumstances.

<u> 1. Basic structure and libraries </u>

The test framework Selenium already provides us with a wide range of functions and equipment to target websites and to determine information. The basic structure of our project is based on a class that handles the communication with the browser and extracts all data from the website for us. In addition, we use pandas as a tool for formatting and data analysis of the search results.
```
from selenium.webdriver import Chrome
from selenium.webdriver import ChromeOptions 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
```
Based on the libraries used, we can write a base class for our crawler. This base class describes the general crawler. We use the class representation, because here the website and its functions and element extraction can be called as variables and functions. Initially, we hereby open a Chrome window in "headless" mode and open the given web page.
```
class InfologistixCrawler():
    def __init__(self, url: str, headless: bool=True) -> None:
        options = ChromeOptions()
        options.add_argument("–no-sandbox")
        options.add_argument("–window-size=1280,720")
        if headless:
            options.add_argument("–headless")
        self.driver = Chrome(options=options)
        self.driver.get(url)

    def run(self):
        page = self.driver.page_source
        self.close()
        return page

    def close(self):
        self.driver.close()
```
<u> 2. Determine information of the website </u>

We filter out the services offered from our own [homepage](https://infologistix.de/) and want to store them with name, details and reference. To do this, we look for the information on the website and determine the basic HTML structure. In our case, the services are in a 'section' element, which we need to find. Our searched element has the ID 'services', which in turn contains several 'section' elements with the class attribute 'elementor-image-box-content'. All the services are stored here.

First, we wait until the element we are looking for exists. We use WebDrverWait to tell our program to wait a maximum of 10 seconds for our requested element to be present on the web page in the DOM. If this element is not present, then we get out of the running program here and we don't run into any errors.

Then we save the container with the searched elements using the find_element_by\* function and search within this container with find_elements_by* all searched elements and extract the single information of the extraction.
```
def getServices(self) -> list:
        results = list()
        WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "Leistungen")))
        services = self.driver.find_element_by_id ("Leistungen")
        for service in services.find_elements_by_tag_name("section"):
            results.append(
                 self.__extract(
                          service.find_element_by_class_name(
                                   "elementor-image-box-content")))

         return results
```
As a result we get a list, which we only have to return. What exactly the function __extract() does, we will explain in a moment.

With the help of the list we can now develop a representation of the individual services, which simplifies the visibility and readability for humans. We choose here the representation of a Pandas DatenFrames, because here, for example, numerical calculations and aggregations can be made. In addition, Excel files can also be created from this. So we create a DataFrame with the columns "URI", "Title" and "Description" from our list, which contains the title, description and the respective reference.

A DataFrame is then returned.
```
def makeFrame(self, services: list) -> pd.DataFrame:
    return pd.DataFrame(services)
```
Based on this transformation of the results, we rearrange our run() function so that it gives us the results it finds and includes the functions it creates.
```
def run(self):
     services = self.getServices()
     self.close()
     return self.makeFrame(services)
```
Let's remember back to our __extract() function. Here we want to extract the required information from the elements. Finding out and filtering relevant information is the main task here. All the information is present in different elements with different identifiers. For example, the title is text within an 'a' element, which also contains the reference. In our example, the extraction function is composed as follows and returns us an ordered dictionary containing the element information.
```
def __extract(self, service: WebElement) -> dict:
        return {
           "URI": service.find_element_by_tag_name("a").get_attribute("href"),
           "Title": service.find_element_by_tag_name("a").text,
           "Description": service.find_element_by_tag_name("p").text,
         }
```
The entire class with functions then looks like this:
```
class InfologistixCrawler():
    def __init__(self, url, headless=False):
        options = ChromeOptions()
        options.add_argument("–no-sandbox")
        options.add_argument("–window-size=1280,720")
        if headless:
            options.add_argument("–headless")
        self.driver = Chrome(options=options)
        self.driver.get(url)

    def getServices(self) -> list:
        results = list()
        WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "Leistungen")))
        services = self.driver.find_element_by_id ("Leistungen")
        for service in services.find_elements_by_tag_name("section"):
            results.append(
                 self.__extract(
                          service.find_element_by_class_name(
                                   "elementor-image-box-content")))
        return results

    def __extract(self, service: WebElement) -> dict:
        return {
           "URI": service.find_element_by_tag_name("a").get_attribute("href"),
           "Title": service.find_element_by_tag_name("a").text,
           "Description": service.find_element_by_tag_name("p").text,
         }

    def makeFrame(self, services : list) -> pd.DataFrame:
        return pd.DataFrame(services)

    def run(self) -> pd.DataFrame:
        services = self.getServices()
        self.close()
        return self.makeFrame(services)

    def close(self) -> None:
        self.driver.close()
```
If we let our crawler run, we get a DataFrame with the offered services of infologistix GmbH.
```
services = Crawler(url="https://infologistix.de").run()
```
We can now extract the infologistix GmbH services from the website and output them as a dataframe. The next step is the transmission of the results.
<u> 3. Submission & Messaging </u>
For Teams, as well as Slack, a token and webhook respectively is used to send a formatted message to a channel. Unfortunately, the integration of Slack is not yet fully implemented and can therefore lead to errors.

[Here you can find detailed instructions on how to get a webhook of a channel in MS Teams.](https://dev.outlook.com/Connectors/GetStarted#creating-messages-through-office-365-connectors-in-microsoft-teams)

Here we use the base library pymsteams and create a card with the webhook URL available to us. We add a title and the search results formatted as HTML to the post and send it to our Teams channel.
```
import pymsteams

message = services.to_html()
title = "Dienstleistungen Infologistix"

def sendMSTeams(webhook : str, message : str, title : str) -> Literal[True]:
    channel = pymsteams.connectorcard(webhook)
    channel.title(title)
    channel.text(message)
    return channel.send()
```
We have now planned our flow and can save it as main.py.
<u> 4. Cloud-Container </u>
With the script created here, we can now create a Docker container, which will give us the ability to run the crawler in the cloud. For this, we create the Dockerfile or take the already existing example.

A simple command is enough here to run this example.
```
$ docker run -it –rm –shm-size=128m docker-selenium-python:latest python ./examples/main.py
```
You can find instructions for setting up in the cloud environment here:

- [Microsoft Azure](https://learn.microsoft.com/de-de/azure/container-instances/container-instances-tutorial-prepare-app)
- [Amazon AWS](https://us-east-1.signin.aws.amazon.com/oauth?SignatureVersion=4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQHJ3VXZJKWI3EBO4&X-Amz-Date=2023-05-15T15%3A08%3A10.140Z&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQChMDyBnLd2%2F6pRONs4Qt%2ByvBbsOpAnL9akqgT%2FbmPzHQIgQDYigveW%2FZwaS10R4VZkdtTA08gEFv%2FXedWIz5r%2ByhkqzQMIGBACGgwwMTU2OTQ0MTMzOTQiDHXEpnkLczxPEFM%2B1SqqAzRfwLNltRQTxPe6NJdMLiwSKoLDoKdz0cfX%2B3V1qQ9SLmVKLxC3Ar3a7JNJzQ2P%2Fj7nrb5FGWM2FhQ8GUt6Zr1YE%2F%2FqvVm1%2FESeKDWHlsJMg0fF8IxeY9vQSVPE59zHD4IP94QeLfiHQPY0zO8fIY98FH6SBw18a%2FJh4AbGv20QF92lXwqVVJlmeyfdKdOTP9%2FjPwAZV1F8FItFqkqkOb8r8p8QwvPEDPr%2B0CqOdOQ631qdOtT%2FBYsOcXcvqBxeAyx1ud2SsvHC1bxG7eFdUGPrigT%2B08LU6rWtabEzNFFsVHzYV45K4o56JTO8%2BeFeKgri7N5qAINjmWAKzBRpSvF2zLx8i5Y%2BLYLx278yZwaNRSTCj%2FzaDkI%2BSP1cqU2qLStDbjXD51CrA3RSVxMjUn7%2BqqF48ynxogK2gsPeNAXSpt4RUwen28SINrnzw6ajQHxU3bxKa8pHx4sIe%2Fq6%2BmsHNdwP9EJsQ5WT0Dsd16F29IVrSfOPbN7azqPuCmVT5HmXtC13WsltPEHL4LHYlGCNqWQy2yIe0ivXLdoEmTEl1aIzwUpWCi0uEjDUgYmjBjqhAYubtfW9U3AJzxe55%2FXr2Ps%2FTiqGV8tWTNhFESUbyVKKXPXeFrbvrQd%2BXNUhXekARqS4aqbyiqmNxy3HyoxWFXnQkIrZHNZfj8kORXtj6QpWwGtYi7J5kh9TOAyW1GASQpj5CLuk8LnvsBLsAqmdSmuxD69GwoaZ1%2FqcSd441OA1uIiaYjeVM4MAU7Z%2F5hKmgLFacJZwD7UaHq7BNIjt2YZ8&X-Amz-Signature=88941b4e1ab60b16a86d29aa30169819c908f3b5558268f10040ef6c273940e1&X-Amz-SignedHeaders=host&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fecs&code_challenge=Rzvs-__JFcYEHVU8L8WkBiXx4NhaNcxiZN2krlbe1XQ&code_challenge_method=SHA-256&redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fecs%2Fhome%3Fregion%3Dus-east-1%26state%3DhashArgs%2523%252FgetStarted%26isauthcode%3Dtrue&region=us-east-1&response_type=code&state=hashArgs%23%2FgetStarted)
- [Google Cloud Services](https://cloud.google.com/container-registry/docs/pushing-and-pulling?hl=de)