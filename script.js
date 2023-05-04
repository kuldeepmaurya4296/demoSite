gsap.set("#image",{
  top:"50vh"
})


gsap.to("#image",{
  scrollTrigger:{
    trigger:"#section",
    start:"top 100%",
    end:"top 50%",
    scrub:5,
  },
  top:"-200%",
  rotate:"-60deg",
  ease:Power0.easeInOut,
})

gsap.to("#fcir",{
  scrollTrigger:{
    trigger:"#section",
    start:"top 60%",
    end:"top -90%",
    scrub:2,
  },
  rotate:"940deg"
})

gsap.to("#ccir",{
  scrollTrigger:{
    trigger:"#section",
    start:"top 60%",
    end:"top -90%",
    scrub:2,
  },
  rotate:"-940deg"
})

gsap.to("#lcir",{
  scrollTrigger:{
    trigger:"#section",
    start:"top 60%",
    end:"top -90%",
    scrub:2,
  },
  rotate:"940deg"
})
gsap.to("#innercir",{
  scrollTrigger:{
    trigger:"#section",
    start:"top 50%",
    end:"top -90%",
    scrub:2,
  },
  rotate:"360deg",
  width:"50px",
  height:"50px",
  color:"black",
  fontSize: "50px",


})


var tl = gsap.timeline({
  
  scrollTrigger:{
    trigger:"#album",
    start:"center center",
    end:"top 0",
    scrub:2,
    pin:true,
    duration:2
  },
}
)


tl.to("#one1",{
  top:"50%",
  rotate:"720deg",
  ease:Power0.easeInOut,
})


tl.to("#two2",{
  left:"60%",
  ease:Power0.easeInOut,
})


tl.to(".box1",{
  left:"-90%",
  ease:Power0.easeInOut,
})


var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:"#text4",
      start:"center 60%",
      end:"top 0%",
      // markers:true,
      pin:true,
      scrub:2,
  }
})

tl2.to("#text4 #reels .reel" ,{
  // x:"100%",
  // ease:Power0.easeInOut,
  opacity: 2, 
  duration:.2, 
} )

// tl2.to("#text4 h1 span",{
//   y:"-100px",
// })



var fs = document.querySelector("#fullscreen")
var cir = document.querySelector("#cir")
cir.addEventListener("click",function(){
  
})