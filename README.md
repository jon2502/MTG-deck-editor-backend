# MTG deck editor backend
This is the backend for my MTG deck editor

## Made with
- Express.js
- NPM
- MongoDB (NoSQL)

## list of endpoints
- /GetDecks
    - Gets a list of all the decks in the database
- /Getdeck/:id
    - Get a specific deck from the database
- /CreateDeck
    - Creates a new deck
- /SaveDeck
    - Saveschanges made to the deck
- /DeleteDeck/:id
    - Delete a deck from the database

## Link to frontend code
https://github.com/jon2502/mtg-deck-editor

## Setup to dev
1. Clone code
2. Setup .env
3. Run <code>npm install</code>

Localhost is set to 3500

## .env
```env
MONGODB_URI
MONGODB_NAME
```

## Creating a server
Start a server using command:<code>npm start</code>
