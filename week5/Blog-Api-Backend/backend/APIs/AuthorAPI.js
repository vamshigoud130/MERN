import exp from "express";
import { register, authenticate } from "../AuthService.js";
import { ArticleModel } from "../Models/ArticleModel.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export const authorRoute = exp.Router();


// register author
authorRoute.post("/users", async (req, res) => {

  const newUserObj = await register({
    ...req.body,
    role: "AUTHOR"
  });

  res.status(201).json({
    message: "User created",
    payload: newUserObj
  });

});


// login author
authorRoute.post("/authenticate", async (req, res, next) => {

  try {

    const result = await authenticate(req.body);

    res.status(200).json({
      message: "Author login successful",
      payload: result
    });

  } catch (err) {
    next(err);
  }

});


// create article
authorRoute.post("/articles", verifyToken("AUTHOR"), async (req, res) => {

    console.log(req.user)
  try {

    const article = new ArticleModel({
      ...req.body,
      author: req.user.userId
    });

    const createdDoc = await article.save();

    res.status(201).json({
      message: "Article created successfully",
      payload: createdDoc
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

});


// get articles of specific author
authorRoute.get(
  "/articles/author/:authorId",
  verifyToken(["AUTHOR"]),
  async (req, res) => {

    try {

      const articles = await ArticleModel
        .find({
          author: req.params.authorId,
          isArticleActive: true
        })
        .populate("author", "firstname");

      res.status(200).json({
        message: "Author articles fetched successfully",
        payload: articles
      });

    } catch (err) {

      res.status(500).json({
        message: err.message
      });

    }

  }
);


// update article
authorRoute.put(
  "/articles/:id",
  verifyToken(["AUTHOR"]),
  async (req, res) => {

    try {

      const { id } = req.params;

      const article = await ArticleModel.findById(id);

      if (!article) {
        return res.status(404).json({
          message: "Article not found"
        });
      }
  //cehck owner
      if (article.author.toString() !== req.user.userId) {
        return res.status(403).json({
          message: "Forbidden. You can only modify your own articles"
        });
      }

      Object.assign(article, req.body);

      await article.save();

      res.status(200).json({
        message: "Article updated successfully",
        payload: article
      });

    } catch (err) {

      res.status(500).json({
        message: err.message
      });

    }

  }
);


// delete / restore article
authorRoute.patch(
  "/articles/:id/status",
  verifyToken(["AUTHOR"]),
  async (req, res) => {

    try {

      const { id } = req.params;
      const { isArticleActive } = req.body;

      const article = await ArticleModel.findById(id);

      if (!article) {
        return res.status(404).json({
          message: "Article not found"
        });
      }
  //check owner
      if (article.author.toString() !== req.user.userId) {
        return res.status(403).json({
          message: "Forbidden. You can only modify your own articles"
        });
      }

      if (article.isArticleActive === isArticleActive) {
        return res.status(400).json({
          message: `Article is already ${isArticleActive ? "active" : "deleted"}`
        });
      }

      article.isArticleActive = isArticleActive;

      await article.save();

      res.status(200).json({
        message: `Article ${isArticleActive ? "restored" : "deleted"} successfully`,
        payload: article
      });

    } catch (err) {

      res.status(500).json({
        message: err.message
      });

    }

  }
);