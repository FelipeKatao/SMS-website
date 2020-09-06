import carrousel from "../components/carrousel.js"
import article from "../components/articles.js"
import cards from "../components/cards.js"

function mainPage(){
    carrousel()
    article()
    cards("https://www.secfloripa.org.br/media/k2/items/cache/1379b5de7cb668c186ab48a9361eabd7_XL.jpg","Segurança no trabalho","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora odio earum illo iure debitis soluta iusto aperiam sunt pariatur perferendis, molestias quasi ad voluptatem similique non voluptate. Delectus, libero. Ducimus.","bt1","Acesse mais sobre")
    cards("https://www.secfloripa.org.br/media/k2/items/cache/1379b5de7cb668c186ab48a9361eabd7_XL.jpg","Segurança no trabalho","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora odio earum illo iure debitis soluta iusto aperiam sunt pariatur perferendis, molestias quasi ad voluptatem similique non voluptate. Delectus, libero. Ducimus.","bt2","Acesse mais sobre")
    cards("https://www.secfloripa.org.br/media/k2/items/cache/1379b5de7cb668c186ab48a9361eabd7_XL.jpg","Segurança no trabalho","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora odio earum illo iure debitis soluta iusto aperiam sunt pariatur perferendis, molestias quasi ad voluptatem similique non voluptate. Delectus, libero. Ducimus.","bt3","Acesse mais sobre")
}

export default mainPage