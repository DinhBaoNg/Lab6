import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FooterActions from '../components/FooterActions';

export default function ResultPage() {
  const { questions, selectedAnswers } = useSelector((state) => state.quiz);

  return (
    <div className="page-wrapper">
      <Header />
      <Hero title="Quiz Review" />
      
      <div className="result-container">
        {questions.map((q, idx) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = selected === q.answer;
          
          return (
            <div key={q.id} className={`result-box ${isCorrect ? 'correct' : 'wrong'}`}>
              <h4 className="result-question">Q{idx + 1}. {q.text}</h4>
              
              <div className="result-options">
                {q.options.map(opt => (
                  <label key={opt} className="result-option">
                    <input 
                      type="radio" 
                      readOnly 
                      checked={selected === opt} 
                      disabled={selected !== opt}
                    />
                    <span style={{opacity: selected === opt ? 1 : 0.6}}>{opt}</span>
                  </label>
                ))}
              </div>

              <div className="right-answer-bar">
                Right answer is: <strong>{q.answer}</strong>
              </div>
            </div>
          );
        })}
      </div>

      <FooterActions />
    </div>
  );
}
