
document.addEventListener("DOMContentLoaded", ()=>{

  const mainMenu=document.querySelectorAll("#mainmenu_list>li>a")
  const subMenu=document.querySelectorAll(".submenu_list")
  const headerWrap=document.querySelector("#header_wrap")
  
  let openHeight=300;
  let closeHeight=140
  let selectedMenu=null //선택한메뉴

  for(item of mainMenu){
    item.addEventListener("mouseenter", mouseenterMainMenu)
  }
  for(item of subMenu){
    item.addEventListener("mouseenter", mouseenterSubMenu)
  }
  headerWrap.addEventListener("mouseleave", mouseleaveHeaderWrap)

  function mouseenterMainMenu(){
    activateMenu(this) // 내가 고른 메뉴 활성화
  }

  function activateMenu(menu){
    if(selectedMenu!=null && selectedMenu!=menu){
      selectedMenu.parentElement.classList.remove("selected")
    }

    if(selectedMenu!=menu){
      selectedMenu=menu
      selectedMenu.parentElement.classList.add("selected")
    }

    gsap.set(subMenu, {display:'block'})

    gsap.to(headerWrap, {height:openHeight, duration:0.5, ease:"power1.out"})
      // gsap.to(subMenu, {duration:0.1, ease:"power1.out"}) 안먹힘..

    
    
    
  }

  function mouseenterSubMenu(){
    activateMenu(this)

    // gsap.set(subMenu, {opacity:1})
  }

  function mouseleaveHeaderWrap(){
    // gsap.set(subMenu, {display:'none'})
    selectedMenu.parentElement.classList.remove("selected")
    gsap.to(headerWrap, {height:closeHeight, duration:0.5, ease:"power1.out"})
    selectedMenu=null; 
  }
})