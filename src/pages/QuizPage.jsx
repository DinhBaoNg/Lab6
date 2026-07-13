import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer } from '../features/quiz/quizSlice';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FooterActions from '../components/FooterActions';

export default function QuizPage() {
  const dispatch = useDispatch();
  const { questions, selectedAnswers } = useSelector((state) => state.quiz);
  const [currentIndex, setCurrentIndex] = useState(0);

  const question = questions[currentIndex];

  const handleSelect = (option) => {
    dispatch(selectAnswer({ questionId: question.id, answer: option }));
  };

  const goFirst = () => setCurrentIndex(0);
  const goPrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
  const goLast = () => setCurrentIndex(questions.length - 1);

  if (!question) return <div>Loading...</div>;

  return (
    <div className="page-wrapper">
      <Header />
      <Hero title="JavaScript Quiz" />
      
      <div className="quiz-container">
        <h3 className="question-title">Q.{currentIndex + 1} {question.text}</h3>
        
        <div className="options-grid">
          {question.options.map((option) => {
            const isSelected = selectedAnswers[question.id] === option;
            return (
              <label key={option} className="option-label">
                <input 
                  type="radio" 
                  name={`question-${question.id}`} 
                  checked={isSelected}
                  onChange={() => handleSelect(option)}
                />
                {option}
              </label>
            );
          })}
        </div>

        <div className="pagination">
          <button onClick={goFirst}>First</button>
          <button onClick={goPrev}>Prev</button>
          <button onClick={goNext}>Next</button>
          <button onClick={goLast}>Last</button>
        </div>
      </div>

      <FooterActions />
    </div>
  );
}
