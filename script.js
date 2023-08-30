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
};

function fillItems(){
let parentDiv=document.getElementsByClassName("show-rest")[0];
foodItems.forEach(food=>{
    let newFodItem=createItem(food);
    parentDiv.appendChild(newFodItem);
})
};

function leftClickAction(shift){
    console.log("left clicked")
    let dishCards=document.getElementsByClassName("inside-box");
    Array.prototype.map.call(dishCards,(card)=>(card.style.translate=`-${shift}%`));
}
function rightClickAction(shift){
    console.log("right clicked");
    let dishCards=document.getElementsByClassName("inside-box");
    // dishCards.map((card)=>(card.style.translate-=100));
    Array.prototype.map.call(dishCards,(card)=>(card.style.translate=`-${shift}%`));
}

let maxShift=document.getElementsByClassName("inside-box").length-2;
let presentShift=0;

function isHidden({type}){
    if(type=="left")
        return presentShift==0;
    return presentShift==maxShift;
}

function clickAction({type}){
    if(type=="left"&&presentShift){
        presentShift--;
        rightBut.style.visibility="visible";
        leftClickAction(presentShift*100);
        if(isHidden({type})){
            leftBut.style.visibility="hidden";
        }
        
    }
    else if(type=="right"&&(presentShift<=maxShift)){
        presentShift++;
        leftBut.style.visibility="visible";
        rightClickAction(presentShift*100);
        if(isHidden({type})){
            rightBut.style.visibility="hidden";
        }
        
    } 
}
let leftBut=document.getElementsByClassName("left-slide-but")[0];
let rightBut=document.getElementsByClassName("right-slide-but")[0];
leftBut?.addEventListener('click',()=>clickAction({type:"left"}));
rightBut?.addEventListener('click',()=>clickAction({type:"right"}));

fillItems();

