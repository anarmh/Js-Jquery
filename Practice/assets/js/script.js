$(document).ready(function(){

    // let elem=$("h1")
    // elem.text("<span>Sagol</span>");
    // elem.html("<span>Sagol</span>")
    // $(".box").css({
    //     "background-color":"magenta",
    //     "border" :"2px solid yellow",
    //     "margin-left":"200px"
    // })
  
    // $(document).on("click",".hide",function(){
    //     $(".box").fadeOut(2000,function(){
    //         $(".box").css({
    //             "margin-left":"0"
    //         })
    //     });
    // })

    // $(".show").click(function(){
    //     $(".box").fadeIn(2000,function(){
    //         $(".box").css({
    //             "background-color":"green",
    //             "border":"3px solid blue"

    //         })
    //     })
    // })
    // $(".toggle").click(function(){
    //     $(".box").fadeToggle(2000)
    // })
    // $(".show").click(function(){
    //     $(".box").animate({left:"200px"})
    // })


    $(".hide").click(function(){
        $(".box").animate({left:0});
    })

    $(".show").click(function(){
        $(".box").animate({left:"300px"})
    })

})

