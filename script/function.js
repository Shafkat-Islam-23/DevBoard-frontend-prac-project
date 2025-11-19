// disable the card button

disableButton("card-btn-1", "task-1");
disableButton("card-btn-2", "task-2");
disableButton("card-btn-3", "task-3");
disableButton("card-btn-4", "task-4");
disableButton("card-btn-5", "task-5");
disableButton("card-btn-6", "task-6");

// setting real date

// const date = new Date();
const toDate = new Date();

const currentDay = toDate.getDay();
const currentDate = toDate.getDate(); // 1–31
const currrentMonth = toDate.getMonth(); // 0–11 (so +1)
const CurrentYear = toDate.getFullYear(); // e.g., 2025

// console.log(day, month, year)

const months = [
  "Jan",
  "feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.getElementById("real-date").innerText = ` ${days[currentDay]}  ,
${months[currrentMonth]} ${currentDate} ${CurrentYear}
`;
