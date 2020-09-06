import EngineApp from "../../Framework/engine.js"
import mainPage from "../components/carrousel.js"

let eng = new EngineApp()

function ManageRoutes(){
    eng.routesEngine.registerRoute("https://smsambiental.netlify.app/",mainPage)
    eng.routesEngine.registerRoute("https://smsambiental.netlify.app/#homePage",mainPage)
    eng.routesEngine.runRoute("https://smsambiental.netlify.app/","https://smsambiental.netlify.app/#homePage")
}


export default ManageRoutes