var h = window.screen.height;
var w = window.screen.width;
nw.Window.open("localhost:5500/app/widget/windows/widget.html", {
  width: w,
  height: 90,
  y: h,
  always_on_top: true,
  frame: true,
  transparent: false
});
