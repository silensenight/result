var t1 = parseInt(process.argv[2]);
var t2 = parseInt(process.argv[3]);

const writeHours = ['час', 'часа', 'часов'];
const writeMinutes = ['минута', 'минуты', 'минут'];
const writeSeconds = ['секунда', 'секунды', 'секунд '];

function addWord(time, arr) {
  if (time === 0) {
    return '';
  }

  const timeStr = time.toString();
  let temp = '0';
  let str;

  if (timeStr.length > 1) {
    temp = timeStr.substring(timeStr.length - 2, timeStr.length - 1);
  }

  if (temp !== '1') {
    switch (timeStr.substring(timeStr.length - 1)) {
      case '0':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        str = arr[2];
        break;
      case '1':
        str = arr[0];
        break;
      case '2':
      case '3':
      case '4':
        str = arr[1];
        break;
    }
  } else {
    str = arr[2];
  }

  return ' '.concat(timeStr, ' ', str);
}

let time = t1 + t2;

const seconds = time % 60;
time = (time - seconds) / 60;
const minutes = time % 60;
const hours = (time - minutes) / 60;

const answer = addWord(hours, writeHours).concat(
  addWord(minutes, writeMinutes),
  addWord(seconds, writeSeconds)
);

process.stdout.write(answer.trim());