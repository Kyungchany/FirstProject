window.addEventListener("load", ()=>{
  

 
  const contentsWrap1=document.querySelectorAll("#music_contents_1_list>li")
  const contentsWrap2Title=document.querySelector("#music_contents_2_list_center")
  const contentsWrap2List=document.querySelector("#music_contents_2_list_middle")
  const contentsWrap3Title=document.querySelector("#music_contents_3_center_title")
  const contentsWrap3List=document.querySelectorAll("#music_contents_3_list>li")
  const contentsWrap4List=document.querySelectorAll("#music_contents_4>li")
  const contentsWrap5Title=document.querySelector("#vip_title")
  const contentsWrap5TitleText=document.querySelector("#vip_text")
  const contentsWrap5List=document.querySelectorAll("#vip_membership>li")

  const contetnsWrap2H=document.querySelector("#music_contents_wrap2_title")
  const contetnsWrap2Li=document.querySelectorAll("#music_contents_2>li")

  let windowHeight=window.innerHeight


 
  window.addEventListener("scroll", scrollWindowEvent)

  function scrollWindowEvent(){
    let scrollHeight=window.pageYOffset

    if(scrollHeight>300){
      for(i=0; i<contentsWrap1.length; i++){
        gsap.to(contentsWrap1[i], {opacity:1, top:0, delay:0.3*i})
      }
    }
    if(scrollHeight>700){
      for(i=0; i<contetnsWrap2Li.length; i++){
        gsap.to(contetnsWrap2Li[i], {top:0, opacity:1, delay:0.3*i})
      }
      // gsap.to(contetnsWrap2H, {top:50, opacity:1, duration:1, ease:"power1.out", onComplete:()=>{
      //   gsap.to(contetnsWrap2Li, {top:80, opacity:1, duration:1, ease:"power1.out"})
      // }})
    }
    if(scrollHeight>900){
      gsap.to(contentsWrap2Title, {top:50, opacity:1, duration:1, ease:"power1.out", onComplete:()=>{
        gsap.to(contentsWrap2List, {opacity:1, duration:3, ease:"power1.out"})
      }})
    }
    if(scrollHeight>1550){
      gsap.to(contentsWrap3Title, {opacity:1, top:30, duration:0.5, ease:"power1.out"})
      for(i=0; i<contentsWrap3List.length; i++){
        gsap.to(contentsWrap3List[i], {opacity:1, delay:0.5*i})
      }
    }

    if(scrollHeight>1800){
      for(i=0; i<contentsWrap4List.length; i++){
        gsap.to(contentsWrap4List[i], {opacity:1, left:0, delay:0.5*i})
      }
    }
    if(scrollHeight>2400){
      gsap.to(contentsWrap5Title, {opacity:1, top:0, duration:0.5, ease:"power1.out", onComplete:()=>{
        gsap.to(contentsWrap5List[0], {opacity:1, left:0, duration:1, ease:"power1.out"})
      }})
      gsap.to(contentsWrap5TitleText, {opacity:1, top:0, duration:0.5, ease:"power1.out", onComplete:()=>{
        gsap.to(contentsWrap5List[1], {opacity:1, left:0, duration:1.5, ease:"power1.out"})
      }})
    }
    

  }


})