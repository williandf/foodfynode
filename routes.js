const express = require('express');
const routes = express.Router();

const recipes = require('./controllers/admin');
const recipes1 = require('./data');

routes.get("/", function (req, res) {
  return res.render("initial", {items: recipes1});
});

routes.get("/about", function (req, res) {
  return res.render("about");
});

routes.get("/recipes", function (req, res) {
  return res.render("recipes", {items: recipes1});
});

routes.get("/receipts/:id", function (req, res) {
  const id = req.params.id;

  const recipe = recipes1.find(function (recipe){
    if (recipe.id == id) {
      return true
    }
  })
  if (!recipe) {
    return res.send('Receita não encontrada')
  }
  return res.render('receipts', {recipe})
});

routes.get("/admin", function (req,res) {
  return res.redirect("admin/recipes");
});

routes.get("/admin/recipes", recipes.index);

routes.get("/admin/recipes/create", recipes.create);

module.exports = routes;
