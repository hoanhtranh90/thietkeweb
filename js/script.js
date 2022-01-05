
// var a = document.getElementById('scroll');
window.onscroll = function () { scrollFunction() };
$(document).ready(function(){
  
  $('html, body').scrollTop(0);

  $(window).on('load', function() {
  setTimeout(function(){
      $('html, body').scrollTop(0);
  }, 0);
});
$(".menu-trigger").on('click', function() {	
  $(this).toggleClass('active');
  $('#mn').toggleClass("showw");
});

});
function scrollFunction() {

  if (document.documentElement.scrollTop > 30) {
    // a.style.display = "block";
    document.getElementById("check").checked = false;
    document.getElementsByClassName("backSc")[0].classList.remove("backSc_active")
    changeBg()
    // document.getElementsByClassName("banner")[0].classList.remove("check_bg_opa")
    // document.getElementsByClassName("header")[0].classList.remove("check_gb_header")
  } else {
    // a.style.display = "none";
  }
}
// hide menu when click other
function removebg() {
  document.getElementsByClassName("backSc")[0].classList.remove("backSc_active")
  document.getElementById("check").checked = false;
}
function changeBg() {
  let c = document.getElementById("check").checked;
  if (c) {
    // document.getElementsByClassName("banner")[0].className += " check_bg_opa"
    // document.getElementsByClassName("header")[0].className += " check_gb_header"
    document.getElementsByClassName("backSc")[0].className += " backSc_active"
    document.getElementsByClassName("check__btn")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("check__btn")[0].getElementsByTagName("img")[1].style.display = "unset"


  }
  else {
    document.getElementsByClassName("backSc")[0].classList.remove("backSc_active")
    document.getElementsByClassName("check__btn")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("check__btn")[0].getElementsByTagName("img")[1].style.display = "none"
    // document.getElementsByClassName("banner")[0].classList.remove("check_bg_opa")
    // document.getElementsByClassName("header")[0].classList.remove("check_gb_header")

  }
}


// a.addEventListener('click', function () {

