import EngineApp from '../../Framework/engine.js'

function carrousel(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent('carrousel',carrouselRender())
    eng.componentsEngine.renderComponent('dynamic','carrousel')
    
}

function carrouselRender(){
    return "<div id='carousel' class='carousel slide carousel-fade' data-ride='carousel' data-interval='6000'>"+
    "<ol class='carousel-indicators'>"+
        "<li data-target='#carousel' data-slide-to='0' class='active'></li>"+
        "<li data-target='#carousel' data-slide-to='1'></li>"+
        "<li data-target='#carousel' data-slide-to='2'></li>"+
    "</ol>"+
    "<div class='carousel-inner' role='listbox'>"+
        "<div class='carousel-item active'>"+
            "<a href='#'>"+
                 "<picture>"+
                  "<img srcset='sources/img/Gestao-Ambiental-em-Postos-de-Combustivel-1200x675.jpg' alt='responsive image' class='d-block img-fluid' style='width:100%'>"+
                "</picture>"+
                "<div class='carousel-caption backImages'>"+
                    "<div>"+
                        "<h2>Gestão ambiental</h2>"+
                        "<p>Aprenda tudo que a gestão ambietal pode fazer na sua empresa</p>"+
                        "<span class='btn btn-sm btn-outline-secondary'>Leia mais</span>"+
                    "</div>"+
                "</div>"+
            "</a>"+
        "</div>"+
        "<div class='carousel-item'>"+
            "<a href='#'>"+
            "<picture>"+
            "<img srcset='sources/img/sadeesegurananotrabalho.jpg' alt='responsive image' class='d-block img-fluid' style='width:100%'>"+
          "</picture>"+

                "<div class='carousel-caption justify-content-center align-items-center backImages'>"+
                    "<div>"+
                        "<h2>Saude no trabalho</h2>"+
                        "<p>Saiba como implementar o setor de saude na empresa, saiba mais!</p>"+
                        "<span class='btn btn-sm btn-outline-secondary'>Nossos cursos</span>"+
                    "</div>"+
                "</div>"+
            "</a>"+
        "</div>"+

        "<div class='carousel-item'>"+
            "<a href='#'>"+
                 "<picture>"+
                  "<img srcset='sources/img/tecnico-seguranca-trabalho_widelg.jpg' alt='responsive image' class='d-block img-fluid' style='width:100%'>"+
                "</picture>"+

                "<div class='carousel-caption justify-content-center align-items-center backImages'>"+
                    "<div>"+
                        "<h2>Segurança no trabalho</h2>"+
                        "<p>Entenda como deixar o ambiente de trabalho mais seguro</p>"+
                        "<span class='btn btn-sm btn-secondary'>Aprenda como</span>"+
                    "</div>"+
                "</div>"+
            "</a>"+
        "</div>"+
    "</div>"+
    "<a class='carousel-control-prev' href='#carousel' role='button' data-slide='prev'>"+
        "<img src='sources/img/arrow1.svg'>"+
        "<span class='sr-only'>Previous</span>"+
    "</a>"+
    "<a class='carousel-control-next' href='#carousel' role='button' data-slide='next'>"+
        "<img src='sources/img/arrow2.svg'>"+
        "<span class='sr-only'>Next</span>"+
    "</a>"+
"</div>"
}

export default carrousel