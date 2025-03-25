import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://kubespectra.io';
  }, []);

  return null;
}
