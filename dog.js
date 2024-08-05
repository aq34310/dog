






var page = 0 ;
     function pageUpdate() {
        $('ul.train').css('transition','.5s').css('transform', `translateX(${page * -750}px)`);

     }

     function pageUpdatewithouttransition() {
        
        $('ul.train').css('transition','none').css('transform', `translateX(${page * -750}px)`);
         
     }

    function moveright(){
        page++
        pageUpdate();
        if(page>=5){
               /*transition結束後transitionend*/ 
            $('ul.train').one('transitionend',function(){
               console.log('hi', );
               page=0;
               pageUpdatewithouttransition();
            })
         }

         else if(page >=3){
            $('.g').text("狗狗遊戲").css('color', '#da7f5b');

            $('.z').text
("蘇軾說過一句發人省思的話，天涯何處無芳草，多情卻被無情惱。這段話的餘韻不斷在我腦海中迴盪著。科恩告訴我們，人生不是自發的自我發展，而是一長串機緣。事件和決定，這些機緣、事件和決定在它們實現的當時是取決於我們的意志的。這激勵了我。那麼，狗狗社交的發生，到底需要如何實現，不狗狗社交的發生，又會如何產生。");
         }

         else{
            $('.g').text("狗狗社交").css('color', '#d6be88');
            $('.z').text("這必定是個前衛大膽的想法。狗狗社交可以說是有著成為常識的趨勢。克勞德蘭納新深信，貪婪者總是一貧如洗。這把視野帶到了全新的高度。在這種困難的抉擇下，本人思來想去，寢食難安。這樣看來，富蘭克林曾講過，讀書是易事，思索是難事，但兩者缺一，便全無用處。這不禁令我深思。");
         }

        console.log('page', page );
    }   

    let myinterval = null;

    function startInterval(){

        myinterval = setInterval(moveright, 2000);
    }
    startInterval();

    $('.bg-p').mouseenter(function(){

        clearInterval(myinterval)
    })

    $('.bg-p').mouseleave(function(){
        startInterval()
    })


   

  $('.a').hover(function () {
   $(this).addClass('fuq');
}, function () {
   $(this).removeClass('fuq');
});


function tcircle() {
   $('.traincircle').css('transition','.5s').css('transform', `translateX(${page *-600}px)`);

}



$(".circle-two").on("click", ".next-page", function () {
   page++
   tcircle();
   
   if(page>=1){
      page=1;
      $('.next-page').addClass('clickk')
      $('.b-ss').text("活動介紹");
   }

   // else if(page==0){
   //    $('.b-ss').text("活動");
   // }

    $(".circle-two").on("click", ".clickk",function () {
      $('.traincircle').css('transition','.5s').css('transform', `translateX(${page *0}px)`)
      $('.next-page').removeClass('clickk')
      $('.b-ss').text("活動資訊");
   });

   tcircle();
}); /*this綁定的是li*/


$(window).scroll(function () {

   console.log('scrollTop', $(window).scrollTop());
  
   const scorllTop = $(window).scrollTop();
   
 
   if (scorllTop > 300) {
       $('.flower').addClass('big')
   }
   else {
      $('.flower').removeClass('big')
   }
})


