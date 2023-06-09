 var typed= new Typed(".text", {
  strings:[" Front-end Developer", "Back-end Engineer", "Full-stack Developer"],
  typeSpeed:100,
  backspeed:100,
  backDelay:1000,
  loop:true
})

var timeoutId;
var icon = document.getElementById('icon');

function hideIcon() {
  icon.classList.remove('show');
}

function showIcon() {
  icon.classList.add('show');
  clearTimeout(timeoutId);
  timeoutId = setTimeout(hideIcon, 5000);
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    showIcon();
  }
});

timeoutId = setTimeout(hideIcon, 5000);
