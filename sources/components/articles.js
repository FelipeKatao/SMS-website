import EngineApp from "../../Framework/engine.js"
let elements=[]
let eng= new EngineApp()

function article(){
    eng.componentsEngine.createComponent("article",articlerender())
    eng.componentsEngine.renderComponent("dynamic","article")
}

function articlerender(){
    return "<br><div id='article01' class='row articlesMode'> </div>"
}

export default article