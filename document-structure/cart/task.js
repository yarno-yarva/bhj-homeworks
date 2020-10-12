let minus = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
let plus = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
let add = Array.from(document.getElementsByClassName('product__add'));
let products = document.getElementsByClassName('cart__products')[0];

for (let i = 0; i < plus.length; i++) {
    plus[i].onclick = function(){
	    plus[i].previousElementSibling.textContent = Number(plus[i].previousElementSibling.textContent) + 1 
    }
}

for (let i = 0; i < minus.length; i++) {
    minus[i].onclick = function(){
	   if (Number(minus[i].nextElementSibling.textContent) > 1) {
	     minus[i].nextElementSibling.textContent = Number(minus[i].nextElementSibling.textContent) - 1 ;
        }
    }
}

for (let i = 0; i < add.length; i++) {
    add[i].onclick = function(){
    let x = add[i].closest('.product').dataset.id
	   console.log(add[i].closest('.product').dataset.id)
  // chart(i)
    if(products.getElementsByClassName('cart__product').length == 0) {
      	chart(i);
    } else if (products.getElementsByClassName(`cart__product_${add[i].closest('.product').dataset.id}`).lenght == 0) {
        chart(i);
    	//console.log(products.getElementsByClassName(`cart__product_${add[i].closest('.product').dataset.id}`).lenght)
        
   	} else {
   		
   		console.log(products.getElementsByClassName(`cart__product_${x}`).lenght)
   	}

    }
    	}

//let cartProducts = Array.from(products.getElementsByClassName('cart__product'));
function search(i){
	let cartProducts = Array.from(products.getElementsByClassName('cart__product'));
    	for (let j = 0; j < cartProducts.length; j++) {
    	let cartProducts = Array.from(products.getElementsByClassName('cart__product'));
    	console.log(cartProducts[j].dataset.id + ' это IF ' + add[i].closest('.product').dataset.id)
    	if (Number(cartProducts[j].dataset.id) === Number(add[i].closest('.product').dataset.id)) {
    		return true
    	} else {
    		return false
    	}
    	//console.log('цикл'+ cartProducts[j].dataset.id);
    	//return	console.log('цикл'+ cartProducts[j].dataset.id);
    	}
}

function chart(i){
//add- product-------------------------//
	   let div = document.createElement('div');
	   div.classList.add('cart__product');
	   div.classList.add(`cart__product_${add[i].closest('.product').dataset.id}`)
	   div.dataset.id = add[i].closest('.product').dataset.id;
	   let img = document.createElement('img');
	   let count = document.createElement('div');
	   count.classList.add('cart__product-count');
	   count.textContent = add[i].closest('.product').getElementsByClassName('product__quantity-value')[0].textContent;
	   img.classList.add('cart__product-image');
	   img.src = add[i].closest('.product').getElementsByClassName('product__image')[0].src
	   div.appendChild(img)
	   div.appendChild(count)
	   products.appendChild(div);
	   // end add product--------------------------//
	   }      
      
