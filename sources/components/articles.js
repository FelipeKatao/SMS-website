import EngineApp from "../../Framework/engine.js"
let elements=[]
let eng= new EngineApp()

function article(){
    eng.componentsEngine.createComponent("article",articlerender())
    eng.componentsEngine.renderComponent("dynamic","article")
}

function articlerender(){
    return "<br><div id='article01' class='row articleContainer'> <div class='row' id='baseArticle1'></div </div>"
}

export default article