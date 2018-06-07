var d = parseInt(process.argv[2]);
var m = process.argv[3];
var y = parseInt(process.argv[4]);

function leapYear(year) { 
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0); 
}

function sumDays(arr, n){
    var sum = 0;
    for(var i = 0; i < n; i++){
        sum += parseInt(arr[i]);
    }
    return sum;
}

var k = leapYear(y)?1:0;
var days = [31, 28 + k, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var mS = ['января', 'февраля', 'марта', 'апреля', 
          'мая', 'июня', 'июля', 'августа', 
          'сентября', 'октября', 'ноября', 'декабря'];

var result = (365 + k) - sumDays(days, mS.indexOf(m)) - d;
process.stdout.write(result.toString());