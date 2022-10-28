const Article = require('../model/articlemodel');
const { successResponse, handleError,errorResponse } = require('../utils/responses');

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
      readingTime:readingTime,
    });
    return successResponse(res, 201, 'article published successfully',{article});
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, 'Server error');
  }
};



module.exports = {
    createArticle,
}
