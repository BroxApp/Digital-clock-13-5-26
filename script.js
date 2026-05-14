function updateClock(){
  const now = new Date();
  
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  //Handle AM/PM format
  const ampm = h >= 12 ? "PM" : "AM";

  // Set 12-hour format
  h = h % 12 || 12;

  // Pad single digits with leading zero
  h = h<10?"0"+h:h;
  m = m<10?"0"+m:m;
  s = s<10?"0"+s:s;
  document.getElementById("clock").textContent = `${h}:${m}:${s} ${ampm}`;
}
//Set interval for 1-second ticks
updateClock();
setInterval(updateClock,1000);
