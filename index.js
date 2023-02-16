let serial = 0;
function getValueAllById(id1,id2,id3){
  if(id1.includes('input')){
    const pName = document.getElementById(id1).value;

  }else{
    const pName = document.getElementById(id1).innerText;

  };
  if(id2.includes('input')){
    const pPrice = document.getElementById(id2).value;

  }else{
    const pPrice = document.getElementById(id2).innerText;

  };
  if(id3.includes('input')){
    const pQty = document.getElementById(id3).value;

  }else{
    const pQty = document.getElementById(id3).innerText;

  };
  // if(isInputField){
  //   return
  //   const productName = document.getElementById(id1).value;
  //   const productPrice = document.getElementById(id2).value;
  //   const productQty = document.getElementById(id3).value;
  // }else{
 
  const data ={
    productName : pName,
    productPrice : pPrice,
    productQty : pQty,
};
  return data;
};

 document.getElementById('first-card').addEventListener('click',function(){
      let seria = serial++;
      const getData = getValueAllById('first-name','first-price','first-quantity');
      const total = parseInt(getData.productPrice)* parseInt(getData.productQty);
      console.log(total);
      console.log(getData.productName);
      console.log(total);
      console.log(total);

      displayData(getData.productName, getData.productPrice, getData.productQty, total);
 });
 document.getElementById('second-card').addEventListener('click',function(){
      let seria = serial++;
      const getData = getValueAllById('name2','price2','qty2');
      const total = parseInt(getData.productPrice)* parseInt(getData.productQty);
      console.log(total);
      console.log(getData.productName);
      console.log(total);
      console.log(total);

      displayData(getData.productName, getData.productPrice, getData.productQty, total);
 });
 document.getElementById('third-card').addEventListener('click',function(){
      let seria = serial++;
      const getData = getValueAllById('first-name','first-price','first-quantity');
      const total = parseInt(getData.productPrice)* parseInt(getData.productQty);
      console.log(total);
      console.log(getData.productName);
      console.log(total);
      console.log(total);

      displayData(getData.productName, getData.productPrice, getData.productQty, total);
 });
 document.getElementById('second-last').addEventListener('click',function(){
      let seria = serial++;
      const getData = getValueAllById('first-name','first-price','first-quantity');
      const total = parseInt(getData.productPrice)* parseInt(getData.productQty);
      console.log(total);
      console.log(getData.productName);
      console.log(total);
      console.log(total);

      displayData(getData.productName, getData.productPrice, getData.productQty, total);
 });




// common function to display data
function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>
    <td>
    <button class="btn btn-sm btn-red-500">Square</button>
    </td>
    
  `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

// common function to disable button
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}