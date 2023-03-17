

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
  $(".dots .dot").click(function(){
   let index= $(this).index()
   $(".img img").removeClass("active-img");
   $(".img img:eq("+index+")").addClass("active-img");
  })

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
