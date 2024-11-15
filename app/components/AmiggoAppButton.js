"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AmiggoAppButton() {
  const [linkUrl, setLinkUrl] = useState('#'); // Default to '#' before device detection

  useEffect(() => {
    // This code runs on the client side
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android device
      setLinkUrl('https://play.google.com/store/apps/details?id=com.amiggoapp.stable');
    } else if (/iPad|iPhone/.test(userAgent) && !window.MSStream) {
      // iOS device
      setLinkUrl('https://apps.apple.com/es/app/amiggoapp-coche-sustituci%C3%B3n/id6661026853');
    } else {
      // Desktop or other devices
      setLinkUrl('https://amiggoapp.com/');
    }
  }, []);

  const handleClick = (e) => {
    // Prevent default action if linkUrl is '#'
    if (linkUrl === '#') {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={linkUrl}
      onClick={handleClick}
      className="inline-block px-4 py-3 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition duration-200"
    >
      AmiggoApp
    </Link>
  );
}