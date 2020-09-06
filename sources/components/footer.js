import EngineApp from "../../Framework/engine.js"

function footer(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent("footer",footerRender())
    eng.componentsEngine.renderComponent("footerDiv","footer")
}

function footerRender(){
    return "<br><footer>"+
        "<div class='row'>"+
          "<div class='col-md-6 mt-md-0 mt-3'>"+
            "<h5 class='text-uppercase'>Sms pratico</h5>"+
            "<p>Plataforma educacional sobre segurança do trabalho e meio ambiente.</p>"+
          "</div>"+
          "<hr class='clearfix w-100 d-md-none pb-3'>"+
          "<div class='col-md-3 mb-md-0 mb-3'>"+
            "<h5 class='text-uppercase'>Links</h5>"+
            "<ul class='list-unstyled'>"+
              "<li>"+
                "<a href='#!'>Link 1</a>"+
              "</li>"+
              "<li>"+
                "<a href='#!'>Link 2</a>"+
              "</li>"+
              "<li>"+
                "<a href='#!'>Link 3</a>"+
              "</li>"+
              "<li>"+
                "<a href='#!'>Link 4</a>"+
              "</li>"+
            "</ul>"+
          "</div>"+
          "<div class='col-md-3 mb-md-0 mb-3'>"+
            "<h5 class='text-uppercase'>Links</h5>"+
            "<ul class='list-unstyled'>"+
              "<li>"+
                "<a href='#!'>Link 1</a>"+
              "</li>"+
              "<li>"+
                "<a href='#!'>Link 2</a>"+
              "</li>"+
              "<li>"+
                "<a href='#!'>Link 3</a>"+
              "</li>"+
              "<li>"+
                "<a href='#!'>Link 4</a>"+
              "</li>"+
            "</ul>"+
          "</div>"+
        "</div>"+
      "</div>"+
      "<div class='footer-copyright text-center py-3'>© 2020 Copyright:"+
        "<a href='https://github.com/FelipeKatao'> Felipe Katao </a>"+
      "</div>"+
    "</footer>"
}

export default footer