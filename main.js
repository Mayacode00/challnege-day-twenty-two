const dateTimeInput = `${document.querySelector(".date").value} ${
  document.querySelector(".time").value
}`;
document.querySelector(".submit").addEventListener("click", function (event) {
  event.preventDefault();
  const dateTimeInput = `${document.querySelector(".date").value} ${
    document.querySelector(".time").value
  }`;
  const futureDateTime = new Date(dateTimeInput).getTime();
  const x = setInterval(() => {
    const presentDateTime = new Date().getTime();
    const differences = futureDateTime - presentDateTime;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const days = hour * 24;

    const secRem = Math.floor((differences % minutes) / seconds);
    const minsRem = Math.floor((differences % hour) / minutes);
    const hoursRem = Math.floor((differences % days) / hour);
    const daysRem = Math.floor(differences / days);

    document.querySelector(".days").innerHTML = daysRem;
    document.querySelector(".hours").innerHTML = hoursRem;
    document.querySelector(".min").innerHTML = minsRem;
    document.querySelector(".seconds").innerHTML = secRem;

    document.querySelector(".remainder").innerHTML = "Remaining";

    if (differences === 0) {
      clearInterval(x);
      document.querySelector(".submit").innerHTML = "Time's Up";
    }
    if (presentDateTime > futureDateTime) {
      alert("Really!!!");
    }
    if (dateTimeInput === " ") {
      alert("please input date and time");
    }
  }, 1000);
});
