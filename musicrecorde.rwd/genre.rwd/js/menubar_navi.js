document.addEventListener("DOMContentLoaded", ()=>{
 
  const mainMenu=document.querySelectorAll(".menubar_list_main")
  const subMenu=document.querySelectorAll(".menubar_list_sub")
  const subMenuLi=document.querySelectorAll(".menubar_list_sub>li")

  let closeHeight=80
  let openHeight=null
  let selectedMenu=null
  
  // alert(mainMenu[0].children[0].children.length)
  
  for(item of mainMenu){
    item.addEventListener("click", clickMenu)
  }
 

  // function clickMenu(){
  //   clickIndex=getIndex(this)
  //   // alert(clickIndex)
  //   activateMenu(clickIndex)
  // }
  // function getIndex(checkMenu){
  //   selectedIndex=0
  //   while((checkMenu=checkMenu.previousElementSibling)!=null){
  //     selectedIndex++
  //   }
  //   return selectedIndex
  // }

  function clickMenu(){
    
    
    if(selectedMenu==null){
      selectedMenu=this
      openHeight=closeHeight+(30*selectedMenu.children[0].children.length)
      gsap.to(selectedMenu, {height:openHeight})
    }else if(selectedMenu!=null && selectedMenu!=this){
      gsap.to(selectedMenu, {height:closeHeight})
      
      selectedMenu=this
     
      openHeight=closeHeight+(30*selectedMenu.children[0].children.length)
      gsap.to(selectedMenu, {height:openHeight})
    }else if(selectedMenu!=null && selectedMenu==this){
      gsap.to(selectedMenu, {height:closeHeight})

      selectedMenu=null
      
    }
   
    
    
  }




})