//   document.documentElement.scrollTop = 0;
//   console.log(self.pageYOffset);
// })
function uncheck() {
  document.getElementById("check").checked = false;
}
function changeLayout(i) {
  console.log("=>>i", i)
  let name = "sanpham" + i;
  let name1 = "sanpham1";
  let name2 = "sanpham2";
  let name3 = "sanpham3";
  let list = [name1, name2, name3];
  let glayout = document.getElementsByClassName("grid-sanpham")[0]
  let g_sp = document.querySelectorAll(".grid-sanpham > div");
  let k;
  Array.from(document.querySelectorAll(' .grid-sanpham > div ')).forEach((e, index) => {
    // console.log("=>>",e.getElementsByTagName('div')[0])
    if (e.getElementsByTagName('div')[0].classList.contains('sanpham-card-show')) k = index;
  });
  document.querySelector(".grid-sanpham > img:nth-child(1)").style.opacity = 0
  setTimeout(() => {
  document.querySelector(".grid-sanpham > img:nth-child(1)").style.opacity = 1
  document.querySelector(".grid-sanpham > img:nth-child(1)").style.transition = "all 1s";
    
  }, 500);
  let name_ = 'sanpham' + `${k + 1}`
  console.log(" k", name_)
  document.querySelector(`.${name_} > div:nth-child(2)`).classList.add("ani-out-2")
  setTimeout(() => {
    if (document.querySelector(`.${name_} > div:nth-child(2)`).classList.contains("ani-out-2"))
      document.querySelector(`.${name_} > div:nth-child(2)`).classList.remove("ani-out-2")

  }, 500);


if(i == 3 && k == 0) {
  console.log("abc")
  document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.add("ani-out")
  setTimeout(() => {
    if( document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.contains("ani-out"))
  document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.remove("ani-out")

  }, 500);
}
else if (i == 1 && k == 1) {
  console.log("abc")
  document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.add("ani-out")
  setTimeout(() => {
    if( document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.contains("ani-out"))
  document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.remove("ani-out")

  }, 500);
}
else if (i == 2 && k == 0) {
  console.log("abc")
  document.querySelector(`.sanpham1 > div:nth-child(2)`).classList.add("ani-out")
  setTimeout(() => {
    if( document.querySelector(`.sanpham1 > div:nth-child(2)`).classList.contains("ani-out"))
  document.querySelector(`.sanpham1 > div:nth-child(2)`).classList.remove("ani-out")

  }, 500);
}
else if (i == 2 && k == 2) {
  console.log("abc")
  document.querySelector(`.sanpham3 > div:nth-child(2)`).classList.add("ani-out")
  setTimeout(() => {
    if( document.querySelector(`.sanpham3 > div:nth-child(2)`).classList.contains("ani-out"))
  document.querySelector(`.sanpham3 > div:nth-child(2)`).classList.remove("ani-out")

  }, 500);
}
else if (i == 3 && k == 1 || i == 1 && k == 2) {
  console.log("abc")
  document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.add("ani-out")
  setTimeout(() => {
    if( document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.contains("ani-out"))
  document.querySelector(`.sanpham2 > div:nth-child(2)`).classList.remove("ani-out")

  }, 500);
}


Array.from(document.querySelectorAll(".grid-sanpham > div > div")).forEach((e) => {
  if (e.classList.contains("sanpham-flexbox")) {
    e.classList.remove("sanpham-flexbox");
  }

  if (e.classList.contains("sanpham-card-show")) {
    e.classList.remove("sanpham-card-show");
  }
  if (e.classList.contains("sanpham-card-hidden")) {
    e.classList.remove("sanpham-card-hidden");
    // e.classList.add("ani-out")
  }
});
if (i == 1) glayout.style.gridTemplateAreas = `"${name1} ${name1} ${name2} ${name2}" "${name1} ${name1} ${name3} ${name3}"`;
if (i == 2) glayout.style.gridTemplateAreas = `"${name2} ${name2} ${name1} ${name1}" "${name2} ${name2} ${name3} ${name3}"`;
if (i == 3) glayout.style.gridTemplateAreas = `"${name3} ${name3} ${name1} ${name1}" "${name3} ${name3} ${name2} ${name2}"`;
let sp = document.querySelector(`.${name} > div:nth-child(1)`);
sp.className = 'sanpham-flexbox sanpham-card-show';
$(".sanpham-flexbox > div:nth-child(1)").css("width","400px")
setTimeout(() => {
$(".sanpham-flexbox > div:nth-child(1)").css("width","60%");
}, 1000);
list.forEach(e => {
  if (e != name) {
    let s = document.querySelector(`.${e} > div:nth-child(1)`);
    s.className = 'sanpham-card-hidden'
  }
})
let sp2 = document.querySelector(`.${name} > div:nth-child(2)`);
sp2.className = 'sanpham-card-hidden'

}

