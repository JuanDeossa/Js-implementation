let emailMenuLink = document.querySelector(".navbar-email");
let emailMenu = document.querySelector(".desktop-menu")
let bgrMenuLink = document.querySelector(".menu");
let bgrMenu = document.querySelector(".mobile-menu");
let shoppingCarMenuLink = document.querySelector(".navbar-shopping-cart");
let shoppingCarMenu = document.querySelector(".product-detail");
let cardsContanier = document.querySelector(".cards-container");
let ProductDetailCard = document.querySelector(".product-detail-card");
let ProductDetailCardImg = document.querySelector(".product-detail-card__img");
let ProductDetailCardName = document.querySelector(".product-detail-card__name");
let ProductDetailCardPrice = document.querySelector(".product-detail-card__price");
let ProductDetailCardDescription = document.querySelector(".product-detail-card__description");
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
function deployCard(Img,Pri,Nam,Des){
    shoppingCarMenu.classList.add("isHidden");
    emailMenu.classList.add("isHidden");
    bgrMenu.classList.add("isHidden");

    ProductDetailCardImg.setAttribute("src",Img);
    ProductDetailCardPrice.innerText=(Pri);
    ProductDetailCardName.innerText=(Nam);
    ProductDetailCardDescription.innerText=(Des.replace("item",Nam));
    console.log(Nam);
    
    ProductDetailCard.classList.remove("isHidden");
}
function closeCard() {
    ProductDetailCard.classList.add("isHidden");
}
//Products Database.
let Products = [
    {
    name: "Bike", 
    price: 100,
    image: "https://trek.scene7.com/is/image/TrekBicycleProducts/TK22_WEB_MTB_Buyers_Guide_4x3_Powerfly?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440&fit=fit,1",
    description: `This is a great item for you, what are you waiting for ?, buy Now!!!`
    },
    {
    name: "Monitor", 
    price: 180,
    image: "https://m.media-amazon.com/images/I/61570uw-zUL._AC_SL1405_.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },
    {
    name: "Smartphone", 
    price: 300,
    image: "https://m.media-amazon.com/images/I/61U6oC65TTL._AC_SL1500_.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },
    {
    name: "Laptod", 
    price: 360,
    image: "https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },
    {
    name: "Smartwatch", 
    price: 80,
    image: "https://d500.epimg.net/cincodias/imagenes/2022/07/07/gadgets/1657210189_913562_1657210288_noticia_normal.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },
    {
    name: "Gpu", 
    price: 420,
    image: "https://m.media-amazon.com/images/I/71fVA2pm7mL._AC_SL1500_.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },
    {
    name: "Motherboard", 
    price: 370,
    image: "https://m.media-amazon.com/images/I/81wbZCfYoML._AC_SL1500_.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },
    {
    name: "Cpu", 
    price: 250,
    image: "https://http2.mlstatic.com/D_NQ_NP_834662-CBT49727650422_042022-V.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    }, 
    {
    name: "Motorcycle1", 
    price: 20000,
    image: "https://cloud.leparking-moto.fr/2021/07/31/17/32/yamaha-mt-yamaha-mt09-2015-in-dundee-gumtree-violet_154981581.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },  
    {
    name: "Motorcycle2", 
    price: 30000,
    image: "https://rodaticarros.com.co/images/listings/2022-03/d815480c-1647424979-770.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },  
    {
    name: "Motorcycle3", 
    price: 22000,
    image: "https://img.clasf.co/2020/07/19/Yamaha-Xt-660-R-20200719233715.0764550015.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },  
    {
    name: "Motorcycle4", 
    price: 15000,
    image: "https://www.tmxnews.co.uk/wp-content/uploads/2018/02/20150921_083759-2080x1384.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },  
    {
    name: "Motorcycle5", 
    price: 13000,
    image: "http://moto.zombdrive.com/images/honda-xr650-3.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },  
    {
    name: "Motorcycle6", 
    price: 21000,
    image: "https://www.moto1pro.com/sites/default/files/fotosprincipales/01_yamaha2021.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },  
    {
    name: "Motorcycle7", 
    price: 17000,
    image: "https://rodatiautos.ar/images/listings/2022-04/b18734ee-1649071668-189.jpg",
    description: "This is a great item for you, what are you waiting for ?, buy Now!!!"
    },  
]
Products = Products.concat(Products);
//

function renderProductos(objArray) {
    for ( item of objArray) {
        // Markups creation.
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfo_Div = document.createElement("div");
        
        const productInfo_Fig = document.createElement("figure");
        
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText = "$"+item.price;
        
        const productInfoName = document.createElement("p");
        productInfoName.innerText = item.name;

        const productInfoDescription = document.createElement("p");
        productInfoDescription.innerText = item.description;
        
        const productcardIcon = document.createElement("img");
        productcardIcon.setAttribute("src","./icons/bt_add_to_cart.svg");    
        
        const productcardimg = document.createElement("img");
        productcardimg.setAttribute("src",item.image);

        productcardimg.addEventListener("click",
            ()=>{deployCard(productcardimg.getAttribute("src"),productInfoPrice.textContent,productInfoName.textContent,productInfoDescription.textContent)});
        
        //HTML tidy block creation.
        productInfo_Fig.append(productcardIcon);
        productInfo_Div.append(productInfoPrice,productInfoName);
        productInfo.append(productInfo_Div,productInfo_Fig);
        productCard.append(productcardimg,productInfo);
        cardsContanier.append(productCard);
    }
}


//Product grid render.
renderProductos(Products);
