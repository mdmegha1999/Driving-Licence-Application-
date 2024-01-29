import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import "./DriAss.css"
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProfilePage from './ProfilePage';
// import DrivingAssessment from './DrivingAssessment';


const DrivingAssessment = () => {
  const questions = [
    {
      id: 1,
      text: 'What does a red traffic light indicate?',
      options: ['Stop', 'Go', 'Slow down', 'Turn right'],
      correctAnswer: 'Stop',
    },
    {
      id: 2,
      text: 'What does a yield sign mean?',
      options: ['Speed up', 'Stop', 'Proceed with caution', 'No left turn'],
      correctAnswer: 'Proceed with caution',
    },
    // Add more questions as needed
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); // Use useHistory instead of useNavigate

  // const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleAnswerSelection = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  const handleSubmit = () => {
    calculateScore();
    navigate('/results', { state: { score, questions, userAnswers } }); // Use navigate instead of history.push
  };

  return (
    <div>
      <h1>Driving Assessment</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p className='mcq_qus'>Question{question.id}:{question.text}</p>
          <ul>
            {question.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option}
                    onChange={() => handleAnswerSelection(question.id, option)}
                    checked={userAnswers[question.id] === option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DrivingAssessment;
