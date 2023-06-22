'use client'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return isLoading ? (
    <div className="loading-screen">
      <div className="custom-loader"></div>
      <p>Cargando...</p>
    </div>
  ) : null;
}