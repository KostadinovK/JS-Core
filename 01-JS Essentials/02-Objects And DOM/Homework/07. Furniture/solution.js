function solve() {
  let generateBtn = document.getElementsByTagName('button')[0];

  generateBtn.addEventListener('click', generateFurniture);

  let checkbox = document.getElementsByTagName('input')[0];
  checkbox.disabled = false;
  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click', buyFurniture);

  function generateFurniture(){
    let generateTextArea = document.getElementsByTagName('textarea')[0];
    if(generateTextArea.value != ''){
      let furniture = JSON.parse(generateTextArea.value);
      let tableBody = document.getElementsByTagName('tbody')[0];

      for (let object of furniture) {
        object.price = Number(object.price);
        object.decFactor = Number(object.decFactor);

        let tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);

        tableRow.innerHTML = 
          `<td><img src=${object.img}></td>
          <td><p>${object.name}</p></td>
          <td><p>${object.price}</p></td>
          <td><p>${object.decFactor}</p></td>
          <td><input type="checkbox"></td>`;
       
      }
    }
  }

  function buyFurniture(){
    let cart = document.getElementsByTagName('textarea')[1];
    let boughtFurniture = [];
    let totalPrice = 0;
    let avrDecFactor = 0;

    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (let checkbox of checkboxes) {
      let itemRow = checkbox.parentElement.parentElement;
      let furnitureName = itemRow.querySelector('td p').innerHTML;
      let furniturePrice = Number(itemRow.querySelector('td:nth-child(3) p').innerHTML);
      let furnitureDecFactor = Number(itemRow.querySelector('td:nth-child(4) p').innerHTML);

      boughtFurniture.push(furnitureName);
      totalPrice += furniturePrice;
      avrDecFactor += furnitureDecFactor;
    }

      avrDecFactor /= checkboxes.length;

      cart.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
      cart.value += `Total price: ${totalPrice.toFixed(2)}\n`;
      cart.value += `Average decoration factor: ${avrDecFactor}`;
  }
}