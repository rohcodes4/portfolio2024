// Analog Clock
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();

    let hh = day.getHours() * 30;
    let mm = day.getMinutes()* 6;
    let ss = day.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
        
}, 1000);
// Analog Clock Ends

// Digital Clock

let hour =   document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let ampm =   document.querySelector('#ampm');
setInterval(() => {
    let day = new Date();

    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    let am = (hh>12)? "PM" : "AM";

    hh=(hh>12)? hh-12:hh;
    hh=(hh<10)? "0" + hh: hh;
    mm=(mm<10)? "0" + mm: mm;
    ss=(ss<10)? "0" + ss: ss;

    hour.innerHTML = hh;
    minute.innerHTML = mm;
    second.innerHTML = ss;
    ampm.innerHTML = am;
}, 1000);
// Digital Clock Ends


/* Get the documentElement (<html>) to display the page in fullscreen */
/* View in fullscreen */
function openFullscreen() {
var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

let fs = document.querySelector('#fs')
document.addEventListener('keypress',(e)=>{
//    102 or 70
  if(e.keyCode == 102 || e.keyCode ==70){
      openFullscreen();
  }
})