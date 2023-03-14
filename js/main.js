let products = document.getElementById("products");
let search =document.getElementById("Search");
let btn =document.getElementById("btn");

let result=[]
async function getproducts(){
    let apiurlproducts = await fetch("https://dummyjson.com/products");
    let response = await apiurlproducts.json();
    result= response.products;
    // console.log(response);
    displayproducts()
    
}
function displayproducts(){
    let str=``;
    for(let i=0 ;  i<result.length ;i++){
        str +=
        `<div class="col-md-4">
         <div class="bg-info p-4 m-3">
            <h3>${result[i].category}</h3>
            <h5>${result[i].title}</h5>
            <h5>${result[i].price}</h5>
            <h3>${result[i].rating}</h3>

            <h6 class="text-danger">discountPercentage : ${result[i].discountPercentage}</h6>
            <div>
            <img src="${result[i].thumbnail?result[i].thumbnail:'image/images.png'}" class="w-100">
            </div>
         </div>
         </div>
`
}
products.innerHTML=str;
}
getproducts();


function searchfunction(){

    let searchword =``;
    for(let i=0 ;  i<result.length ;i++){
        if(result[i].title.toLowerCase().includes(search.value.toLowerCase())){
            searchword +=
            `<div class="col-md-4">
             <div class="bg-info p-4 m-3">
                <h3>${result[i].category}</h3>
                <h5>${result[i].title}</h5>
                <h5>${result[i].price}</h5>
                <h3>${result[i].rating}</h3>
                <h6 class="text-danger">discountPercentage : ${result[i].discountPercentage}</h6>
                <div>
                <img src="${result[i].thumbnail?result[i].thumbnail:'image/images.png'}" class="w-100">
                </div>
             </div>
             </div>
    `
        }
       
}
products.innerHTML=searchword;
}


search.addEventListener("keyup",function(){
    console.log(search.value)
        searchfunction()
    })

    
     function sortLowTohigh() {
      result.sort(function(a,b){
        return a.price - b.price;
      })

      displayproducts()
     }

     btn.addEventListener("click",function(){
        sortLowTohigh()
     })