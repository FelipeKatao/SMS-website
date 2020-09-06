import EngineApp from "../../Framework/engine.js"
import mainPage from "../pages/mainPage.js"

let eng = new EngineApp()

function ManageRoutes(){
    eng.routesEngine.registerRoute("http://127.0.0.1:5500/index.html#Page",mainPage)
    eng.routesEngine.runRoute("http://127.0.0.1:5500/","http://127.0.0.1:5500/index.html#Page")
}


export default ManageRoutes