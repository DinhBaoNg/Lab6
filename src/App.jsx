import { Routes, Route, Navigate } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import ReviewPage from './pages/ReviewPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quizzes" replace />} />
      <Route path="/quizzes" element={<QuizPage />} />
      <Route path="/quiz/review" element={<ReviewPage />} />
      <Route path="/quiz/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
