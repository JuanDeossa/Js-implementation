let emailMenuLink = document.querySelector(".navbar-email");
let emailMenu = document.querySelector(".desktop-menu")
let bgrMenuLink = document.querySelector(".menu");
let bgrMenu = document.querySelector(".mobile-menu");
let shoppingCarMenuLink = document.querySelector(".navbar-shopping-cart");
let shoppingCarMenu = document.querySelector(".product-detail");
let cardsContanier = document.querySelector(".cards-container");
let ProductDetailCard = document.querySelector(".product-detail-card");
let ProductDetailCardClose = document.querySelector(".product-detail-card-close");

emailMenuLink.addEventListener("click",emailFunction)
bgrMenuLink.addEventListener("click",bgrFunction)
shoppingCarMenuLink.addEventListener("click",cartFunction)
ProductDetailCardClose.addEventListener("click",closeCard)

function emailFunction() {
    ProductDetailCard.classList.add("isHidden");
    shoppingCarMenu.classList.add("isHidden");
    emailMenu.classList.toggle("isHidden");
}
function bgrFunction() {
    ProductDetailCard.classList.add("isHidden");
    shoppingCarMenu.classList.add("isHidden");
    bgrMenu.classList.toggle("isHidden");
}
function cartFunction() {
    ProductDetailCard.classList.add("isHidden");
    emailMenu.classList.add("isHidden");
    bgrMenu.classList.add("isHidden");
    shoppingCarMenu.classList.toggle("isHidden");
}
function openProductDetailCard(){
    shoppingCarMenu.classList.add("isHidden");
    emailMenu.classList.add("isHidden");
    bgrMenu.classList.add("isHidden");
    ProductDetailCard.classList.remove("isHidden");
}
function closeCard() {
    ProductDetailCard.classList.add("isHidden");
}

let Products = [
    {
    name: "Bike", 
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
    name: "Monitor", 
    price: 180,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlf2fhwrO-5k-D-SaflADaK_7Wbz_c8O31GA&usqp=CAU"
    },
    {
    name: "Smartphone", 
    price: 300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WIAZMrEFJaL40buIrofPRiLqs19__IU0VA&usqp=CAU"
    },
    {
    name: "Laptod", 
    price: 360,
    image: "https://http2.mlstatic.com/D_NQ_NP_739501-MLA48625650355_122021-O.jpg"
    },
    {
    name: "Smartwatch", 
    price: 80,
    image: "https://d500.epimg.net/cincodias/imagenes/2022/07/07/gadgets/1657210189_913562_1657210288_noticia_normal.jpg"
    },
    {
    name: "Gpu", 
    price: 420,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1RMlEwrrL1yZCnRaynZSFeUHKSshunlEloyjxjhn2Y2vntpDSACaFrCle96aoL6pSj4&usqp=CAU"
    },
    {
    name: "Cpu", 
    price: 250,
    image: "https://http2.mlstatic.com/D_NQ_NP_834662-CBT49727650422_042022-V.jpg"
    }, 
    {
    name: "Motorcycle", 
    price: 20000,
    image: "https://cloud.leparking-moto.fr/2021/07/31/17/32/yamaha-mt-yamaha-mt09-2015-in-dundee-gumtree-violet_154981581.jpg"
    },  
]

function renderProductos(objArray) {
    for ( item of objArray) {
        //Declaracion de etiquetas y clases.
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productcardimg = document.createElement("img");
        productcardimg.setAttribute("src",item.image);
        productcardimg.addEventListener("click",openProductDetailCard);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfo_Div = document.createElement("div");

        const productInfo_Fig = document.createElement("figure");
        
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText = "$"+item.price;

        const productInfoName = document.createElement("p");
        productInfoName.innerText = item.name;

        const productcardIcon = document.createElement("img");
        productcardIcon.setAttribute("src","./icons/bt_add_to_cart.svg");    
        
        //Ordenamiento de etiquetas y clases.
        productInfo_Fig.append(productcardIcon);
        productInfo_Div.append(productInfoPrice,productInfoName);
        productInfo.append(productInfo_Div,productInfo_Fig);
        productCard.append(productcardimg,productInfo);
        cardsContanier.append(productCard);
    }
}

renderProductos(Products);

