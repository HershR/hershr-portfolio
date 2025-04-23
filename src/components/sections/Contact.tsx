// src/components/Contact.jsx
import React from "react";

export function Contact() {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>
        Feel free to connect with me on{" "}
        <a
          className="text-blue-600 underline"
          href="https://github.com/HershR"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
