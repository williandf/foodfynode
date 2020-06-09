const express = require('express');
const nunjuncks = require('nunjucks');

const server = express();
const recipes = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjuncks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});


server.get("/", function (req, res) {
  return res.render("initial", {items: recipes});
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/recipes", function (req, res) {
  return res.render("recipes", {items: recipes});
});

server.get("/receipts/:id", function (req, res) {
  const id = req.params.id;

  const recipe = recipes.find(function (recipe){
    if (recipe.id == id) {
      return true
    }
  })
  if (!recipe) {
    return res.send('Receita não encontrada')
  }
  return res.render('receipts', {recipe})
});

server.listen(5000, function() {
  console.log("Server is running")
});
