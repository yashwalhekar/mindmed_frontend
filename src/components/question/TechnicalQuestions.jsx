import React from 'react';
import Questions from './Questions';
import Question from './Question';
import { faqContent } from '../../utils/faqContent'; // Adjust the path as needed

export default function TechnicalQuestions() {
  return (
    <Questions title="Technical & Security Questions">
      {faqContent.technical.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}
    </Questions>
  );
}
