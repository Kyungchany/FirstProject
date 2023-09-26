
window.addEventListener("load", ()=>{

  const visualWrap=document.querySelector("#visual_wrap")
  const visualList=document.querySelector("#visual_list")
  const visualLi=document.querySelectorAll("#visual_list>li")
  const dot=document.querySelectorAll("#dot_list>li")
  const prevBtn=document.querySelector("#prev_btn")
  const nextBtn=document.querySelector("#next_btn")
  const prevBtnImg=document.querySelector("#prev_btn")
  const nextBtnImg=document.querySelector("#next_btn")
  const visualTitleWrap=document.querySelectorAll(".visual_title_wrap")
  const visualTitle=document.querySelectorAll(".visualTitle")
  const visualSubTitle=document.querySelectorAll(".visual_subTitle")

  let visualWidth=visualWrap.offsetWidth
  let visualLiLength=visualLi.length
  let selectedDot=dot[0]
  let currentIndex=0 //현재 순번

  // let autoPlay=setInterval(addVisualSlide, 1000)
  let autoPlay= null;
  
  // let timer=null
  // autoPlay()
  // function autoPlay(){
  //   timer=setInterval(addVisualSlide, 1000)
  // }
  
  playStart();
  
  gsap.set(visualLi, {left:visualWidth, opacity:0, scale:2}) 
  gsap.set(visualLi[0], {left:0, opacity:1})

  gsap.set(visualTitleWrap, {top:330, opacity:0})
  gsap.to(visualLi[0], {scale:1, duration:0.5, ease:"power1.out", onComplete:()=>{
    gsap.to(visualTitleWrap[0], {top:200, opacity:1, duration:1.5, ease:"power1.out"})
  }})


  // gsap.set(visualTitleWrap, {top:300, opacity:0})
  // gsap.to(visualLi[0], {scale:1, duration:0.5, ease:'power1.out', onComplete:()=>{   
  //   gsap.to(visualTitleWrap[0], {top:200, opacity:1, duration:0.5, ease:'power1.out'})
  // }})


  

  window.addEventListener("resize", visualResize)

  for(item of dot){
    item.addEventListener("mouseenter", mouseEnterDot)
  }
  visualWrap.addEventListener("mouseenter", stopvisual)
  visualWrap.addEventListener("mouseleave", playVisual)

  nextBtnImg.addEventListener("click", addVisualSlide)
  prevBtnImg.addEventListener("click", removeVisualSlide)
  

  function playStart(){
    autoPlay=setInterval(addVisualSlide, 5000)
  }

  function stopvisual(){
    clearInterval(autoPlay)
  }
  function playVisual(){
    playStart()
  }
 

  function visualResize(){
    visualWidth=visualWrap.offsetWidth
    gsap.set(visualList, {width:visualWidth})
    // gsap.set(visualTitle, {left:80})
    // gsap.set(prevBtn, {width:visualWidth/50})
  }

  function mouseEnterDot(){
    nextIndex=getIndex(this) //순번을 구하는 함수 nextIndex는 다음에 들어올 순번
    // alert(nextIndex)
    activateDot(nextIndex) //도트 활성화 하는 함수
    if(nextIndex>currentIndex){
      visualNextSlide(nextIndex)
    }else if(nextIndex<currentIndex){
      visualPrevSlide(nextIndex)
    }
   
  }

  function getIndex(checkMenu){
    let checkIndex=0
    while((checkMenu=checkMenu.previousElementSibling)!=null){
      checkIndex++
    }
    // alert(checkIndex)
    return checkIndex
  }

  function activateDot(index){
    if(selectedDot!=null && selectedDot!=dot[index]){
      selectedDot.classList.remove("selected2")
    }

    if(selectedDot!=dot[index]){
      selectedDot=dot[index]
      selectedDot.classList.add("selected2")
    }
  }

  function visualNextSlide(index){
    
    gsap.to(visualLi[currentIndex], {left:-visualWidth, opacity:0, duration:0.5, ease:"power1.out"})
    // gsap.set(visualTitleWrap[currentIndex], {top:300, opacity:0})
    gsap.set(visualTitleWrap[currentIndex], {top:300, opacity:0})
    
    gsap.set(visualLi[index], {left:visualWidth, opacity:0, scale:2})
    gsap.to(visualLi[index], {left:0, opacity:1, duration:0.5, ease:"power1.out", onComplete:()=>{
      gsap.to(visualLi[index], {duration:0.5, ease:"power1.out", scale:1, onComplete:()=>{
        gsap.to(visualTitleWrap[index], {top:200, opacity:1, duration:0.5, ease:"power1.out"})
      }})
      
  }})
  currentIndex=index 
  }
  function visualPrevSlide(index){
   
    gsap.to(visualLi[currentIndex], {left:visualWidth, opacity:0, duration:0.5, ease:"power1.out"})
    gsap.set(visualTitleWrap[currentIndex], {top:300, opacity:0})
    
    gsap.set(visualLi[index], {left:-visualWidth, opacity:0, scale:2})
    gsap.to(visualLi[index], {left:0, opacity:1, duration:0.5, ease:"power1.out", onComplete:()=>{
      gsap.to(visualLi[index], {duration:0.5, ease:"power1.out", scale:1, onComplete:()=>{
        gsap.to(visualTitleWrap[index], {top:200, opacity:1, duration:0.5, ease:'power1.out'})
      }})
      
    }})
    currentIndex=index
  }

  function addVisualSlide(){
    nextIndex=currentIndex+1
    if(nextIndex>=visualLiLength){
      nextIndex=0
    }
    activateDot(nextIndex)
    visualNextSlide(nextIndex)
  }
  function removeVisualSlide(){
    nextIndex=currentIndex-1
    if(nextIndex<0){
      nextIndex=visualLiLength-1
    }
    activateDot(nextIndex)
    visualPrevSlide(nextIndex)
  }
  



})




