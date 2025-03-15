function all(username, fontname, number1="1") {
  var h2=document.querySelector("#h2")
  console.log(username)
  console.log(fontname)
  console.log(number1)
  var usersplit=username.split("")
  console.log(usersplit)
  var culter=""
  usersplit.forEach((e)=>{
    culter+=`<spans class="a" >${e}</spans>`
  })
  h2.innerHTML=culter;
  console.log(h2)
  
  if (number1==0|| number1=="") {
    
    h2.style.fontFamily=fontname
    gsap.from("#h2 .a", {
      opacity:0, 
      y:20, 
      duration:2, 
      delay:1, 
      stagger: 0.1, 
      repeat:-1, 
      yoyo:true, 
    })
  }
  else if (number1==1) {
    
    h2.style.fontFamily=fontname
    gsap.from("#h2 .a", {
      opacity:0, 
      y:90, 
      x: 20,
      duration:2, 
      delay:1, 
      stagger: 0.1, 
      repeat:-1, 
      yoyo:true, 
    })
    
  }
  else if (number1==2) {
    
  h2.style.fontFamily=fontname
   gsap.from("#h2 .a",{
     opacity:0, 
     y:-100, 
     x:-100, 
     duration:1, 
     delay:0.5, 
   stagger:0.2, 
   repeat:-1, 
   yoyo:true, 
   })
 }

else if (number1==3) {
  
  h2.style.fontFamily=fontname
  gsap.from("#h2 .a",{
     opacity:0, 
     y:100, 
     x:-100, 
     duration:1, 
     delay:0.5, 
   stagger:0.2, 
   repeat:-1, 
   yoyo:true, 
   })
  
}


}
 function animation() {
  
  //nav queryselecter start
  //nav logo and logo name selecter
  var logoname=document.querySelector("#logoname")
  var logonametex=logoname.innerHTML
  var logonamesplit=logonametex.split("")
  var culter=""
  logonamesplit.forEach((e)=>{
    culter+=`<spans class="a">${e}</spans>`
   })
  logoname.innerHTML=culter

  //end of logo and logo name selecter
  //start animation selecter
  var animation=document.querySelector("#animationlogo")
  var animationtex=animation.innerHTML
  var animationsplit=animationtex.split("")
  var animationculter=""
  animationsplit.forEach((e)=>{
    
    animationculter+=`<spans class="a">${e}</spans>`
    
  })
  
  animation. innerHTML=animationculter
  
//end animation selecter
//start body1 selecter code 
//star  paragraph id='enter' code start
    var enter=document.querySelector("#enter")
  var entertex=enter.innerHTML
  var entersplit=entertex.split("")
  var enterculter=""
  entersplit.forEach((e)=>{
    enterculter+=`<spans class="a">${e}</spans>`
   })
  enter.innerHTML=enterculter

  //end of body1 paragraph id='enter' code
    
    //start of body1 paragraph id="someting"
  var something=document.querySelector("#something")
  var somethingtex=something.innerHTML
  var somethingsplit=somethingtex.split("")
  var somethingculter=""
  somethingsplit.forEach((e)=>{
    
    somethingculter+=`<spans class="a">${e}</spans>`
    
  })
  
  something.innerHTML=somethingculter
  
// end of body1 paragraph id="someting"
//end of body seleter


// start of body2 selecter
// start body2 paragraph id="font"
  
      var font=document.querySelector("#font")
  var fonttex=font.innerHTML
  var fontsplit=fonttex.split("")
  var fontculter=""
  fontsplit.forEach((e)=>{
    fontculter+=`<spans class="a">${e}</spans>`
   })
  font.innerHTML=fontculter

  //end of body1 paragraph id='font' code
    
    //start of body1 paragraph id="style"
  var style=document.querySelector("#style")
  var styletex=style.innerHTML
  var stylesplit=styletex.split("")
  var styleculter=""
  stylesplit.forEach((e)=>{
    
    styleculter+=`<spans class="a">${e}</spans>`
    
  })
  
  style.innerHTML=styleculter
// end of body1 paragraph id="style"
//end of body seleter
  
  var bodyan=document.querySelector("#body")

  
 var tl=gsap.timeline()
 tl.from("#nav",{
  
  y:-1500, 
  
})

tl.from("#logo1",{
  opacity:0, 
  y: -1500, 
  duration:1,
  delay:0.01, 
})
 
    tl.from("#logoname .a",{
  opacity:0, 
  y: 1500, 
  duration:1,
  stagger:0.05, 
  repeat:-1, 
  yoyo:true, 
})
 
 
  tl.from("#animationlogo .a",{
  opacity:0, 
  y: -1500, 
  duration:1,
  stagger:0.05, 
 repeat:-1, 
 yoyo:true, 
    
  })

 
 tl.from("#name",{
  
  y:-1500, 
  
}) 
 
    tl.from("#enter .a",{
  opacity:0, 
  y: 1500, 
  duration:1,
  stagger:0.01, 
})
 

 
 
  tl.from("#something .a",{
  opacity:0, 
  y: -1500, 
  duration:1,
  stagger:0.01, 
  }) 
 
 tl.from("input",{
   y: -1500, 
 })
 
tl.from("#fontstyle",{
  
  y:-1500, 
  
}) 

 tl.from("#font .a",{
  opacity:0, 
  y: -1500, 
  duration:1,
  stagger:0.01, 
})

 
 tl.from("#style .a",{
  opacity:0, 
  y: -1500, 
  duration:1,
  stagger:0.01, 
 
})

tl.from("#selectone",{
  y:-1500, 
})

tl.from("#body2",{
   
   y:-1500, 
   
 })
  


   tl.from("#body2 .hi",{
  
  y: -1500, 
  x: -1500, 
  duration:1,
  stagger:0.01, 
})

tl.from("button",{
  y:-1500
})
  
 
 tl.from("#final",{
   
    
   y: -15000, 
 })
 
 tl.from("#body3",{
  
   y:-15000, 
   
   
 })
 

var username=""
var fontname=""
var number1=""

function valuename() {
  var name=document.querySelector("#myname")
  var btn=document.querySelector("#myname button")
 btn.addEventListener("click",()=>{
    username=name.value
    
    return entername;
  })
 
}

entername=valuename()

function ajay(){
 
 var input=document.querySelector("#select")
 var btn=document.querySelector("#myname button")
 btn.addEventListener("click",()=>{
    fontname=input.value
    
    return valuefont;
  })
 
}
 
valuefont =ajay()

function body2() {
 

var hi = document.querySelectorAll(".hi")
var number=""
hi[0].addEventListener("click",()=>{
  console.log("hi")
  hi[0].style.border="5px solid red"
  hi[1].style.border="1px solid black"
  hi[2].style.border="1px solid black"
  hi[3].style.border="1px solid black"
  number=0;
  return number;
}) 

hi[1].addEventListener("click",()=>{
  
  hi[1].style.border="5px solid red"
  hi[0].style.border="1px solid black"
  hi[2].style.border="1px solid black"
  hi[3].style.border="1px solid black" 
  number=1;
  return number;
}) 
  
  hi[2].addEventListener("click",()=>{
  
  hi[2].style.border="5px solid red"
  hi[0].style.border="1px solid black"
  hi[1].style.border="1px solid black"
  hi[3].style.border="1px solid black" 
  number=2;
  return number;
  }) 
  
  
  
  hi[3].addEventListener("click",()=>{
  
  hi[3].style.border="5px solid red"
  hi[1].style.border="1px solid black"
  hi[2].style.border="1px solid black"
  hi[0].style.border="1px solid black" 
  number=3;
 
  }) 
 var btn=document.querySelector("#myname button")
  btn.addEventListener("click",()=>{
   
    number1 =number
   
}) 

}

 number=body2()

var btn=document.querySelector("#myname button")
  btn.addEventListener("click",()=>{
   
   all(username, fontname, number1)
    
  
  }) 

} // open web page and refresh time animation function



animation()
console.log("hi")
