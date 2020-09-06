import EngineApp from "../../Framework/engine.js"
import mainPage from "../components/carrousel.js"

let eng = new EngineApp()

function ManageRoutes(){
    eng.routesEngine.registerRoute("http://127.0.0.1:5500/",mainPage)
    eng.routesEngine.registerRoute("https://felipekatao.github.io/SMS-website/index.htmlo#home",mainPage)
    eng.routesEngine.runRoute("https://felipekatao.github.io/SMS-website/","https://felipekatao.github.io/SMS-website/index.htmlo#home")
}


export default ManageRoutes