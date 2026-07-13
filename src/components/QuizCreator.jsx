import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../features/quiz/quizSlice';

export default function QuizCreator() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || options.some(opt => !opt.trim())) {
      alert('Vui lòng nhập đầy đủ câu hỏi và 4 lựa chọn đáp án!');
      return;
    }

    const newQuestion = {
      text,
      options,
      answer: options[correctIndex],
    };

    dispatch(addQuestion(newQuestion));

    // Reset form
    setText('');
    setOptions(['', '', '', '']);
    setCorrectIndex(0);
    alert('Thêm câu hỏi thành công!');
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="card">
      <h2>Thêm câu hỏi mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Câu hỏi:</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Nhập nội dung câu hỏi..." 
            style={{ width: '100%' }}
          />
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Các lựa chọn:</label>
          {options.map((opt, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', gap: '0.5rem' }}>
              <input 
                type="radio" 
                name="correctOption" 
                checked={correctIndex === idx}
                onChange={() => setCorrectIndex(idx)}
              />
              <input 
                type="text" 
                value={opt} 
                onChange={(e) => handleOptionChange(idx, e.target.value)} 
                placeholder={`Lựa chọn ${idx + 1}`}
                style={{ flex: 1 }}
              />
            </div>
          ))}
          <small style={{ color: '#6b7280' }}>* Chọn nút radio (o) bên cạnh để đánh dấu đáp án đúng.</small>
        </div>

        <button type="submit" className="primary" style={{ marginTop: '1rem' }}>
          Thêm Câu Hỏi
        </button>
      </form>
    </div>
  );
}
