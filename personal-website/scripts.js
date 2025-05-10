// تغییر رنگ‌های سایت از طریق input
document.getElementById("colorPicker").addEventListener("input", function(event) {
  document.documentElement.style.setProperty('--primary-color', event.target.value);
});