const month = document.getElementById('cal_Month')
const date = document.getElementById('cal_Date')
const day = document.getElementById('cal_Day')
const hour = document.getElementById('cal_Hour')
const minute = document.getElementById('cal_Minute')
const second = document.getElementById('cal_Second')
const ms = document.getElementById('cal_ms')





let calMonth
let calDate
let calDay
let calHour
let calMinute
let calSecond
let calms

function calTime() {
let realTime = new Date()
  if (realTime > 0) {


    calMonth = realTime.getMonth()
    calDate = realTime.getDate()
    calDay = realTime.getDay()
    calHour = realTime.getHours()
    calMinute = realTime.getMinutes()
    calSecond = realTime.getSeconds()
    calms = realTime % 60;
    month.innerHTML = calMonth + '<span>月</span>'
    date.innerHTML = calDate + '<span>日</span>'
    day.innerHTML = '<span>星期: </span>' + calDay +":"
    hour.innerHTML = calHour + '<span>點</span>'
    minute.innerHTML = calMinute + '<span>分</span>'
    second.innerHTML = calSecond + '<span>秒</span>'
    ms.innerHTML = calms

  } else {

    // alert("世界末日拉！！！！！")

  }
}

setInterval(calTime,10)
