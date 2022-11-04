const Article = require('../model/articlemodel');
const { calculateReadingTime } = require('../utils/genutils');
const { successResponse, handleError, errorResponse } = require('../utils/responses');

const createArticle = async (req, res) => {
  try {
    const { title, description, body, tags } = req.body;
    const { id } = req.user;
    const author = `${req.user.firstName} ${req.user.lastName}`;
    const readingTime = calculateReadingTime(body);
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
    // const { id } = req.user;
    const { page, limit,title,tag } = req.query;
    const skip = (page - 1) * 20;
    const articles = await Article.find().skip(skip).limit(limit).where({state:'published'})
    if (!articles) return errorResponse(res, 404, 'No articles found');
    return successResponse(res, 200, 'post fetched successfully', { articleNumbers: articles.length, page: page, articles: articles })
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
}

const getAllArticleById = async (req, res) => {
  try {
    const { articleId } = req.params;
    const article = await Article.findById(articleId).populate('user_id', { firstName: 1, lastName: 1 })
    if (!article) return errorResponse(res, 404, 'Article not found');
    article.readCount += 1
    const result = await article.save();
    return successResponse(res, 200, 'article fetched successfully', result);
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
    if (article.user_id.toString() != id) return errorResponse(res, 401, 'user not authorized');
    const editedArticle = await Article.findByIdAndUpdate(article, { body }, { new: true });
    return successResponse(res, 200, 'article updated successfully', editedArticle);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
}

const updateArticle = async (req, res) => {
  try {
    const { id } = req.user;
    const { articleId } = req.params;
    const article = await Article.findById(articleId);
    if (!article) return errorResponse(res, 404, 'Article not found');
    if (article.user_id.toString() != id) return errorResponse(res, 401, 'user not authorized');
    article.state = 'published';
    const result = await article.save();
    return successResponse(res, 200, 'article updated successfully', result);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
}

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.user;
    const { articleId } = req.params;
    const article = await Article.findById(articleId);
    if (!article) return errorResponse(res, 404, 'Article not found');
    if (article.user_id.toString() != id) return errorResponse(res, 401, 'user not authorized');
    const deletedArticle = await Article.findByIdAndDelete(article);
    return successResponse(res, 200, 'article deleted successfully', articleId);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
}

const getAllUserArticle = async (req, res) => {
  try {
    const { id } = req.user;
    const articles = await Article.find({ userId: id }).populate('user_id');
    if (!articles) return errorResponse(res, 404, 'Article not found');
    return successResponse(res, 200, 'article fetched successfully', articles);
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
  updateArticle,
  deleteArticle,
  getAllUserArticle,
}
