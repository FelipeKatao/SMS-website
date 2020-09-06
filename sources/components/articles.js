import EngineApp from "../../Framework/engine.js"
let elements=[]
let eng= new EngineApp()

function article(){
    eng.componentsEngine.createComponent("article",articlerender())
    eng.componentsEngine.renderComponent("dynamic","article")
}

function articlerender(){
    return "<div id='article01' class='container'>Hello</div>"
}

export default article