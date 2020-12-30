const hamburguer = document.getElementById("icon-menu");
const accordion = document.getElementById("accordion");
const contenedorNav = document.getElementById("contenedor-nav");



hamburguer.addEventListener("click", () => {
    const contNav = document.querySelector(".contenedor-nav");
    const logo = document.getElementById("logo");
    
    contNav.classList.toggle("active");
    hamburguer.classList.toggle("activeh");
    
    if (contNav.classList.contains("active")) {
        hamburguer.style.color = "#fff";
        logo.src = "./assets/images/logo-bookmarkw.svg";
        hamburguer.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
        hamburguer.style.color = "#000";
        logo.src = "./assets/images/logo-bookmark.svg";
        hamburguer.innerHTML = ` <i class="fas fa-bars"></i>`;
    }
});


contenedorNav.addEventListener('click', (e)=>{
    const logo = document.getElementById("logo");
    const hamburguer = document.getElementById("icon-menu");
    if(e.target.classList.contains("main-menu__item") || e.target.classList.contains("link-menu")){
        contenedorNav.classList.remove('active')
        hamburguer.classList.remove('activeh')
        hamburguer.style.color = "#000";
        logo.src = "./assets/images/logo-bookmark.svg";
        hamburguer.innerHTML = ` <i class="fas fa-bars"></i>`;
    }
     
})


const accordItem = document.querySelectorAll(".accordion-item");
accordItem.forEach((accord) => {
  accord.addEventListener("click", (e) => {
    const divText = accord.lastChild;
    accord.classList.toggle("deploy");
    if (accord.classList.contains("deploy")) {
      divText.style.maxHeight = divText.scrollHeight + "px";
    } else {
      divText.style.maxHeight = 0;
    }
  });
});



const tabs = document.getElementById('tabs')

tabs.addEventListener('click', (e)=>{
    const tabsI = Array.prototype.slice.apply(document.querySelectorAll('.tabs-item'))
    const tabsContent = Array.prototype.slice.apply(document.querySelectorAll('.tabs-content'))
    const tabIndex = tabsI.indexOf(e.target)
if(e.target.classList.contains('tabs-item')){
    tabsI.forEach(tab => tab.classList.remove('active'))
    tabsI[tabIndex].classList.toggle('active')
    tabsContent.forEach(tabC => tabC.classList.remove('active'))
    tabsContent[tabIndex].classList.toggle('active')
}
})
