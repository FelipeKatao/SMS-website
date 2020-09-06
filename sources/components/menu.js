import EngineApp from '../../Framework/engine.js'

function menu(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent('menu',menuRender())
    eng.componentsEngine.renderComponent('menu','menu')
}

function menuRender(){
    return "<nav class='navbar navbar-expand-lg navbar-light bg-light shadowBody'>"+
    "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>"+
      "<span class='navbar-toggler-icon'></span>"+
    "</button>"+
    "<div class='collapse navbar-collapse' id='navbarTogglerDemo01'>"+
      "<a class='navbar-brand' href='#'>SMS Pratico</a>"+
      "<ul class='navbar-nav mr-auto mt-2 mt-lg-0'>"+
        "<li class='nav-item active'>"+
          "<a class='nav-link' href='#'>Quem Somos <span class='sr-only'>(current)</span></a>"+
        "</li>"+
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
        "<input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'>"+
        "<button class='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>"+
      "</form>"+
    "</div>"+
  "</nav>"
}

export default menu