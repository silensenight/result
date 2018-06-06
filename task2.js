var d = parseInt(process.argv[2]);
var m = process.argv[3];
var y = parseInt(process.argv[4]);

const months = {
  января: 0,
  февраля: 1,
  марта: 2,
  апреля: 3,
  мая: 4,
  июня: 5,
  июля: 6,
  августа: 7,
  сентября: 8,
  октября: 9,
  ноября: 10,
  декабря: 11,
};

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function addDay(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
}

function countDays(d, m, y) {
  let num = days[months[m]] - d > 0 ? days[months[m]] - d : 0;

  for (let i = months[m] + 1; i < 12; i++) {
    num += days[i];
  }

  if (months[m] === 1 || (months[m] === 2 && d <= 28)) {
    num += addDay(y);
  }

  return num;
}

process.stdout.write(countDays(d, m, y));
