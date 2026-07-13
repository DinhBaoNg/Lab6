import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Inside which HTML element do we put the JavaScript?',
      options: ['javascript', 'scripting', 'script', 'js'],
      answer: 'script',
    },
    {
      id: 2,
      text: 'What are variables used for in JavaScript Programs?',
      options: [
        'Storing numbers, dates, or other values',
        'Varying randomly',
        'Causing high-school algebra flashbacks',
        'None of these'
      ],
      answer: 'Storing numbers, dates, or other values',
    },
    {
      id: 3,
      text: "Which of the following can't be done with client-side JavaScript?",
      options: [
        'Validating a form',
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        'None of the above'
      ],
      answer: "Storing the form's contents to a database file on the server",
    },
    {
      id: 4,
      text: 'Which built-in method calls a function for each element in the array?',
      options: ['while()', 'loop()', 'forEach()', 'None of the above'],
      answer: 'forEach()',
    },
    {
      id: 5,
      text: 'Which built-in method reverses the order of the elements of an array?',
      options: ['changeOrder(order)', 'reverse()', 'sort(order)', 'None of the above'],
      answer: 'reverse()',
    },
    {
      id: 6,
      text: "What is the correct syntax for referring to an external script called 'abc.js'?",
      options: ["<script href='abc.js'>", "<script name='abc.js'>", "<script src='abc.js'>", "None of the above"],
      answer: "<script src='abc.js'>",
    },
    {
      id: 7,
      text: 'How do you create a function in JavaScript?',
      options: ['function:myFunction()', 'function = myFunction()', 'function myFunction()', 'None of the above'],
      answer: 'function myFunction()',
    },
    {
      id: 8,
      text: 'How to write an IF statement in JavaScript?',
      options: ['if i = 5', 'if (i == 5)', 'if i == 5 then', 'if i = 5 then'],
      answer: 'if (i == 5)',
    },
    {
      id: 9,
      text: 'How does a FOR loop start?',
      options: ['for (i = 0; i <= 5)', 'for (i <= 5; i++)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)'],
      answer: 'for (i = 0; i <= 5; i++)',
    },
    {
      id: 10,
      text: 'Which event occurs when the user clicks on an HTML element?',
      options: ['onchange', 'onclick', 'onmouseclick', 'onmouseover'],
      answer: 'onclick',
    }
  ],
  selectedAnswers: {},
  checked: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const newQuestion = {
        ...action.payload,
        id: state.questions.length > 0 ? state.questions[state.questions.length - 1].id + 1 : 1,
      };
      state.questions.push(newQuestion);
    },
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.selectedAnswers[questionId] = answer;
    },
    checkAnswers: (state) => {
      state.checked = true;
    },
    resetQuiz: (state) => {
      state.selectedAnswers = {};
      state.checked = false;
    },
  },
});

export const { addQuestion, selectAnswer, checkAnswers, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
