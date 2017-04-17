let questionsArray = [
  {
    id: 0,
    question: 'What is your favorite color?',
    answer: 'clear'
  },
  {
    id: 1,
    question: 'Want to brunch?',
    answer: 'yes'
  },
  {
    id: 2,
    question: 'What is your favorite color?',
    answer: 'clear'
  },
  {
    id: 3,
    question: 'Want to brunch?',
    answer: 'yes'
  },
  {
    id: 4,
    question: 'What is your favorite color?',
    answer: 'clear'
  },
  {
    id: 5,
    question: 'Want to brunch?',
    answer: 'yes'
  },
  {
    id: 6,
    question: 'What is your favorite color?',
    answer: 'clear'
  },
  {
    id: 7,
    question: 'Want to brunch?',
    answer: 'yes'
  },
  {
    id: 8,
    question: 'What is your favorite color?',
    answer: 'clear'
  },
  {
    id: 9,
    question: 'Want to brunch?',
    answer: 'yes'
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
