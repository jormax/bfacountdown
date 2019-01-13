var myVar = setInterval(test, 1000);

function test() {
  var t = new Date().getTime();
  var d = Math.floor(t / 1000);
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
    console.log("正在入侵：", a[n], "剩餘：", display(Math.floor((7 - l) * 60 * 60)));
    var s = "正在入侵：[" + a[n] + "]，剩餘時間：" + display(Math.floor((7 - l) * 60 * 60));
    ReactDOM.render(
    "正在入侵",
    document.getElementById('state'));


    ReactDOM.render(
    a[n],
    document.getElementById('location'));

    ReactDOM.render(
    display(Math.floor((7 - l) * 60 * 60)),
    document.getElementById('countdown'));


    console.log(s);
  } else {
    console.log("下次入侵：", a[n + 1], "倒數：", display(Math.floor((19 - l) * 60 * 60)));
    var s = "下次入侵：[" + a[n + 1] + "]，倒數：" + display(Math.floor((19 - l) * 60 * 60));
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