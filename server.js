//Dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
//Define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Define API routes
app.get("/api/shuffle", (req, res) => {
  axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2").then(function(response){
    console.log(response.data.remaining)
    res.json(response.data.cards)
  })
})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});