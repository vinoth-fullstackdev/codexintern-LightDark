
document.addEventListener("DOMContentLoaded",()=>{
    const btn = document.querySelector(".btn")
    const container = document.querySelector(".container")

    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log("Hello");

        if(btn.innerHTML.trim() === "Light"){
            container.style.backgroundColor="White"
            btn.innerHTML = "Dark"
            btn.style.backgroundColor="Black"
            btn.style.color ="white"
        }else{
            container.style.backgroundColor="Black"
            btn.innerHTML = "Light"
            btn.style.backgroundColor = "white"
            btn.style.color = "Black"
        }  
    })   
})
// document.addEventListener("DOMContendLoaded",()=>{
//     const btn =document.getElementById("btn")
//     const container = document.getElementById("container")

//     btn.addEventListener("click",(e)=>{
//         e.preventDefault
//         console.log("Hello");
//         if(btn.innerHTML.trim() === "Light"){
//             container.style.backgroundColor = "Black"
//             btn.style.backgroundColor="white"
//             btn.style.innerHTML="Dark"
//             btn.style.color = "Black"
//         }else{
//             container.style.backgroundColor ="White"
//             btn.style.color="White"
//             btn.style.backgroundColor = "Black"
//             btn.innerHTML = "Light"
//         }
        
//     })
// })






// arr = [1,2]

// var largest = arr[0]
// var secondlargest = arr[0]

// arr.forEach(ele => {
//     if(largest<ele){
//         secondlargest = largest
//         largest = ele
//     } else if( secondlargest<ele && secondlargest != largest ){
//                 secondlargest = ele
//     }
// });

// console.log(`Largest:${largest}`);
// console.log(`SecondLargest:${secondlargest}`);

// time complex is O(N) liner
// space complex is O(1) constant


