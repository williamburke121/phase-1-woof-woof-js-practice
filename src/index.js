
let dogBar, dogDetailName, dogDetailImage, dogDetailButton;
document.addEventListener("DOMContentLoaded", () => {
    init()}
)

function init(){
   
   dogBar = document.getElementById("dog-bar")
   dogDetailName = document.getElementById("dog-detail-name")
   dogDetailImage = document.getElementById("dog-detail-img")
   dogDetailButton = document.getElementById("dog-detail-button")
   
    fetch( "http://localhost:3000/pups")
    .then(response => response.json())
    .then(pupData => {
        console.log(pupData)
        pupData.map(pup => {
            
            createDogNameSpan(pup)
        })
    })
}

function createDogNameSpan(pup){
   let dogSpan = document.createElement("span")
   dogSpan.textContent = pup.name
   dogBar.appendChild(dogSpan)
   dogSpan.addEventListener("click", (e) => {
        console.log("click", pup)
        dogDetailName.textContent = pup.name
        dogDetailImage.src = pup.image
        dogDetailButton.textContent = pup.isGoodDog ? "Good Dog!" : "Bad Dog"
   })
  
  


}

