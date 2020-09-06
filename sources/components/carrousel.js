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
                        "<h2>Digital Craftsmanship</h2>"+
                        "<p>We meticously build each site to get results</p>"+
                        "<span class='btn btn-sm btn-outline-secondary'>Learn More</span>"+
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
                        "<h2>Every project begins with a sketch</h2>"+
                        "<p>We work as an extension of your business to explore solutions</p>"+
                        "<span class='btn btn-sm btn-outline-secondary'>Our Process</span>"+
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
                        "<h2>Performance Optimization</h2>"+
                        "<p>We monitor and optimize your site's long-term performance</p>"+
                        "<span class='btn btn-sm btn-secondary'>Learn How</span>"+
                    "</div>"+
                "</div>"+
            "</a>"+
        "</div>"+
    "</div>"+
    "<a class='carousel-control-prev' href='#carousel' role='button' data-slide='prev'>"+
        "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"+
        "<span class='sr-only'>Previous</span>"+
    "</a>"+
    "<a class='carousel-control-next' href='#carousel' role='button' data-slide='next'>"+
        "<span class='carousel-control-next-icon' aria-hidden='true'></span>"+
        "<span class='sr-only'>Next</span>"+
    "</a>"+
"</div>"
}

export default carrousel