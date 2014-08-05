var jalaali = require('jalaali-js')
var months =  [ 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'امرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']

/* Replace content of time elements */
Array.prototype.forEach.call(document.querySelectorAll('time'), function (el) {
  var datetime = el.getAttribute('datetime')
    , g = datetime.substring(0, 10).split('-')
    , j = jalaali.toJalaali(+g[0], +g[1], +g[2])
    , t = j.jd + ' ' + months[j.jm - 1] + ' ' + j.jy
  el.textContent = t.replace(/(\d)/g, function (match) { return String.fromCharCode(1728 + match.charCodeAt(0))})
})
