const quiz = [
  {
    question: "what is the most used programing language in 2021",
    ans1text: "java",
    ans2text: "C ",
    ans3text: "Python",
    ans4text: "Javascript",
    answer: "Javascript",
  },

  {
    question: "Who is the president of us?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Breack Obama",
    ans4text: "Jeo Bush",
    answer: "Joe Biden",
  },
  {
    question: "what does the HTML stand for",
    ans1text: "Hypertext Markup Language ",
    ans2text: "CasCading Styles sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals ",
    answer: "Hypertext Markup Language ",
  },
  {
    question: "What year was JavaScript lanched",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above ",
    answer: "1995",
  },
];

const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent);

const option_a = document.getElementById("option-a");

const option_b = document.getElementById("option-b");

const option_c = document.getElementById("option-c");

const option_d = document.getElementById("option-d");

const answer = document.querySelectorAll(".answer");

console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);

console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit-btn");

let currentQuestion = 0;
let score = 0;
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);
// console.log(quiz[currentQuestion].answer);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
  const checkedAns = document.querySelector("input[type='radio']:checked");
  console.log(checkedAns);
  // console.log(checkedAns.nextElementSibling.textContent);
  if (!checkedAns) {
    alert("please Enter select the answer");
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score + 1;
    }

    currentQuestion++;
    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkedAns.checked = false;
    } else {
      alert("Your score is " + score + quiz.length);
      location.reload();
    }
  }
});
