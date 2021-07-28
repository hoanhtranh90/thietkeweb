
// var a = document.getElementById('scroll');
window.onscroll = function () { scrollFunction() };

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
  if(c) {
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
  let name = "sanpham" + i;
  let name1 = "sanpham1";
  let name2 = "sanpham2";
  let name3 = "sanpham3";
  let list = [name1, name2, name3];
  let glayout = document.getElementsByClassName("grid-sanpham")[0]
  let g_sp = document.querySelectorAll(".grid-sanpham > div");
  Array.from(document.querySelectorAll(".grid-sanpham > div > div")).forEach((e) => {
    console.log(e)
    if (e.classList.contains("sanpham-flexbox")) {
      e.classList.remove("sanpham-flexbox");
    }
    if (e.classList.contains("sanpham-card-show")) {
      e.classList.remove("sanpham-card-show");
    }
    if (e.classList.contains("sanpham-card-hidden")) {
      e.classList.remove("sanpham-card-hidden");
    }
  });
  if (i == 1) glayout.style.gridTemplateAreas = `"${name1} ${name1} ${name2} ${name2}" "${name1} ${name1} ${name3} ${name3}"`;
  if (i == 2) glayout.style.gridTemplateAreas = `"${name2} ${name2} ${name1} ${name1}" "${name2} ${name2} ${name3} ${name3}"`;
  if (i == 3) glayout.style.gridTemplateAreas = `"${name3} ${name3} ${name1} ${name1}" "${name3} ${name3} ${name2} ${name2}"`;
  let sp = document.querySelector(`.${name} > div:nth-child(1)`);
  sp.className = 'sanpham-flexbox sanpham-card-show';
  list.forEach(e => {
    if (e != name) {
      let s = document.querySelector(`.${e} > div:nth-child(1)`);
      s.className = 'sanpham-card-hidden'
    }
  })
  let sp2 = document.querySelector(`.${name} > div:nth-child(2)`);
  sp2.className = 'sanpham-card-hidden'

}

//change button phan gioi thieu
$(".gioithieu-ic-prev").hover(function() {
  document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[0].style.display = "none"
  document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[1].style.display = "unset"
  document.getElementsByClassName("gioithieu-ic-prev")[0].style.backgroundColor  = "#00AAFF";
}, function() {
  document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[0].style.display = "unset"
  document.getElementsByClassName("gioithieu-ic-prev")[0].getElementsByTagName("img")[1].style.display = "none"
  document.getElementsByClassName("gioithieu-ic-prev")[0].style.backgroundColor  = "#fff";

});
$(".gioithieu-ic-next").hover(function() {
  document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[0].style.display = "none"
  document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[1].style.display = "unset"
  document.getElementsByClassName("gioithieu-ic-next")[0].style.backgroundColor  = "#00AAFF";
}, function() {
  document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[0].style.display = "unset"
  document.getElementsByClassName("gioithieu-ic-next")[0].getElementsByTagName("img")[1].style.display = "none"
  document.getElementsByClassName("gioithieu-ic-next")[0].style.backgroundColor  = "#fff";

});



var clicked = false, clickY;
$(document).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        clicked = true;
        clickY = e.pageY;
    },
    'mouseup': function() {
        clicked = false;
        $('html').css('cursor', 'auto');
    }
});

var updateScrollPos = function(e) {
    $('html').css('cursor', 'row-resize');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}


//slide sanpham mobile

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-red";
}










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
  document.getElementsByClassName(classN)[0].style.display = "block"
}


