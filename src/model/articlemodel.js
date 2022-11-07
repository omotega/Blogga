const mongoose = require('mongoose');


const articleSchema = mongoose.Schema({
  title: { type: String, required: true ,unique:true},
  description: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  state: { type: String, default: 'draft', enum: ['draft', 'published'] },
  readCount: { type: Number, default: 0 },
  readingTime: { type: String },
  tags: [String],
}, {
  timestamps: true,
})


module.exports = mongoose.model('Article', articleSchema);