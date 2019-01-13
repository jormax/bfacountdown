var myVar = setInterval(test, 1000);

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
  "斯托頌恩谷地",
  "沃魯敦",
  "佐斯瓦",
  "祖達薩"];

  if (l < 7) {

    ReactDOM.render(
    "正在入侵！！小游快上線！！！",
    document.getElementById('state'));


    ReactDOM.render(
    a[n],
    document.getElementById('location'));

    ReactDOM.render(
    display(Math.floor((7 - l) * 60 * 60)),
    document.getElementById('countdown'));
  } else {
    ReactDOM.render(
    "下次入侵",
    document.getElementById('state'));


    ReactDOM.render(
    a[n + 1],
    document.getElementById('location'));

    ReactDOM.render(
    display(Math.floor((19 - l) * 60 * 60)),
    document.getElementById('countdown'));

  }




}



function display(seconds) {
  var hours = seconds / 3600;
  var minutes = seconds % 3600 / 60;
  seconds %= 60;

  return [hours, minutes, seconds].map(format).join(':');
}

function format(val) {
  return ('0' + Math.floor(val)).slice(-2);
}
