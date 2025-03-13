
function loadingAnimation(){
  document.addEventListener("DOMContentLoaded", function() {
    //Improved code by gimini
        // var h5timer = document.querySelector("#line1-part1 h5")
        // var grow = 0;
        // setInterval(function(){
        //     if(grow<100){
        //         grow++
        //         h5timer.innerHTML = grow++
        //     }else{
        //         grow = 100;
        //         h5timer.innerHTML = grow
        //     }
        //     grow++
        // },33/*This time is in mili second and it's like 100ms, 10000ms like this*/);
    
      var tl = gsap.timeline();
    
      tl.from(".line h1,h4", {
          y: 150,
          stagger: 0.3,
          duration: 0.5,
          delay: 0.5,
      });
    
      tl.from("#line1-part1,.line h2", {
          opacity: 0,
          onStart: function() {
              var h5timer = document.querySelector("#line1-part1 h5");
              var grow = 0;
              if (h5timer) {
                  setInterval(function() {
                      if (grow < 100) {
                          h5timer.innerHTML = grow;
                          grow++;
                      } else {
                          grow = 100;
                          h5timer.innerHTML = grow;
                      }
                  }, 30);
              }
          },
      });
    
      tl.to(".line h2",{
          animationName:"anime",
          opacity:0,
      });
    
      tl.to("#loder", {
          opacity: 0,
          duration: 0.4,
          delay: 3,
          onComplete: function() { // ON complete have to show 
              document.querySelector("#loder").style.display = "none";
          }
      });
    
      tl.from("#page1", {
          delay: 0.2,
          y: 1600,
          opacity: 0,
          duration: 0.5,
          ease: "power4",
      });
      tl.from(".hero #nav",{
        opacity:0,
      });
      tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1 ",{
         y:120,
         stagger:0.2,
      });
    
      // gsap.registerPlugin(ScrollTrigger); // have to do this before using scroll-trigger
    
      // gsap.from("#page2", {
      //     x: -100,
      //     scrollTrigger: {
      //         trigger: "#page2",
      //         scroller: "body",
      //         start: "top 80%",
      //         end: "top 20%",
      //         scrub: true,
      //         markers: false,
      //     }
      // });
    });
};
loadingAnimation();// Calling the function

function curserAnimation(){
 document.addEventListener("DOMContentLoaded",function(){
    document.addEventListener("mousemove",function(dets){
     gsap.to("#crsr",{
      left:dets.x,
      top:dets.y
       })
    });
    Shery.makeMagnet("#nav-part2 h4"/*Element to target*/,{
      //Parameters are optional.
      duration: 1,
    });
  });
}
curserAnimation();

//My Code full of mistakes analysis
// document.addEventListener("DOMContentLoaded", function(){
   
//   // var h5timer = document.querySelector("#line1-part1 h5")
//   // var grow = 0;
//   // setInterval(function(){
//   //     if(grow<100){
//   //         grow++
//   //         h5timer.innerHTML = grow++
//   //     }else{
//   //         grow = 100;
//   //         h5timer.innerHTML = grow
//   //     }
//   //     grow++
//   // },33/*This time is in mili second and it's like 100ms, 10000ms like this*/);
//   var tl = gsap.timeline();
//   tl.from(".line h1",{
//      y:150,
//      stagger:0.3,
//      duration:0.6,
//      delay:0.5,
//   });
//   tl.from("#line1-part1, .line h2",{
//      opacity:0,
//      onStart: function(){
//       var h5timer = document.querySelector("#line1-part1 h5")
//       var grow = 0;
//       setInterval(function(){
//           if(grow<100){
//               grow++
//               h5timer.innerHTML = grow++
//           }else{
//               grow = 100;
//               h5timer.innerHTML = grow
//           }
//           grow++
//       },33);
//      }
//   });
//   tl.to("#loader", {
//      opacity:0,
//      duration:0.4,
//      delay:4,
//   });
// tl.from("#page1",{
//   delay:0.2,
//   y:1600,
//   opacity:0,
//   duration:0.5,
//   ease:power4,
// });
// tl.to("#loader",{
//   display:"none"
// });
// });
