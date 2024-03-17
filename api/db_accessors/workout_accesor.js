import Connection from "../db/connections.js";
import Workout from "../models/article.js";

export default class ArticlesAccessor {
  static async getArticleByName(articleTitle) {
    await Connection.open("home");
    const articleIGotFromTheDB = await Workout.findOne({ title: articleTitle });
    return articleIGotFromTheDB;
  }

  static async getAllArticles() {
    await Connection.open("home");
    const allArticles = await Workout.find({});
    return allArticles;
  }

  static async postArticle(articleDoc) {
    Workout.create(articleDoc);
  }
}