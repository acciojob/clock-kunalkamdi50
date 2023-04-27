//your JS code here. If required.
function getTime(){
	const time = new Date();
	let dayString ='${time.getMonth()+1}/${time.getDate()}/${time.getFullYear()}';
let hr = time.getHour();
	let timeString ="";
	if(hr>= 12){
		if(hr == 12){
			timeString =`${time.getHour()}:${time.getMinutes()}:${time.getSecond()} PM`
			}
		else{
			hr -=12 ;
			timeString=`${hr}:${time.getMinutes()}:${time.getSeconds()} PM`
		}
	}
	else{
		//:Am
		//: 12 hr clock modification needed
		timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSecond()} AM`
	}
	return dayString+", "+timeString;
}
const p = document.getElementById("timer");

function timer(){
	p.innerText = getTime();
}

setInterval(timer, 1000);