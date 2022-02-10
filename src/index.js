let dogButton = document.getElementById("dog-button")

function fetchPage(){
    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(function(dogArr){
        dogArr.forEach(dog => {
            renderDog(dog)
            
        });
    })
}

function renderDog(dog){
let dogNames = document.createElement("span")
    let dogBar = document.querySelector("#dog-bar")
    dogNames.textContent = dog.name
    dogNames.style.color = "magenta"
    dogNames.style.accentColor = "red"

    let dogInfo = document.querySelector("#dog-info")
        dogBar.appendChild(dogNames)
       
        dogNames.addEventListener("click", () => {
       currentDog = dog 
       document.getElementById('dog-image').src = dog.image
       document.getElementById('dog-h2').textContent = dog.name
       dogButton.textContent = dog.isGoodDog ? 'good doggo' : 'shit head'
       

         } )

}

dogButton.addEventListener("click", () => {
    currentDog.isGoodDog = !currentDog.isGoodDog
    dogButton.textContent = currentDog.isGoodDog ? 'good doggo' : 'shit head'
})
fetchPage()