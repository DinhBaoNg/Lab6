import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="#" className="nav-item">About</Link>
        <Link to="#" className="nav-item">News</Link>
        <Link to="/quizzes" className="nav-item">Quiz</Link>
        <Link to="#" className="nav-item">Contact</Link>
      </nav>
    </header>
  );
}
