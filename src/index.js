function addDisplayedImages(){
    const apiUrl = "http://localhost:3000/games"
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

        data.forEach(element => {
            const gameContainer = document.createElement('div')
            gameContainer.className = 'game-container'

            const anchor = document.createElement("a")
            anchor.href = element.game_url
            anchor.target = "_blank";

            const imgElement = document.createElement('img')
            const imgDisplay = document.getElementById('game-images-div')
            imgElement.className = "displayed-images"
            imgElement.src = element.thumbnail
            // imgElement.addEventListener("mouseover", () => {
            //     console.log(element.short_description)
            // }
        //)
            anchor.appendChild(imgElement)
            gameContainer.appendChild(anchor)

            const gameTitle = document.createElement("h3")
            gameTitle.textContent = element.title
            gameContainer.appendChild(gameTitle)

            const favoriteButton = document.createElement('button')
            favoriteButton.innerHTML = "add to favorite"
            gameContainer.appendChild(favoriteButton)
            favoriteButton.addEventListener("click", () => {

                fetch("http://localhost:3000/favorites")
                .then(res => res.json())
                .then(favorites => {
                    const isInFavorites = favorites.some(item => { item.id === element.id })
                    if(isInFavorites === false){
                        fetch("http://localhost:3000/favorites", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body:JSON.stringify(element)
                        })
                        .then(res=>res.json())
                        .then(() => addFavoriteGame())
                    }
            })
            imgDisplay.appendChild(gameContainer)


        });
    })
}
    )}

    
function addFavoriteGame() {
    fetch("http://localhost:3000/favorites")
    .then(res => res.json())
    .then(favoritesGame => {
        const favoritesDisplay = document.getElementById('favorite-display')
        favoritesDisplay.innerHTML = ''

        favoritesGame.forEach(element => {

            const gameContainer = document.createElement('div')
            gameContainer.className = 'game-container'

            const anchor = document.createElement("a")
            anchor.href = element.game_url
            anchor.target = "_blank";

            const imgElement = document.createElement('img')
            imgElement.className = "displayed-images"
            imgElement.src = element.thumbnail
            anchor.appendChild(imgElement)

            gameContainer.appendChild(anchor)
            const gameTitle = document.createElement("h3")
            gameTitle.textContent = element.title
            gameContainer.appendChild(gameTitle)
            favoritesDisplay.appendChild(gameContainer)

        })
        
    })


}
addFavoriteGame()
addDisplayedImages()
