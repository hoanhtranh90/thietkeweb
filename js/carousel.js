// vars
const $slider = $(".slider__");
const $slides = $(".slide__");
let activeIndex = 0;
// show slide by index
function show(slideIndex, animation = true) {

  if(!document.getElementsByClassName("gioithieu-card-4")[0].classList.contains("gioithieu-card-4-animated"))
  document.getElementsByClassName("gioithieu-card-4")[0].className +=" gioithieu-card-4-animated"
  setTimeout(() => {
    if(document.getElementsByClassName("gioithieu-card-4")[0].classList.contains("gioithieu-card-4-animated"))
    document.getElementsByClassName("gioithieu-card-4")[0].classList.remove("gioithieu-card-4-animated")
  }, 1000);


  let k = slideIndex;
  if (animation && slideIndex === activeIndex) {
    if(activeIndex == 2) {
      slideIndex = 0;
      activeIndex = 0
    }
    else {
      slideIndex = 2;
    activeIndex = 1
    }
  }

  if ((slideIndex == 0 && activeIndex == -1)) {
    slideIndex = 0;
    activeIndex = 0
  }
  if ((slideIndex == -1 && activeIndex == 2) || (slideIndex == -1 && activeIndex == 0)) {
    slideIndex = 2;
    activeIndex = 1
  }
  if ((slideIndex == -1 && activeIndex == 0) || (slideIndex == 2) && (activeIndex == 1)) {
    // document.getElementsByClassName("gioithieu-ic-next")[0].style.display = 'none'
    document.getElementsByClassName("slider__")[0].style.height = "470px";
  }
  else {
    // document.getElementsByClassName("gioithieu-ic-next")[0].style.display = 'block'
  }

  if ((slideIndex == 0 && activeIndex == 0) || (slideIndex == 0 && activeIndex == 1) || (slideIndex == 0 && activeIndex == -1) || (slideIndex == 0) && (slideIndex == 2)) {
    // document.getElementsByClassName("gioithieu-ic-prev")[0].style.display = 'none'
  }
  else {
    // document.getElementsByClassName("gioithieu-ic-prev")[0].style.display = 'block'
  }
  if (slideIndex == 1) {

    document.getElementsByClassName("slide__")[2].getElementsByClassName("gioithieu-card")[0].style.height = "300px";
    document.getElementsByClassName("slide__")[2].getElementsByClassName("gioithieu-card")[0].style.overflow = "hidden";
  }
  else {
    document.getElementsByClassName("slide__")[2].getElementsByClassName("gioithieu-card")[0].style.height = "auto";
    document.getElementsByClassName("slide__")[2].getElementsByClassName("gioithieu-card")[0].style.overflow = "unset";

  }
  Array.from(document.getElementsByClassName("gioithieu-btn")).forEach((e) => {

    e.className = "gioithieu-btn"
  })


  if (slideIndex === 0) document.getElementsByClassName("gioithieu-btn")[0].className += " gioithieu-btn-active";
  else if (slideIndex === 1) document.getElementsByClassName("gioithieu-btn")[1].className += " gioithieu-btn-active";
  else if (slideIndex === 2 || slideIndex === -1) document.getElementsByClassName("gioithieu-btn")[2].className += " gioithieu-btn-active";


  // if( slideIndex == 0) {
  //     slideIndex = 2;
  //     activeIndex= 2
  // }
  // else if(slideIndex == 2 || slideIndex == -1) {
  //     slideIndex = 0;
  //     activeIndex= 0
  // }





  var x = window.matchMedia("(max-width: 1200px)").matches;
  var mobile = window.matchMedia("(max-width: 739px)").matches;

  if (slideIndex == 2 || slideIndex == -1) {
    // document.getElementsByClassName("slider")[0].style.height = "800px";
    if (mobile) {
      document.getElementsByClassName("slider__")[0].style.height = "970px";

    }
    else {
      document.getElementsByClassName("slider__")[0].style.height = x ? "850px" : "780px";
    }
  }
  else if ((slideIndex == 0 && activeIndex == 0) || (slideIndex == 0 && activeIndex == 1) || (slideIndex == 0 && activeIndex == -1) || (slideIndex == 0) && (slideIndex == 2)) {
    if (mobile) {
      document.getElementsByClassName("slider__")[0].style.height = "590px";

    }
    else document.getElementsByClassName("slider__")[0].style.height = "470px";
  }
  else {
    if (mobile) {
      document.getElementsByClassName("slider__")[0].style.height = "720px";

    }
    else document.getElementsByClassName("slider__")[0].style.height = x ? "600px" : "500px";
  }

  if (slideIndex == 0) {
    console.log("abc",document.getElementsByClassName("slide__")[1].getElementsByClassName("gioithieu-card")[0])
    document.getElementsByClassName("slide__")[1].getElementsByClassName("gioithieu-card")[0].style.height = "300px";
    document.getElementsByClassName("slide__")[1].getElementsByClassName("gioithieu-card")[0].style.overflow = "hidden";
  }
  else {
    document.getElementsByClassName("slide__")[1].getElementsByClassName("gioithieu-card")[0].style.height = "auto";
    document.getElementsByClassName("slide__")[1].getElementsByClassName("gioithieu-card")[0].style.overflow = "unset";

  }




  const isNext = slideIndex > activeIndex;
  let previousSlideIndex = isNext ? slideIndex - 1 : slideIndex + 1;

  // limit slide index in range [0; length - 1]
  previousSlideIndex = Math.min(
    Math.max(previousSlideIndex, 0),
    $slides.length - 1
  );

  const $prevSlide = $slides.eq(previousSlideIndex);
  const $currentSlide = $slides.eq(slideIndex);

  // update current index
  activeIndex = slideIndex;

  // setup timeline
  let timeline = gsap.timeline();

  // hide all slides
  timeline.to($slides, { scaleX: 0.8, scaleY: 0.8, opacity: 0, rotateY: 0, zIndex: 1 }, 0);

  // stage 1: bring the prev slide to back, slide to left/right side, and rotate at the same time
  timeline.addLabel("stage1", 0);
  timeline.to(
    $prevSlide,
    {
      // width:"300px",
      // height:"300px",
      opacity: 0.4,
      zIndex: 2,
      rotateY: isNext ? "90deg" : "-90deg",
      x: isNext ? "-80%" : "80%"
    },
    "stage1"
  );

  // stage 1: bring the current slide to front
  timeline.to($currentSlide, { zIndex: 3, opacity: 1, rotateY: 0 }, "stage1");

  // stage 2: set previous slide scale and position
  timeline.addLabel("stage2");
  timeline.to(
    $prevSlide,
    {
      scaleX: 1.1,
      scaleY: 1,
      rotateY: 0,
      x: 0,
      opacity: 1
    },
    "stage2"
  );

  // stage 2: finish the current slide
  timeline.fromTo(
    $currentSlide,
    { scaleX: 0.8, scaleY: 0.8 },
    { scaleX: 1, scaleY: 1 },
    "stage2"
  );
}

// show the first slide by default
show(activeIndex, false);

// navigate
$("[data-navigate]").click(function () {
  const isNext = $(this).data("navigate") === "next";
  let nextSlideIndex = isNext ? activeIndex + 1 : activeIndex - 1;

  // limit slide index in range [0; length - 1]
  nextSlideIndex = Math.min(Math.max(nextSlideIndex, 0), $slides.length - 1);

  show(nextSlideIndex);
});




