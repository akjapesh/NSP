let foodItems=[{name:"five-js",rating:"3"},{name:"six-js",rating:"3"},{name:"seven-js",rating:"5"},{name:"eight-js",rating:"4"},{name:"nine-js",rating:"2"}];
function createItem(food){
    let htmlContent=`<div class="dish-card">
    <div class="image-pos"></div>
    <div class="constent-pos">
        <div class="food-name">${food.name}</div>
        <div class="food-category"></div>
        <div class="food-rating">
            <div class="food-rating-container">
                <i class="material-icons">star</i>
                ${food.rating}
            </div>
        </div>
        <div class="food-prep-time"></div>
        <div class="food-cost"></div>
    </div>
</div>`;
let newFoodItem=document.createElement('div');
// newFoodItem.classList.add("dish-card");
newFoodItem.innerHTML=htmlContent;
return newFoodItem;
}
function fillItems(){
let parentDiv=document.getElementsByClassName("show-rest")[0];
console.log(parentDiv[0]);
foodItems.forEach(food=>{
    let newFodItem=createItem(food);
    parentDiv.appendChild(newFodItem);
})
}

// document.onload(()=>{
//     fillItems();
// })
fillItems();