# MTG deck editor backend
This is the backend for my MTG deck editor

## Made with
- Express.js
- NPM
- MongoDB (NoSQL)

## list of endpoints
- /Decks
    - Gets a list of all the decks in the database
- /Deck/:id
    - Get a specific deck from the database
- /Create
    - Creates a new deck
- /Save
    - Saves changes made to the deck
- /Delete/:id
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
