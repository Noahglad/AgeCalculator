//  get and store all the inputs

let inputday = document.getElementById('day');
let inputmonth = document.getElementById('month');
let inputyear = document.getElementById('year');


// Get the submit button
let submitBtn = document.getElementById('submit-btn');

let isValid = false;

// Get all the outputs elements

let yearOut = document.getElementById('year-out')
let monthOut = document.getElementById('month-out')
let dayOut = document.getElementById('day-out')

// Error messages

let errorDay = document.getElementById('error-day')
let errorMonth = document.getElementById('error-month')
let errorYear = document.getElementById('error-year')


inputday.addEventListener("input", (e) => {
       if (+inputday.value > 31) {
              errorDay.textContent = "The date you entered is invalid"
              isValid = false;
              return;
       } else {
              isValid = true;
              errorDay.textContent = ""
       }
       if (+inputday.value === 0) {
              errorDay.textContent = "This field is required"
              isValid = false;
              return;
       } else {
              errorDay.textContent = ""
              isValid = true;
       }
});


inputmonth.addEventListener("input", (e) => {
       if (+inputmonth.value > 12) {
              errorMonth.textContent = "The date you entered is invalid"
              isValid = false;
              return;
       } else {
              isValid = true;
              errorMonth.textContent = ""
       }
       if (+inputmonth.value === 0) {
              errorMonth.textContent = "This field is required"
              isValid = false;
              return;
       } else {
              errorMonth.textContent = ""
              isValid = true;
       }
});

inputyear.addEventListener("input", (e) => {
       if (+inputyear.value > 2023) {
              errorYear.textContent = "The date you entered is invalid"
              isValid = false;
              return;
       } else {
              isValid = true;
              errorYear.textContent = ""
       }
       if (+inputyear.value === 0) {
              errorYear.textContent = "This field is required"
              isValid = false;
              return;
       } else {
              errorYear.textContent = ""
              isValid = true;
       }
});




function calculateAge() {
       if (isValid) {
              let birthday = `${inputmonth.value} / ${inputday.value} / ${inputyear.value}`;
              let birthdayobj = new Date(birthday);     
              let agediff = Date.now() - birthdayobj;
              let agedate = new Date(agediff);
              let ageYears = agedate.getUTCFullYear() - 1970; 
              let agemonths = agedate.getUTCMonth();
              let ageday = agedate.getUTCDay();

              yearOut.textContent = ageYears;
              monthOut.textContent = agemonths;
              dayOut.textContent = ageday;
       } else {
              alert("error");
       }
}