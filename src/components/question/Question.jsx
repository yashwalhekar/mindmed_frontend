// src/components/Question.jsx
import React from 'react';

export default function Question({ question, answer }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
