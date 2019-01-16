var start = 1545170400;
var b = [];
var myVar = setInterval(test, 1000);
var t = new Date().getTime();
var d = t / 1000;
var h = (d - 1545170400) / 3600;
var n = Math.floor(h / 19 % 6);
var l = h % 19;
var a = [
"祖達薩",
"提拉加德海灣",
"納兹米爾",
"斯陀頌恩谷地",
"沃魯敦",
"佐斯瓦",
"祖達薩"];

function test() {
  var t = new Date().getTime();
  var d = t / 1000;
  var h = (d - 1545170400) / 3600;
  var n = Math.floor(h / 19 % 6);
  var l = h % 19;
  var a = [
  "祖達薩",
  "提拉加德海灣",
  "納兹米爾",
  "斯陀頌恩谷地",
  "沃魯敦",
  "佐斯瓦",
  "祖達薩"];


  if (l < 7) {
    ReactDOM.render("正在入侵", document.getElementById("state"));

    ReactDOM.render(a[n], document.getElementById("location"));
    ReactDOM.render(
    display(Math.floor((7 - l) * 60 * 60)),
    document.getElementById("countdown"));

  } else {
    ReactDOM.render("下次入侵", document.getElementById("state"));

    ReactDOM.render(a[n + 1], document.getElementById("location"));
    ReactDOM.render(
    display(Math.floor((19 - l) * 60 * 60)),
    document.getElementById("countdown"));

  }



}



function display(seconds) {
  var hours = seconds / 3600;
  var minutes = seconds % 3600 / 60;
  seconds %= 60;

  return [hours, minutes, seconds].map(format).join(":");
}





function format(val) {
  return ("0" + Math.floor(val)).slice(-2);
}

function Inv(nextcount) {
  var now = Math.floor(new Date().getTime() / 1000);
  var ttt = Math.floor(now - start);
  var k = Math.floor(ttt / 3600 / 19) + nextcount;
    var tn= n;
  if (tn=5) {
    tn=0}
  ;
  var nextInvasion = new Date((start + k * 3600 * 19) * 1000);
  var ampm = nextInvasion.getHours() >= 12 ? nextInvasion.getHours() + ':00 PM' : nextInvasion.getHours() + ':00 AM';
  var weekday = new Array(7);
  weekday[0] = "星期日";
  weekday[1] = "星期一";
  weekday[2] = "星期二";
  weekday[3] = "星期三";
  weekday[4] = "星期四";
  weekday[5] = "星期五";
  weekday[6] = "星期六";
  var outstr = a[tn +  nextcount] + "    " + weekday[nextInvasion.getDay()] + "   " + ampm;
  return outstr;
}






ReactDOM.render(
React.createElement("div", null,
  React.createElement("div", null, Inv(1)),
  React.createElement("div", null, Inv(2)),
  React.createElement("div", null, Inv(3))),


document.getElementById("list"));
