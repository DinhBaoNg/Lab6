import { useNavigate } from 'react-router-dom';

export default function FooterActions() {
  const navigate = useNavigate();

  return (
    <div className="footer-actions">
      <button className="action-btn" onClick={() => navigate('/quizzes')}>Quiz</button>
      <button className="action-btn" onClick={() => navigate('/quiz/review')}>Quiz Review</button>
      <button className="action-btn" onClick={() => navigate('/quiz/result')}>Submit</button>
    </div>
  );
}
