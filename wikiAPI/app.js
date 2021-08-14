const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));


mongoose.connect('mongodb://localhost:27017/wikiDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")

  .get(function(req, res) {
    Article.find({}, function(err, results) {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  })

  .post(function(req, res) {
    const newarticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newarticle.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully added a new article.");
      }
    });
  })

  .delete(function(req, res) {
    Article.deleteMany({}, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully deleted all the articles.");
      }
    });
  });


app.route("/articles/:articleTitle")

  .get(function(req, res) {
    Article.findOne({
      title: req.params.articleTitle
    }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  })

  .put(function(req, res) {
    Article.update({
      title: req.params.articleTitle
    }, {
      title: req.body.title,
      content: request.body.content
    }, {
      overwrite: true
    }, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully updated the article.");
      }
    });
  })

  .patch(function(req, res) {
    Article.update({
      title: req.params.articleTitle
    }, {
      $set: req.body
    }, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully updated the article.");
      }
    });
  })

  .delete(function(req, res) {
    Article.deleteOne({title: req.params.articleTitle}, function(err) {
      if(err) {
        res.send(err);
      } else {
        res.send("Successfully deleted the article.");
      }
    });
  });

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
