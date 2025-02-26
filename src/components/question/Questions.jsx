// src/components/Questions.jsx
import React from 'react';

export default function Questions({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}


