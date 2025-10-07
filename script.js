const products=[
 {id:1,name:"Classic T-Shirt",price:20,img:"Img/p1.jpg",cat:"tshirt"},
 {id:2,name:"Casual T-Shirt",price:25,img:"Img/p2.jpg",cat:"tshirt"},
 {id:3,name:"Slim Trouser",price:30,img:"Img/p3.jpg",cat:"trouser"},
 {id:4,name:"Formal Trouser",price:40,img:"Img/p4.jpg",cat:"trouser"},
 {id:5,name:"Classic T-Shirt",price:20,img:"Img/p1.jpg",cat:"tshirt"},
 {id:6,name:"Casual T-Shirt",price:25,img:"Img/p2.jpg",cat:"tshirt"},
 {id:7,name:"Slim Trouser",price:30,img:"Img/p3.jpg",cat:"trouser"},
 {id:8,name:"Formal Trouser",price:40,img:"Img/p4.jpg",cat:"trouser"}
 
];
let cart=JSON.parse(localStorage.getItem("cart"))||[],
    wish=JSON.parse(localStorage.getItem("wish"))||[];

const shop=document.getElementById("shop");
function render(list){shop.innerHTML=list.map(p=>
 `<div class="card">
   <button class="wish" onclick="toggleWish(${p.id})">${wish.some(w=>w.id===p.id)?"❤️":"🤍"}</button>
   <img src="${p.img}" alt="${p.name}">
   <h3>${p.name}</h3><p>$${p.price}</p>
   <button onclick="addToCart(${p.id})">Add to Cart</button>
 </div>`).join('')}
render(products);

function addToCart(id){
 cart.push(products.find(p=>p.id===id));
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCounts();
}
function toggleWish(id){
 const item=products.find(p=>p.id===id);
 wish.some(w=>w.id===id)?wish=wish.filter(w=>w.id!==id):wish.push(item);
 localStorage.setItem("wish",JSON.stringify(wish));
 render(products);updateCounts();
}
function filterProducts(cat){render(cat==="all"?products:products.filter(p=>p.cat===cat))}
function updateCounts(){
 document.getElementById("cart-count").innerText=cart.length;
 document.getElementById("wish-count").innerText=wish.length;
}
updateCounts();
function scrollToShop(){document.getElementById("shop").scrollIntoView({behavior:"smooth"})}




const slides=document.querySelectorAll(".slide");
let current=0;
function showSlide(index){
  slides.forEach(slide=>slide.classList.remove("active"));
  slides[index].classList.add("active");
}
function nextSlide(){
  current=(current+1)%slides.length;
  showSlide(current);
}
setInterval(nextSlide,4000); // changes every 4 seconds



Filter --

const checkboxes=document.querySelectorAll(".size-filter");
const product=document.querySelectorAll(".product");

checkboxes.forEach(cb=>{
  cb.addEventListener("change",()=>{
    let selectedSizes=[...checkboxes]
      .filter(c=>c.checked)
      .map(c=>c.value);

    products.forEach(p=>{
      let size=p.getAttribute("data-size");
      if(selectedSizes.length===0 || selectedSizes.includes(size)){
        p.style.display="block";
      }else{
        p.style.display="none";
      }
    });
  });
});
