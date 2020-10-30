import EngineApp from '../../Framework/engine.js'
import search from '../components/search.js'

function menu(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent('menu',menuRender())
    eng.componentsEngine.renderComponent('app','menu')
    AddListenersSearch()
}

function AddListenersSearch(){
  document.getElementById("searchbt").addEventListener("click",function(event){
    event.preventDefault()
    let elementSearch = document.getElementById("searchBox1")
    if(screen.width<=500){
      search()
      console.log("uai")
    }
    else{
    elementSearch.classList = "searchBox-Active"
    elementSearch.focus()
    elementSearch.style.width="100%"  
    document.getElementById("brandLogo").style.display ="none"
    document.getElementById("menu-list").style.display="none"
    }
   // elementSearch.classList+=" searchBox-Active"
})
  document.getElementById("searchBox1").addEventListener("focusout",function(event){
    let elementSearch = document.getElementById("searchBox1")
    elementSearch.classList = "form-control mr-sm-2 searchBox-disible"
    elementSearch.value =""
    elementSearch.style.width="20vh"
    document.getElementById("menu-list").style.display="flex"
    document.getElementById("brandLogo").style.display ="block"
  })
}

function menuRender(){
    return "<div class='grayNav item-fluid'><img id='brandLogo' src='sources/img/logo.png' height='40vh'></div>"+
      "<nav id='menu01' class='navbar navbar-expand-lg navbar-light bg-light  shadowBody'>"+
    "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>"+
      "<span class='navbar-toggler-icon'></span>"+
    "</button>"+
    "<div class='collapse navbar-collapse' id='navbarTogglerDemo01'>"+
      "<ul id='menu-list' class='navbar-nav mr-auto mt-2 mt-lg-0 padingNavItem'>"+
        "<li class='nav-item'>"+
         " <a class='nav-link' href='#'>Segurança</a>"+
        "</li>"+
        "</li>"+
        "<li class='nav-item'>"+
         " <a class='nav-link' href='#'>Meio Ambiente</a>"+
        "</li>"+
        "</li>"+
        "<li class='nav-item'>"+
         " <a class='nav-link' href='#'>Saude</a>"+
        "</li>"+
        "</li>"+
        "<li class='nav-item'>"+
         "<a class='nav-link' href='#'>Contato</a>"+
      "</ul>"+
    "</div>"+
    "<input id='searchBox1' class='form-control mr-sm-2 searchBox-disible' type='search' placeholder='Procure por algo...' aria-label='Search' style='zindex:99'>"+
      "<button id='searchbt' style='background-color:white;'><img src='sources/img/lupa.svg'></button>"+
  "</nav>"
}

export default menu