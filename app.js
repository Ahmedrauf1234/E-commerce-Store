// =============================gertting elements=========================>>
const div = document.querySelector('#render-div');
let Api = axios('https://fakestoreapi.com/products')
const btn = document.querySelector('#Check-btn')
//==================================End============================>>
// ====================Calling Api and render items========================>>
 axios('https://fakestoreapi.com/products')
.then(function(res){
  // console.log(res.data);
    res.data.map(function(items , index ){
      div.innerHTML +=`<div id='categories' class="card w-[400px] h-[600px] bg-white p-[5px]  shadow-xl">
      <figure><img class="h-[300px]" src="${items.image}" alt="Shoes" /></figure>
      <div class="card-body">
        <h1 class="card-title text-[#588157] text-xl">Title : ${items.title} </h1>
        <h3 class="card-title text-black">Price : ${items.price} </h3>
        <h3 class="card-title text-black">Rating : ${items.rating.rate}</h3>
        <h3 class="card-title text-black"> Category  : ${items.category} </h3>
        <div class="card-actions justify-end">
          <button onclick="Addtocart(${index})" class="btn btn-active w-[150px]">Add to Cart</button>
        </div>
      </div>
    </div>`
    })

}).catch(function(err){
    console.log(err);
})
// ================================End====================================>>
// =================================data from local storage===============>>
let dataFromLocalStorage = JSON.parse(localStorage.getItem('Cartitems'));
let cartArray;
if(Array.isArray(dataFromLocalStorage)){
  cartArray = [...dataFromLocalStorage]
}else{
  cartArray = []
}

// =============================Add to Cart Work=====================================>>
function Addtocart(index){
  Api.then(function(res){
    if(cartArray.indexOf(res.data[index]) !== -1){
      let indexNumber = cartArray.indexOf(res.data[index])
      cartArray[indexNumber].quantity += 1;
      console.log(cartArray);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Quantity Increase",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      res.data[index].quantity = 1;
      cartArray.push(res.data[index])
      console.log(cartArray);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Item Has Been Added to the Cart",
        showConfirmButton: false,
        timer: 1500
      });
    }

  }).catch(function(err){
    console.log(err);
  })
}
// ===============================Checkout Work==================================>>
btn.addEventListener('click',function(){
  localStorage.setItem('Cartitems',JSON.stringify(cartArray))
  window.location = 'checkout.html'
})
// // ==================================Loding problem===================>>
// window.onbeforeunload = function(){
//   localStorage.setItem('Cartitems',JSON.stringify(cartArray))
// }


