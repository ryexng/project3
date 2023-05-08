$(document).ready(function(){

//트리거
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnb").slideToggle();
  });

  $(window).resize(function(){
    
    let w = $(window).width();

    if(w>767){
      $(".gnb").removeAttr("style");
    }
  });


  // //글래스 모피즘
  // let goldidx=0;
  // let gidx=0;

  // function glass(gidx){
  //   if(goldidx!=gidx){

  //     $(".img-in li").eq(goldidx).stop().fadeOut(300);
  //     $(".img-in li").eq(gidx).stop().fadeIn(300);
  //   };
  //   goldidx=gidx;
  // };

  // $(".glass-img .i1").click(function(){
  //   gidx--;
  //   if(gidx<0){
  //     gidx=3;
  //   }
  //   glass(gidx);
  // });

  // $(".glass-img .i3").click(function(){
  //   gidx++;
  //   if(gidx>3){
  //     gidx=0;
  //   }
  //   glass(gidx);
  // });

});
