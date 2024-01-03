// =============================gertting elements by document=========================>>
const div = document.querySelector('#render-div');
//==================================End============================>>
// ====================Calling Api and render items========================>>
axios('https://fakestoreapi.com/products')
.then(function(res){
  console.log(res.data);
    res.data.map(function(items){
      div.innerHTML +=`<div class="card w-[400px] h-[600px] p-[5px]  bg-base-100 shadow-xl">
      <figure><img class="h-[300px]" src="${items.image}" alt="Shoes" /></figure>
      <div class="card-body">
        <h1 class="card-title text-[#588157] text-xl">Title : ${items.title} </h1>
        <h3 class="card-title">Price : ${items.price} </h3>
        <h3 class="card-title">Rating : ${items.rating.rate}</h3>
        <h3 class="card-title"> Category  : ${items.category} </h3>
        <div class="card-actions justify-end">
          <button class="btn btn-active">Add to Cart</button>
        </div>
      </div>
    </div>`
    })

}).catch(function(err){
    console.log(err);
})
