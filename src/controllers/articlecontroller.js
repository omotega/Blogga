const Article = require('../model/articlemodel');
const { successResponse, handleError, errorResponse } = require('../utils/responses');
const User = require('../model/usermodel');

const createArticle = async (req, res) => {
  try {
    const { title, description, body, tags } = req.body;
    const { id } = req.user;
    const author = `${req.user.firstName} ${req.user.lastName}`;
    const readtime = Math.round(body.split(' ').length / 200);
    const readingTime = readtime < 1 ? `${readtime + 1} mins read` : `${readtime} mins read`
    const article = await Article.create({
      title,
      description,
      body,
      tags,
      author,
      user_id: id,
      readingTime: readingTime,
    });
    return successResponse(res, 201, 'article published successfully', { article });
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    const article = articles.filter((article) => article.state === 'published');
    if (!articles) return errorResponse(res, 404, 'No articles found');
    return successResponse(res, 200, 'post fetched successfully', article)
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
}

const getAllArticleById = async (req, res) => {
  try {
    const { articleId } = req.params;
    const article = await Article.findById(articleId)
    if (!article) return errorResponse(res, 404, 'Article not found');
    article.readCount  +=  1
    const result = await article.save();
    return successResponse(res, 200, 'article fetched successfully', article)
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
}

const editArticle = async (req, res) => {
  try {
    const { id } = req.user;
    const { articleId } = req.params;
    const { body } = req.body;
    const article = await Article.findById(articleId);
    if (!article) return errorResponse(res, 404, 'Article not found');
    const user =  await  User.findById(id);
    if(!user) return errorResponse(res, 404, 'User not found');
    if(article.user_id.toString() != user.id) return errorResponse(res, 401,'user not authorized');
    const updatedArticle = await Article.findByIdAndUpdate(article, { body }, { new: true });
    return successResponse(res, 200, 'article updated successfully', updatedArticle);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
}

module.exports = {
  createArticle,
  getAllArticles,
  getAllArticleById,
  editArticle,
}
