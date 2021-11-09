let flag = false;
$(".header-menu-toggle").click(function () {
  console.log("zxc");
  if (!flag) {
    $(".header-menu").slideDown(200);
  } else {
    $(".header-menu").slideUp(200);
  }
  flag = !flag;
});

// Drop textarea function
function textArea() {
  document.getElementById("textarea").style.display = "initial";
}
