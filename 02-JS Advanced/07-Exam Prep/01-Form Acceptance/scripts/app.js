function acceptance() {
	let btn = document.getElementById('acceptance');
	let company = document.querySelector("input[name='shippingCompany']");
	let product = document.querySelector("input[name='productName']");
	let quantity = document.querySelector("input[name='productQuantity']");
	let scrape =  document.querySelector("input[name='productScrape']");

	let warehouse = document.getElementById('warehouse');

	btn.addEventListener('click', () => {
		if(company.value === '' || product.value === '' || quantity.value === '' || scrape.value === ''){
			company.value = '';
			product.value = '';
			quantity.value = '';
			scrape.value = '';
			return;
		}

		if(Number(quantity.value) != quantity.value || Number(scrape.value) != scrape.value){
			company.value = '';
			product.value = '';
			quantity.value = '';
			scrape.value = '';
			return;
		}

		if(Number(quantity.value) - Number(scrape.value) > 0){
			let element = document.createElement('div');
			warehouse.appendChild(element);
			element.innerHTML = `<p>[${company.value}] ${product.value} - ${Number(quantity.value) - Number(scrape.value)} pieces</p>`;
			let removeBtn = document.createElement('button');
			removeBtn.textContent = 'Out of stock';
			element.appendChild(removeBtn);
			removeBtn.addEventListener('click', () => warehouse.removeChild(element));
		}

		company.value = '';
		product.value = '';
		quantity.value = '';
		scrape.value = '';
		
	});
}