import EngineApp from '../../Framework/engine.js'

function menu(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent('menu',menuRender())
    eng.componentsEngine.renderComponent('menu','menu')
}

function menuRender(){
    return "<nav id='menu01' class='navbar navbar-expand-lg  shadowBody' style='background-color: #0B3C5D';color:white>"+
    "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>"+
      "<span><img class='logo-shadow' src='sources/img/logo.png' height='40vh'></span>"+
    "</button>"+
    "<div class='collapse navbar-collapse' id='navbarTogglerDemo01'>"+
      "<a class='navbar-brand' href='#'><img id='logoMain' class='logo-shadow' src='sources/img/logo.png' height='40vh'></a>"+
      "<ul class='navbar-nav mr-auto mt-2 mt-lg-0'>"+
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
      "<form class='form-inline my-2 my-lg-0'>"+
        "<input class='form-control mr-sm-2' type='search' placeholder='Procure por algo...' aria-label='Search'>"+
        "<button class='btn btn-outline-success my-2 my-sm-0' type='submit' style='background-color:white;'><img src='sources/img/lupa.svg'></button>"+
      "</form>"+
    "</div>"+
  "</nav>"
}

export default menu