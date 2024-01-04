//===================================Shop More==============================>>
const shopMore = document.querySelector('#shopmore-btn');
        shopMore.addEventListener('click',function(){
    window.location = 'index.html'
    localStorage.setItem('Cartitems',JSON.stringify(cartArray))

})
//==========================get items to localstorage=============================>>
let items =  localStorage.getItem('Cartitems');
let data = JSON.parse(items)
console.log(data);
//==========================End===========================>>
//===========================Getiing elements==========================>>
let div = document.querySelector('#check-div');
const total = document.querySelector('#total');

//=========================End========================>>


function renderItems(){
    div.innerHTML = ''
    let totalAmount = 0;
    if(data.length > 0){
        
data.map(function(items , index){
    totalAmount += items.price * items.quantity
    div.innerHTML += `
    <div class="card w-[400px] h-[650px] bg-white p-[5px]  shadow-xl">
            <figure><img class="h-[300px]" src="${items.image}"></figure>
            <div class="card-body">
              <h1 class="card-title text-[#588157] text-xl">Title : ${items.title} </h1>
              <h3 class="card-title text-black">Price : ${items.price}  </h3>
              <h3 class="card-title text-black">Rating : ${items.rating.rate} </h3>
              <h3 class="card-title text-black"> Category  : ${items.category}  </h3>
              <div>
              <button  onclick="decrease(${index})" class="btn">-</button>
              <span id="quantity" class="text-lg">${items.quantity}</span>
              <button onclick="increase(${index})" class="btn">+</button>
            </div>
             <div class="card-actions justify-end">
             <button onclick="deleted(${index})" class="btn btn-active w-[150px]">Delete</button>
              </div>
            </div>
            </div>
          </div>`
})
total.innerHTML = totalAmount
}else{
   let  totalAmount = 0
        total.innerHTML = totalAmount
        div.innerHTML = '<h1 class="text-xl font-bold">Items Not Found...</h1>'
}


}

renderItems() 


// =================================increase and dexreade Work=======================>>
let quantity = document.querySelector('#quantity');
function increase(index){
    console.log(index);
    data[index].quantity += 1
    localStorage.setItem('Cartitems',JSON.stringify(data))
    renderItems()
}
function decrease(index){
    if(data[index].quantity === 0){
        data.splice(index , 1)
    }else{
        data[index].quantity -= 1
    }
    localStorage.setItem('Cartitems',JSON.stringify(data))
    renderItems()
}
// ================================Delete Work======================>>

function deleted(index){
    data.splice(index , 1)
    renderItems()
}

// ===========================================End=============================>>
// ==================================Loding problem===================>>
window.onbeforeunload = function(){
    localStorage.setItem('Cartitems',JSON.stringify(data))
}





