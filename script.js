function updateClock(){
  const now = new Date();
  
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // تنظیم AM و PM
  const ampm = h >= 12 ? "PM" : "AM";

  // تنظیم فرمت 12 ساعت
  h = h % 12 || 12;

  // تبدیل تک رقمی به دو رقمی
  h = h<10?"0"+h:h;
  m = m<10?"0"+m:m;
  s = s<10?"0"+s:s;
  document.getElementById("clock").textContent = `${h}:${m}:${s} ${ampm}`;
}
// به‌روزرسانی هر ثانیه
updateClock();
setInterval(updateClock,1000);