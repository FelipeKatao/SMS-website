import EngineApp from "../../Framework/engine.js"
import mainPage from "../components/carrousel.js"

let eng = new EngineApp()

function ManageRoutes(){
    eng.routesEngine.registerRoute("felipekatao.github.io/SMS-website/",mainPage)
    eng.routesEngine.registerRoute("felipekatao.github.io/SMS-website/index.html#home",mainPage)
    eng.routesEngine.runRoute("felipekatao.github.io/SMS-website/","felipekatao.github.io/SMS-website/index.html#home")
}


export default ManageRoutes