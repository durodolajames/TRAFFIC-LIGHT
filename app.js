const red = document.getElementsByClassName('red');
const yellow = document.getElementsByClassName('yellow');
const green = document.getElementsByClassName('green');
const icon = document.getElementsByClassName('fa-hand-paper');
const iconA = document.getElementsByClassName('fa-arrow-up');

let countdown = 0;
setInterval(function () {
  countdown++;

  if (countdown <= 20) {
    id = document.querySelector('.countdown');
    id.textContent = countdown;
  }

  if (countdown > 0 && countdown <= 4) {
    let countDown = document.getElementsByClassName('countdown');
    countDown[0].style.color = 'red';
    red[0].style.backgroundColor = 'rgb(148, 15, 15';
    icon[0].style.color = 'red';
    // countdown[0].style.color = 'red';
  } else {
    icon[0].style.color = 'rgb(15, 15, 15)';
    red[0].style.backgroundColor = 'rgb(15, 15, 15)';
  }
  if (countdown >= 5 && countdown <= 7) {
    let countDown = document.getElementsByClassName('countdown');
    countDown[0].style.color = 'yellow';
    yellow[0].style.backgroundColor = 'yellow';
  } else {
    yellow[0].style.backgroundColor = 'rgb(15, 15, 15)';
  }
  if (countdown >= 8) {
    let countDown = document.getElementsByClassName('countdown');
    countDown[0].style.color = 'rgb(3, 245, 11)';
    iconA[0].style.color = 'rgb(3, 245, 11)';
    green[0].style.backgroundColor = 'green';
  }
  if (countdown > 20) location.reload();
}, 1000);

// let countDown = 60;

// // for (let i = countDown - 1; i >= 0; i--) {}
