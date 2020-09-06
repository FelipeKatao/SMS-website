import EngineApp from "../../Framework/engine.js"
let eng = new EngineApp()

function cards(img,CardTitle,body,id,Bt){
    eng.componentsEngine.createComponent("card"+id,cardsRender(img,CardTitle,body,Bt))
    eng.componentsEngine.renderComponent("article01","card"+id)
}

function cardsRender(img,CardTitle,body,bt){
    return "<div class='card' style='width: 18rem;margin-left:4vh;margin-top:2vh'>"+
    "<img src='"+img+"' class='card-img-top' alt='...'>"+
    "<div class='card-body'>"+
      "<h5 class='card-title'>"+CardTitle+"</h5>"+
      "<p class='card-text'>"+body+"</p>"+
      "<a href='#' class='btn btn-primary'>"+bt+"</a>"+
    "</div>"+
  "</div>"
}

export default cards