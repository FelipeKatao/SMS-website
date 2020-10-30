import EngineApp from '../../Framework/engine.js'

function seacrh(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent('Finder',seacrhRender())
    eng.componentsEngine.renderComponent('app','Finder')
    AddListenerToCloser()
}

function AddListenerToCloser(){
    document.getElementById("closeBtSearch").addEventListener("click",function(){
        let elem = document.getElementById("searchScreen")
        elem.remove()
       AddListenerBt()
     },false)
}

function AddListenerBt(){
    document.getElementById("searchbt").addEventListener("click",function(event){
        event.preventDefault()
        let elementSearch = document.getElementById("searchBox1")
        if(screen.width<=500){
          seacrh()
          console.log("uai")
        }
        else{
        elementSearch.classList = "searchBox-Active"
        elementSearch.focus()
        elementSearch.style.width="100%"  
        document.getElementById("brandLogo").style.display ="none"
        document.getElementById("menu-list").style.display="none"
        }
       // elementSearch.classList+=" searchBox-Active"
    })
}

function seacrhRender(){
    return "<div id='searchScreen'>"+
    "<div id='closeBtSearch'>X</div>"+
    "<div class='search-text'>Procure por algo</div>"+
    "<input class='form-control mr-sm-2 searchBox-Title' type='search'>"+
    "</div>"
}

export default seacrh