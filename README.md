# Free to Play Games Library

This dynamic web application allows users to explore a variety of free-to-play games, add their favorite games to a personal library, and remove games from the favorites list. The application fetches data from a local server and provides an interactive, engaging interface for managing your game favorites.

## Usage

To use this application, follow these steps:

1. **Run the local database**:
    ```bash
    json-server --watch db.json --port 3000
    ```

2. **Run the live server**:
    ```bash
    live-server
    ```

## Description

The website is built using HTML, CSS, and JavaScript. Below are the key JavaScript functionalities used in the project:

### Event Listeners
- **'click'**: Adds or removes games from the favorite list.
- **'mouseover'**: Applies hover effects on game images.
- **'mouseout'**: Removes hover effects when the mouse is moved away.

### JavaScript Functions
- **`addDisplayedImages()`**: Fetches the list of free-to-play games and displays them on the page.
- **`addFavoriteGame()`**: Fetches and displays the list of favorite games from the local database.

## How to Use the Webpage

### Viewing Games
Upon loading the page, you will see a list of free-to-play games. You can hover over the game images to see a zoom effect, making the game stand out.

### Adding a Game to Favorites
To add a game to your favorites, click the yellow "Add to Favorite" button below the game. The game will then appear in your personal favorites section titled **Your Library**.

### Removing a Game from Favorites
Once a game is added to your library, a red "X" button will appear. Clicking the "X" will remove the game from your favorites.

### Favorites Section
The favorites section is scrollable, displaying your selected games in a horizontal row. You can easily manage your favorite games through this section.

## API Endpoints
- **Games List**: `http://localhost:3000/games`
- **Favorites**: `http://localhost:3000/favorites`

Enjoy managing your collection of free-to-play games with this interactive application!
