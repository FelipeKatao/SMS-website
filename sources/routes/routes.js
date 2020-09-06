import EngineApp from "../../Framework/engine.js"
import mainPage from "../components/carrousel.js"

let eng = new EngineApp()

function ManageRoutes(){
    eng.routesEngine.registerRoute("https://felipekatao.github.io/SMS-website/",mainPage)
    eng.routesEngine.registerRoute("https://felipekatao.github.io/SMS-website/index.htmlo#home",mainPage)
    eng.routesEngine.runRoute("https://felipekatao.github.io/SMS-website/","https://felipekatao.github.io/SMS-website/index.html#home")
}


export default ManageRoutes