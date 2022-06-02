//display timer
const dd = document.getElementById("__day");
const hh = document.getElementById("__hr");
const mm = document.getElementById("__min");
const ss = document.getElementById("__sec");

//get inputs form  the user
const inputDays = document.querySelector("._days");
const inputHours = document.querySelector("._hrs");
const inputMinutes = document.querySelector("._mins");
const inputSeconds = document.querySelector("._secs");

//get alert text
const alerText = document.getElementById("alert_empty");

// get audio
var music = document.getElementById("testAudio");

//get buttons
const btnStart = document.getElementById("start");
// const btnPause = document.getElementById("pause");

let days, hours, minutes, seconds;

function resetCoutDownValues() {
	days = "00";
	hours = "00";
	minutes = "00";
	seconds = "00";

	inputDays.value = null;
	inputHours.value = null;
	inputMinutes.value = null;
	inputSeconds.value = null;
}

function reset() {
	btnStart.innerText = "Start";
	btnStart.style.backgroundColor = "steelblue";
	btnStart.setAttribute("onclick", "countDown()");
	resetCoutDownValues();
	stopaudio();
}

function startCountDown(day, hour, minute, second) {
	let dayConst = 86400;
	let hourConst = 3600;
	let minuteConst = 60;
	let totalSeconds = day * dayConst + hour * hourConst + minute * minuteConst + second * 1;

	let timeCount = setInterval(() => {
		let totalTime = --totalSeconds;

		days = Math.floor(totalTime / dayConst);
		totalTime = totalTime % dayConst;

		hours = Math.floor(totalTime / hourConst);
		totalTime = totalTime % hourConst;

		minutes = Math.floor(totalTime / minuteConst);
		totalTime = totalTime % minuteConst;

		seconds = Math.floor(totalTime);

		if (days < 10) {
			days = "0" + days;
		}

		if (hours < 10) {
			hours = "0" + hours;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		if (totalTime === 0) {
			clearInterval(timeCount);
			resetCoutDownValues();
			playAudio();
			setTimeout(() => {
				stopaudio();
			}, 30000);
		}

		if (btnStart.getAttribute("onclick") === "countDown()") {
			clearInterval(timeCount);
			reset();
		}

		dd.textContent = days;
		hh.textContent = hours;
		mm.textContent = minutes;
		ss.textContent = seconds;
	}, 1000);
}

function countDown() {
	let getDays = inputDays.value;
	let getHours = inputHours.value;
	let getMinutes = inputMinutes.value;
	let getSeconds = inputSeconds.value;
	getDays === "" && getHours === "" && getMinutes === "" && getSeconds === "" ? alert() : startCountDown(getDays, getHours, getMinutes, getSeconds);
	btnStart.innerText = "Reset";
	btnStart.style.backgroundColor = "orange";
	btnStart.setAttribute("onclick", "reset()");
}
function alert() {
	let duration = 3000;
	alerText.style.color = "Red";
	setTimeout(() => {
		alerText.style.color = "#09050A";
	}, duration);
}

function timera() {
	startCountDown(0, 0, 5, 0);
	btnStart.innerText = "Reset";
	btnStart.style.backgroundColor = "orange";
	btnStart.setAttribute("onclick", "reset()");
}
function timerb() {
	startCountDown(0, 0, 30, 0);
	btnStart.innerText = "Reset";
	btnStart.style.backgroundColor = "orange";
	btnStart.setAttribute("onclick", "reset()");
}
function timerc() {
	startCountDown(0, 1, 0, 0);
	btnStart.innerText = "Reset";
	btnStart.style.backgroundColor = "orange";
	btnStart.setAttribute("onclick", "reset()");
}
function timerd() {
	startCountDown(0, 3, 0, 0);
	btnStart.innerText = "Reset";
	btnStart.style.backgroundColor = "orange";
	btnStart.setAttribute("onclick", "reset()");
}

function playAudio() {
	music.play();
}
function stopaudio() {
	music.pause();
}
