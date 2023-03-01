/*===========toggler switch==========*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click" , ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})


/*==================== hide switcher on scroll ====================*/
window.addEventListener("scroll" , () => {
    if( document.querySelector(".style-switcher").classList.contains("open")
    ){
        document.querySelector(".style-switcher").classList.remove("open");

    }
})


/*==================== theme color  ====================*/

const alternateStyles= document.querySelectorAll(".alternative-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true");
        }
    })
}


/*==================== light and dark mode ====================*/

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click" , ()=> {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" , () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})


/*==================== Active link =============================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


