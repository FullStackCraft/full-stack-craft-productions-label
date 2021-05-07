import React from 'react';
import '../styles/styles.scss';

export function FullStackCraftProductionsLabel() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap"
        rel="stylesheet"
      />
      <a
        className="full-stack-craft-button"
        target="_blank"
        href="https://fullstackcraft.com"
      >
        <img src="https://coffee-app.sfo2.cdn.digitaloceanspaces.com/fullstackcraft/logo.jpg" />
        <span>a Full Stack Craft production</span>
      </a>
    </>
  );
}
