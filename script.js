let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');


document.querySelector('#search-btn').onclick=()=>{
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
  
}

// let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>{
  // console.log('Cart button clicked');
  
  searchForm.classList.remove('active');
  shoppingCart.classList.toggle('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
 
}
// let loginForm=document.querySelector('.login-form');
document.querySelector('#user-btn').onclick=()=>{
  
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
 
}

// let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
 
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
   navbar.classList.toggle('active');
  
  
}

window.onscroll=()=>{
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}


// var swiper = new Swiper(".product-slider", {
//   loop:true,
//   spaceBetween: 20,
//   autoplay:{
//     delay:7500,
//     disableOnInteraction:false,
//   },
//   centeredSlides:true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
     
//     },
//     768: {
//       slidesPerView: 2,
   
//     },
//     1020: {
//       slidesPerView: 3,
     
//     },
//   },
// });
// var swiper = new Swiper(".review-slider", {
//   loop:true,
//   spaceBetween: 20,
//   autoplay:{
//     delay:7500,
//     disableOnInteraction:false,
//   },
//   centeredSlides:true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
     
//     },
//     768: {
//       slidesPerView: 2,
   
//     },
//     1020: {
//       slidesPerView: 3,
     
//     },
//   },
// });
// const iconShoppingP = document.querySelector('.women');
// iconShoppingP.textContent = no; // Set the content

// adding data to local storage
// const attToCartBtn = document.getElementsByClassName('attToCart');
// 	let items = [];
// 	for(let i=0; i<attToCartBtn.length; i++){

// 		attToCartBtn[i].addEventListener("click",function(e){
//       console.log(e.target.parentElement.children[1])
// 			if(typeof(Storage) !== 'undefined'){
// 				let item = { 
// 						id:i+1,
// 						name:e.target.parentElement.children[1].textContent,
// 						price:e.target.parentElement.children[2],
// 						no:1
// 					};

// 				// if(JSON.parse(localStorage.getItem('items')) === null){
// 				// 	items.push(item);
// 					localStorage.setItem("items",JSON.stringify(items));
// 				// 	window.location.reload();
// 				}
//         // else{
// 				// 	const localItems = JSON.parse(localStorage.getItem("items"));
// 				// 	localItems.map(data=>{
// 				// 		if(item.id == data.id){
// 				// 			item.no = data.no + 1;
// 				// 		}else{
// 				// 			items.push(data);
// 				// 		}
// 				// 	});
// 				// 	items.push(item);
// 				// 	localStorage.setItem('items',JSON.stringify(items));
// 				// 	window.location.reload();
// 				// }
// 			// }
//       else{
// 				alert('local storage is not working on your browser');
// 			}
// 		});
// 	}
// //   const element = document.querySelector('#myElement'); // Replace with your actual element selector

// // if (element) {
// //   const textContent = element.textContent; // Access textContent only if the element exists
// //   // Rest of your code that uses textContent
// // } else {
// //   console.log('Element not found');
// // }


 



