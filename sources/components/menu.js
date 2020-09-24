import EngineApp from '../../Framework/engine.js'

function menu(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent('menu',menuRender())
    eng.componentsEngine.renderComponent('menu','menu')
    AddListenersSearch()
}

function AddListenersSearch(){
  document.getElementById("searchbt").addEventListener("click",function(event){
    event.preventDefault()
    let elementSearch = document.getElementById("searchBox1")
    elementSearch.classList = "searchBox-Active"
    elementSearch.focus()
   // elementSearch.classList+=" searchBox-Active"
})
  document.getElementById("searchBox1").addEventListener("focusout",function(event){
    let elementSearch = document.getElementById("searchBox1")
    elementSearch.classList = "form-control mr-sm-2 searchBox-disible"
    elementSearch.value =""
  })
}

function menuRender(){
    return "<nav id='menu01' class='navbar navbar-expand-lg  shadowBody'>"+
    "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>"+
      "<span><img class='logo-shadow' src='sources/img/logo.png' height='40vh'></span>"+
    "</button>"+
    "<div class='collapse navbar-collapse' id='navbarTogglerDemo01'>"+
      "<a class='navbar-brand' href='#'><img id='logoMain' src='sources/img/logo.png' height='40vh'></a>"+
      "<ul class='navbar-nav mr-auto mt-2 mt-lg-0 padingNavItem'>"+
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
        "<input id='searchBox1' class='form-control mr-sm-2 searchBox-disible' type='search' placeholder='Procure por algo...' aria-label='Search'>"+
        "<button id='searchbt' class='btn my-2 my-sm-0' style='background-color:white;'><img src='sources/img/lupa.svg'></button>"+
    "</div>"+
  "</nav>"
}

export default menu