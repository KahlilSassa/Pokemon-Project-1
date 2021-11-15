let randomPokemonArray = ["Alakazam", "Charizard","Articuno", "Gyrados","Alakazam", "Articuno","Alakazam", "Charizard","Articuno","Gyrados","Charizard", "Gyrados","Articuno", "Alakazam","Charizard", "Gyrados",]


// Randomize cards
randomPokemonArray.sort(() => 0.3 - Math.random())


// GRAB GRID USING QUERY SELECTOR
document.querySelectorAll('.card-item').forEach((card,i) => {
    let imageDiv = document.createElement('div')
   let image =  document.createElement('img')
   imageDiv.classList.add('thefront');
   image.src=`./Assets/${randomPokemonArray[i]}.png`
    //add attribute or class to front of image to decipher he matches.
    card.setAttribute('data-id', i)
    card.setAttribute('data-pokemon', randomPokemonArray[i])
    imageDiv.append(image);
    card.querySelector('.card-item-inner').append(imageDiv)
})



// Loop over each card in array to check for match.
const cardItem = document.querySelectorAll('.card-item')

cardItem.forEach(card => {
    card.addEventListener('click', function(e) {
        console.log(e)
    })

})


let matches = []


function checkForMatch(){
    // check to see if we have two cards chosen are a match. 
    // To see a comparison.

     if(matches.length === 2){
     if(matches[0].name === matches[1].name){
        setTimeout(() => { 
        alert("You found a match")},500)
        matches.style.pointerEvents = 'none'
        // Figure out once match is found . cards are not clickable anymore.
        // Also find out a way to log matches into h3 tag. think textContent
        } else {
            console.log(matches.location)
            setTimeout(() => {
            alert('Not a match!')
            matches[0].location.parentElement.parentElement.parentElement.classList.toggle('flip')
            matches[1].location.parentElement.parentElement.parentElement.classList.toggle('flip')
            matches = []
            },500)
            // matches[0].location.parentElement.parentElement.parentElement.classList.toggle('flip')
            // matches[1].location.parentElement.parentElement.parentElement.classList.toggle('flip')
        }  
    }
}  


const game = {
    card: document.querySelectorAll('.card-item'),
    handleClick: (e) => {
        e.target.closest('.card-item').classList.toggle('flip')
        matches.push({
          name: e.target.parentElement.parentElement.parentElement.dataset.pokemon,
            location: e.target,
        })
        checkForMatch()
    }
    // Remove event listener that flips card if its a match.

}


// Added an eventlistener for card click that flips card. ***
game.card.forEach((card) => {
    card.addEventListener('click', game.handleClick)

})

