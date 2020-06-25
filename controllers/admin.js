const fs = require('fs');
const data = require('../data.json');

exports.redirect = function (req,res) {
  return res.redirect("admin/recipes");
};

exports.index = function (req,res) {
  return res.render("admin/index")
};

exports.create = function (req, res) {
  return res.render("admin/create")
};

exports.post = function (req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!")
    }
  }

    let {image_url, ingredients, preparation, information} = req.body

    const id = Number(data.recipes.length + 1);

    data.recipes.push({
      id,
      image_url,
      ingredients,
      preparation,
      information,
    });


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
      if (err) return res.send("Write file error!")

      return res.redirect("/admin")
    })
};
