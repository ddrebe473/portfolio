function timer(seconds, minutes, hours, days) {
  if (seconds + 1 == 60) {
    seconds = 0;
    if (minutes + 1 == 60) {
      minutes = 0;
      if (hours + 1 == 24) {
        hours = 0;
        days++;
      } else hours++;
    } else minutes++;
  } else seconds++;
  document.getElementById(
    "timer"
  ).textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
  setTimeout(() => {
    timer(seconds, minutes, hours, days);
  }, 1000);
}

timer(0, 0, 0, 0);
