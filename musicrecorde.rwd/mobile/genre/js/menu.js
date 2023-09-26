window.addEventListener("load", ()=>{

    const header=document.querySelector("header")
    const mobileMenuIcon=document.querySelector("#menu")
    const mobileMenu=document.querySelector("#mobilemenu")
    const mobileInfo=document.querySelectorAll("#mobile_inner_info>li")
    const mainMenu=document.querySelectorAll(".mobile_inner_menu>a")
    const subMenu=document.querySelectorAll(".mobile_inner_submenu>li>a")
    const closeBtn=document.querySelector("#close_btn")
    const overFlowBackground=document.createElement("div")
    overFlowBackground.id="overflowbackground"
  
    let mobileMenuWidth=window.innerWidth*0.8
    let selectedMenu=null
    let closeHeight=50
    let openHeight=null
  
    gsap.set(mobileMenu, {left:-mobileMenuWidth, display:"none"})
  
    mobileMenuIcon.addEventListener("click", openMobileMenu)
    closeBtn.addEventListener("click", closeMobileMenu)
    for(item of mainMenu){
      item.addEventListener("click", activateSubMenu)
    }
  
    function openMobileMenu() {
      gsap.set(mobileMenu, {display:"block", left:"-mobileMenuWidth"})
      gsap.to(mobileMenu, {left:0, duration:0.5, ease:"power1.out"})
      gsap.set(overFlowBackground, {display:"block"})
      header.append(overFlowBackground)
    }
    function closeMobileMenu(){
      // gsap.set(mobileMenu, {display:"none"})
      gsap.set(overFlowBackground, {display:"none"})
      gsap.to(mobileMenu, {left:-mobileMenuWidth, duration:0.5, ease:"power1.out"})
      gsap.to(selectedMenu.parentElement, {height:closeHeight})
    }
  
    function activateSubMenu(){
      if(selectedMenu==null){
          selectedMenu=this
        openHeight=closeHeight+(closeHeight*selectedMenu.nextElementSibling.nextElementSibling.children.length)
        gsap.to(selectedMenu.parentElement, {height:openHeight, duration:0.5, ease:"power1.out"})
        selectedMenu.nextElementSibling.classList.add("selected_down_icon")
      }
      else if(selectedMenu!=null && selectedMenu!=this){
        gsap.to(selectedMenu.parentElement, {height:closeHeight, duration:0.5, ease:"power1.out"})
        selectedMenu.nextElementSibling.classList.remove("selected_down_icon")
  
        selectedMenu=this
        openHeight=closeHeight+(closeHeight*selectedMenu.nextElementSibling.nextElementSibling.children.length)
        gsap.to(selectedMenu.parentElement, {height:openHeight, duration:0.5, ease:"power1.out"})
        selectedMenu.nextElementSibling.classList.add("selected_down_icon")
  
      }else if(selectedMenu!=null && selectedMenu==this){
          gsap.to(selectedMenu.parentElement, {height:closeHeight, duration:0.5, ease:"power1.out"})
          selectedMenu.nextElementSibling.classList.remove("selected_down_icon")
  
          selectedMenu=null
      }   
  
      // if(selectedMenu!=null && selectedMenu!=this){
      //     gsap.to(selectedMenu.parentElement, {height:closeHeight, duration:0.5, ease:"power1.out"})
      // }
  
      // if(selectedMenu!=this){
      //     selectedMenu=this
      //     openHeight=closeHeight+(closeHeight*selectedMenu.nextElementSibling.nextElementSibling.children.length)
      //     gsap.to(selectedMenu.parentElement, {height:openHeight, duration:0.5, ease:"power1.out"})
      // }
    }
  
   
    
  })