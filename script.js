/* GETTING DATE */
let today = new Date();
let daysArray = ['الاحد'  ,'الأثنين' , 'الثلاثاء' , 'الاربعاء' , 'الخميس'  , 'الجمعة' , 'السبت'];
let monthsArray = ['يناير'  , 'فبراير' , 'مارس' , 'ابريل'  , 'مايو' , 'يونيو' , 'يوليو' , 'أغسطس' , 'سبتمبر' , 'أكتوبر' , 'نوفمبر' , 'ديسمبر'];
var time = today.getHours() + ":" + today.getMinutes();

let currentDay = today.getDay();
let currentDayNum = today.getDate();
let currentMonth = today.getMonth() ;
let currentDaySpan = document.getElementById('currentDay');
let numDaySpan = document.getElementById('dayNum');
let monthDaySpan = document.getElementById('monthText');
let timeTextSpan = document.getElementById('timeText');

let realCurrentDay = daysArray[currentDay];
currentDaySpan.textContent = realCurrentDay;
numDaySpan.textContent = currentDayNum;
monthDaySpan.textContent = monthsArray[currentMonth];
timeTextSpan.textContent = time;


/* HANDLING SHOWUNG SINGLE USER PROFIELE */
let userProiflePopDIv = document.querySelector('.popuo_main_profile_Div');
let closingDivPopup = document.querySelector('.closing_div_popup');
let userAvatar = document.querySelector('.user_avatar');

userAvatar.addEventListener('click' , () => {
    userProiflePopDIv.classList.toggle('active');
})

closingDivPopup.addEventListener('click' , () => {
    userProiflePopDIv.classList.toggle('active');
})
