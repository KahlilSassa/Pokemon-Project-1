let randomPokemonArray = ["Alakazam", "Charizard","Articuno", "Gyrados","Alakazam", "Articuno","Alakazam", "Charizard","Articuno","Gyrados","Charizard", "Gyrados","Articuno", "Alakazam","Charizard", "Gyrados",]

// Randomize cards
randomPokemonArray.sort(() => 0.3 - Math.random())


// GRAB GRID USING QUERY SELECTOR
document.querySelectorAll('.card-item').forEach((card,i) => {
    let imageDiv = document.createElement('div')
   let image =  document.createElement('img')
   imageDiv.classList.add('thefront')
   image.src=`./Assets/${randomPokemonArray[i]}.png`
    //add attribute or class to front of image to decipher the matches.
    card.setAttribute('data-id', i)
    card.setAttribute('data-pokemon', randomPokemonArray[i])
    imageDiv.append(image)
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
        // Check to see if two picked cards are a match. ***
    if(matches.length === 2){
    if(matches[0].name === matches[1].name){
        //  created a timeout of .5 sec to alert when a match is found.***
    setTimeout(() => { 
    alert("You found a match")},500)
        // Removed the click listener when match was found.***
    matches[0].location.closest('.card-item').removeEventListener('click', game.handleClick)
    matches[1].location.closest('.card-item').removeEventListener('click', game.handleClick)
        matches = []
        } else {
            console.log(matches[0].location)
            setTimeout(() => {
            alert('Not a match!')
            matches[0].location.closest('.card-item').classList.toggle('flip')
            matches[1].location.closest('.card-item').classList.toggle('flip')
            matches = []
            },500)
        }  
    } else {
        
    }  
}  


const game = {
    card: document.querySelectorAll('.card-item'),
    handleClick: (e) => {
        e.target.closest('.card-item').classList.toggle('flip')
        matches.push({
          name: e.target.closest('.card-item').dataset.pokemon,
            location: e.target,
        })
        checkForMatch()
    }

}

// Added an eventlistener for card click that flips card. ***
game.card.forEach((card) => {
    card.addEventListener('click', game.handleClick)
})
   