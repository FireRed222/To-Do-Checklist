
let day = document.querySelector("#day");
let fullDate = document.querySelector("#full_date");
let date = new Date();
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let months = [
   "Jan",
   "Feb",
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

let year = date.getFullYear();
let month = date.getMonth();
let daay = date.getDay() - 1;
let Daate = date.getDate();



day.innerHTML = days[daay];
fullDate.innerHTML = `${Daate} - ${months[month]} - ${year}`

