function solve() {
   
   let addBtns = document.getElementsByClassName('add-product');
   let checkoutBtn = document.getElementsByClassName('checkout')[0];
   let cart = document.getElementsByTagName('textarea')[0];
   let uniqueProducts = [];
   let totalPrice = 0;

   for(let i = 0; i < addBtns.length; i++){
      addBtns[i].addEventListener('click', addProduct);
   }

   checkoutBtn.addEventListener('click', checkout);

   function addProduct(event){

      let productDiv = event.target.parentElement.parentElement;
      let name = productDiv.querySelector('div.product-details div.product-title').innerHTML;
      let price = Number(productDiv.querySelector('div.product-line-price').innerHTML);
      cart.innerHTML += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      if(!uniqueProducts.includes(name)){
         uniqueProducts.push(name);
      }
      totalPrice += price;
   }

   function checkout(event){
      cart.innerHTML += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
      event.target.disabled = true;
      for(let i = 0; i < addBtns.length; i++){
         addBtns[i].disabled = true;
      }
   }
}