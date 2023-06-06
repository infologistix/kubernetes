---
slug: docker-in-wsl
title: Docker in WSL
authors: [aviphan, gerhards, graap, schmidt]
tags: [Docker, WSL]
---
Docker Desktop becomes commercial, we show you a free alternative - Docker in Windows Subsystem for Linux (WSL)
<!--truncate-->

Docker's free products are used by millions of developers to build, publish and run applications - in data centers, the public cloud or with Docker Desktop on the local PC. 
55% of developers use Docker every day at work.

#### Docker Desktop becomes commercially viable
But the Docker Company also needs to be profitable and has decided to charge enterprise customers as part of a business model redesign. Starting Jan. 31, 2022, any use of Docker Desktop will be chargeable for users at companies with more than 250 employees or more than $10 million in annual revenue. A subscription will then cost between $7 and $21 per user per month, depending on which services are widely used and how they are paid for. For enterprises and government agencies, this raises the question of whether Docker Desktop is worth the monthly fee or if there are other options.

#### Docker Deamon and Docker Client remain free and open source (FOSS)
In addition to the GUI, which will be paid for in the future, the Docker software stack consists of free, open source components that do the actual work. The Docker Client is a command-line tool that serves the Docker Daemon API. The Docker Deamon is at the heart of the container runtime environment. On Linux, these can be installed and used natively and free of charge.

#### New ways under Windows with infologistix
On Microsoft Windows 10 and Windows 11, on the other hand, you have to take a slightly more elaborate route to escape the licensing model and continue using Docker for free on your local PC. But at infologistix, we've made managing these tools as easy as using the Internet. Copying from large data centers where Linux servers run Docker as FOSS, we use these same tools for the local development environment.

**We've made installing Docker as simple as running an installer after enabling and installing the Windows Subsystem for Linux. As a bonus, you can install the Docker client yourself on your local machine by downloading it and configuring a Docker context to use the internally hosted Docker platform on Windows Subsystem for Linux.**

### Let's go
##### Installing WSL2
The first step to running Docker native on a Linux kernel even on Windows 10 or Windows 11 is to enable the new Windows Subsystem for Linux (WSL2):

##### Current Builds
If you are running Windows 10, version 2004 and above (build 19041 and above), or Windows 11 you can simply open your power shell as administrator and run the following command:
```
$ wsl --install
```
This command enables the required optional Windows components, downloads the latest Linux kernel, sets WSL 2 as the default, and installs a Linux distribution for you (Ubuntu by default). To change the installed distribution, type the following:
```
$ wsl --install -d <Distribution Name>
```
Replace < Distribution Name >  with the name of the distribution you want to install.
##### Older builds
Windows 10 offered Windows Subsystem for Linux (WSL) version 1 starting with the Fall Creators Update (version 1709). WSL2 is available after extended backward compatibility starting with build 18363.1049. For the following steps, we always refer to the 64-bit variant of PowerShell.

The first thing to do is to enable WSL as a Windows feature. To do this, call PowerShell as administrator and activate the feature:
```
$ dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
Before installing WSL 2, you must enable the optional Virtual Computer Platform feature.

Open PowerShell as an administrator and run the following:
```
$ dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
Then restart the computer.

Now install the WSL update package. To do this, download the latest update package from  https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi. Run the update package downloaded in the previous step.

Now start a PowerShell (without administrator rights) and execute the following to set WSL2 as default version.
```
$ wsl --set-default-version 2
```
Open the Microsoft Store and select your preferred Linux distribution. Our script and the procedure described here are supported:
- Debian
- Ubuntu
- OpenSUSE

When you start a newly installed Linux distribution for the first time, a console window will open and you will be prompted to wait until the files have been decompressed and saved to the computer. All future launches should take less than a second.

### Infologistix Docker Installer für WSL2
![Structure of the infologistix Docker solution](img/docker-wsl-aufbau.png)
*Figure 1: Structure of the infologistix Docker solution*

##### Installation
Docker can be installed within WSL2 using the following bash command:
```
$ bash <(curl -fsSL https://raw.githubusercontent.com/infologistix/docker-wsl2/main/install.sh)
```
##### Using Docker on Windows
On Windows, add the path variable. The installer will install a Docker client to **C:\Docker\docker.exe**. This path must be specified once, then Docker is also present in Windows. 

The usage is then done with a docker context:
```
$ docker context create wsldocker --docker host=tcp://localhost:2375
$ docker context use wsldocker
```
##### Uninstall
Docker can be uninstalled with the following bash command inside WSL2:
```
$ bash <(curl -fsSL https://raw.githubusercontent.com/infologistix/docker-wsl2/main/uninstall.sh)
```
### Conclusion
In summary, we have combined and created an installer for running Docker in a Windows Subsystem for Linux environment. The resulting installer, additional configuration, and documentation can be found in our GitHub repository: 

[infologistix/docker-wsl2: Simple and fast Docker Integration in WSL2 without using Docker Desktop. Suitable for large enterprises](https://github.com/infologistix/docker-wsl2)