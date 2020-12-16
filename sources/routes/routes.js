import EngineApp from "../../Framework/engine.js"
import mainPage from "../pages/mainPage.js"

let eng = new EngineApp()

function ManageRoutes(){
        eng.routesEngine.registerRoute("https://felipekatao.github.io/SMS-website/",mainPage)
        eng.routesEngine.registerRoute("https://felipekatao.github.io/SMS-website//#homePage",mainPage)
        eng.routesEngine.runRoute("https://felipekatao.github.io/SMS-website/","https://felipekatao.github.io/SMS-website/#homePage")
}


export default ManageRoutes

