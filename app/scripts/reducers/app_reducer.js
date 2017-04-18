let questionsArray = [
  {
    id: 0,
    question: 'What is your favorite color?',
    answer: ''
  },
  {
    id: 1,
    question: 'Want to brunch?',
    answer: ''
  },
  {
    id: 2,
    question: 'What is your favorite color?',
    answer: ''
  },
  {
    id: 3,
    question: 'Want to brunch?',
    answer: ''
  },
  {
    id: 4,
    question: 'What is your favorite color?',
    answer: ''
  },
  {
    id: 5,
    question: 'Want to brunch?',
    answer: ''
  },
  {
    id: 6,
    question: 'What is your favorite color?',
    answer: ''
  },
  {
    id: 7,
    question: 'Want to brunch?',
    answer: ''
  },
  {
    id: 8,
    question: 'What is your favorite color?',
    answer: ''
  },
  {
    id: 9,
    question: 'Want to brunch?',
    answer: ''
  }
];

let initialState = {
  username: 'ripley',
  questions: questionsArray
};

export default function AppReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
  return state;
}
