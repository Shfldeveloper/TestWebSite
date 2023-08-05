let navBtn = document.querySelector(".nav__btn")
let arrowIcon = document.querySelector("#arrowIcon")
let dropDownMenu = document.querySelector(".menu__drop-down ")
let dropDownItem = document.querySelector(".menu__link--arrow")
let menu = document.querySelector(".menu")
let isDropDownOpen = false
let isMenuOpen = false
console.log(arrowIcon)
openNavBtn= ()=>{
    navBtn.classList.toggle('nav__btn--open');
    if(!isMenuOpen){
        navBtn.classList.add('nav__btn--open')
        menu.style.left = "0"
        isMenuOpen = true
    }else{
        navBtn.classList.remove('nav__btn--open')
        menu.style.left = "-24rem"
        isMenuOpen = false
    }
}
dropDown = ()=>{
    if(!isDropDownOpen){
        arrowIcon.classList.remove('fa-angle-down')
        arrowIcon.classList.add('fa-angle-up')
        dropDownMenu.style.display = "block"
        isDropDownOpen = true
    }else{
        arrowIcon.classList.remove('fa-angle-up')
        arrowIcon.classList.add('fa-angle-down')
        dropDownMenu.style.display = "none"
        isDropDownOpen = false
    }
}

navBtn.addEventListener("click",openNavBtn)
dropDownItem.addEventListener("click",dropDown)