// thiet lap hover 1 so button
var mobile = window.matchMedia("(max-width: 739px)").matches;
document.getElementsByClassName("gtnn-3")[0].getElementsByTagName("img")[1].style.width = "50px"
document.getElementsByClassName("gtnn-3")[0].getElementsByTagName("img")[1].style.height = "50px"
document.getElementsByClassName("gtnn-2")[0].getElementsByTagName("img")[1].style.width = "50px"
document.getElementsByClassName("gtnn-2")[0].getElementsByTagName("img")[1].style.height = "50px"
document.getElementsByClassName("gtnn-1")[0].getElementsByTagName("img")[1].style.width = "50px"
document.getElementsByClassName("gtnn-1")[0].getElementsByTagName("img")[1].style.height = "50px"
if(mobile) {

  //gt
  $('.gioithieu-ic-prev').bind('touchstart', function(){
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-prev")[0].style.backgroundColor = "#00AAFF";
  });
  $('.gioithieu-ic-prev').bind('touchend', function(){
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-prev")[0].style.backgroundColor = "#fff";
  });

  $('.gioithieu-ic-next').bind('touchstart', function(){
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-next")[0].style.backgroundColor = "#00AAFF";
  });
  $('.gioithieu-ic-next').bind('touchend', function(){
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-next")[0].style.backgroundColor = "#fff";
  });
  //end

  //tuyendung
  $('.tuyendung-ic-prev').bind('touchstart', function(){
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-prev")[0].style.backgroundColor = "#00AAFF";
  });
  $('.tuyendung-ic-prev').bind('touchend', function(){
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-prev")[0].style.backgroundColor = "#fff";
  });

  $('.tuyendung-ic-next').bind('touchstart', function(){
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-next")[0].style.backgroundColor = "#00AAFF";
  });

  $('.tuyendung-ic-next').bind('touchend', function(){
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-next")[0].style.backgroundColor = "#fff";
  });
  //end
  console.log("xx", $('.gtnn-3'))
  $('.gtnn-3').bind('touchstart', function(){
    document.getElementsByClassName("gtnn-3")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("gtnn-3")[0].getElementsByTagName("img")[1].style.display = "unset"
  });
  $('.gtnn-3').bind('touchend', function(){
    document.getElementsByClassName("gtnn-3")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("gtnn-3")[0].getElementsByTagName("img")[1].style.display = "none"

  });
  $('.gtnn-2').bind('touchstart', function(){
    document.getElementsByClassName("gtnn-2")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("gtnn-2")[0].getElementsByTagName("img")[1].style.display = "unset"
  });
  $('.gtnn-2').bind('touchend', function(){
    document.getElementsByClassName("gtnn-2")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("gtnn-2")[0].getElementsByTagName("img")[1].style.display = "none"

  });
  $('.gtnn-1').bind('touchstart', function(){
    document.getElementsByClassName("gtnn-1")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("gtnn-1")[0].getElementsByTagName("img")[1].style.display = "unset"
  });
  $('.gtnn-1').bind('touchend', function(){
    document.getElementsByClassName("gtnn-1")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("gtnn-1")[0].getElementsByTagName("img")[1].style.display = "none"

  });
  
}
else {
  $(".gioithieu-ic-prev").hover(function () {
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-prev")[0].style.backgroundColor = "#00AAFF";
  }, function () {
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-prev")[0].style.backgroundColor = "#fff";
  
  });
  $(".gioithieu-ic-next").hover(function () {
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-next")[0].style.backgroundColor = "#00AAFF";
  }, function () {
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("gioithieu-ic-next")[0].style.backgroundColor = "#fff";
  
  });
  $(".tuyendung-ic-prev").hover(function () {
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-prev")[0].style.backgroundColor = "#00AAFF";

  }, function () {
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-prev")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-prev")[0].style.backgroundColor = "#fff";
  
  });
  $(".tuyendung-ic-next").hover(function () {
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[0].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[1].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-next")[0].style.backgroundColor = "#00AAFF";
    
  }, function () {
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[0].style.display = "unset"
    document.getElementsByClassName("tuyendung-ic-next")[0].getElementsByTagName("img")[1].style.display = "none"
    document.getElementsByClassName("tuyendung-ic-next")[0].style.backgroundColor = "#fff";
  
  });
}
//end










function animationGioiThieu() {
  console.log("Abc")
  let a = document.getElementById("op1");
  a.classList.add("animated");
  setTimeout(() => {
    a.classList.remove("animated");
  }, 600);

  let b = document.getElementById("op2");
  b.classList.add("animated");
  setTimeout(() => {
    b.classList.remove("animated");
  }, 600);
}


function showdetail(classN) {
  if(document.getElementsByClassName(classN)[0].style.display != "block"){
  document.getElementsByClassName(classN)[0].style.display = "block"
  }
  else {
  document.getElementsByClassName(classN)[0].style.display = "none"

  }
}


