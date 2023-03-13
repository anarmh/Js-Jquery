// let leftIcon = document.querySelector(".slider .left");
// let rightIcon = document.querySelector(".slider .right");

// function rightSlider(){
//     let activeImage = document.querySelector(".active-img");
//     activeImage.classList.remove("active-img");
//     if(activeImage.nextElementSibling != null){
//         activeImage.nextElementSibling.classList.add("active-img");
//     }else{
//         activeImage.parentNode.firstElementChild.classList.add("active-img");
//     }
// }

// function leftSlider(){
//     let activeImage = document.querySelector(".active-img");
//     activeImage.classList.remove("active-img");
//     if(activeImage.previousElementSibling != null){
//         activeImage.previousElementSibling.classList.add("active-img");
//     }else{
//         activeImage.parentNode.lastElementChild.classList.add("active-img");
//     }
// }

// rightIcon.addEventListener("click",rightSlider);

// leftIcon.addEventListener("click",leftSlider);

// rightIcon.addEventListener("mouseover",rightSlider)

// leftIcon.addEventListener("mouseover",leftSlider)

// setInterval(rightSlider,3000);

$(document).ready(function () {
  $(".right").on("click", function () {
    let current = $(".active-img");
    let next = current.next();
    if (next.length) {
      current.removeClass("active-img");
      next.addClass("active-img");
    } else {
      current.removeClass("active-img");
      $("img:first-child").addClass("active-img");
    }
  });
  $(".left").on("click", function () {
    let current = $(".active-img");
    let prev = current.prev();
    if (prev.length) {
      current.removeClass("active-img");
      prev.addClass("active-img");
    } else {
      current.removeClass("active-img");
      $("img:last-child").addClass("active-img");
    }
  });
});
setInterval(function(){
    let current = $(".active-img");
    let next = current.next();
    if (next.length) {
      current.removeClass("active-img");
      next.addClass("active-img");
    } else {
      current.removeClass("active-img");
      $("img:first-child").addClass("active-img");
    }
},3000)
