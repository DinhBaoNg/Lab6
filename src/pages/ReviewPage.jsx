import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FooterActions from '../components/FooterActions';

export default function ReviewPage() {
  const { questions, selectedAnswers } = useSelector((state) => state.quiz);

  return (
    <div className="page-wrapper">
      <Header />
      <Hero title="Quiz Review" />
      
      <div className="review-grid">
        {questions.map((q, idx) => {
          const isAnswered = !!selectedAnswers[q.id];
          return (
            <div key={q.id} className="review-box">
              <p>Question No {idx + 1}</p>
              <p className="status">{isAnswered ? 'Answered' : 'Not Answered'}</p>
            </div>
          );
        })}
      </div>

      <FooterActions />
    </div>
  );
}
