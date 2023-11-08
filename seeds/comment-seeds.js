const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great post! I really enjoyed reading this.",
    post_id: 1,
    user_id: 2,
  },
  {
    comment_text: "I completely agree with your points. Well done!",
    post_id: 2,
    user_id: 3,
  },
  {
    comment_text: "Nice work. This is very informative.",
    post_id: 3,
    user_id: 4,
  },
  {
    comment_text: "Thanks for sharing your thoughts. I found this inspiring.",
    post_id: 4,
    user_id: 5,
  },
  {
    comment_text: "I love the positivity in your post. Keep it up!",
    post_id: 5,
    user_id: 6,
  },
  {
    comment_text: "This is a great read. I learned something new today.",
    post_id: 6,
    user_id: 7,
  },
  {
    comment_text: "You have a way with words. I enjoyed this a lot.",
    post_id: 7,
    user_id: 8,
  },
  {
    comment_text: "I couldn't agree more. Your post made my day better.",
    post_id: 8,
    user_id: 9,
  },
  {
    comment_text: "Nice post! I appreciate the effort you put into this.",
    post_id: 9,
    user_id: 1,
  },
  {
    comment_text: "This is a fantastic blog. I look forward to more.",
    post_id: 10,
    user_id: 2,
  },
  {
    comment_text: "You've got a talent for writing. Keep it up!",
    post_id: 1,
    user_id: 3,
  },
  {
    comment_text: "I found your post very motivating. Thank you!",
    post_id: 2,
    user_id: 4,
  },
  {
    comment_text: "Your positivity is contagious. I love it!",
    post_id: 3,
    user_id: 5,
  },
  {
    comment_text: "I'm looking forward to more content from you.",
    post_id: 4,
    user_id: 6,
  },
  {
    comment_text: "Your posts always brighten my day. Thank you!",
    post_id: 5,
    user_id: 7,
  },
  {
    comment_text: "You have a way of making even simple things interesting.",
    post_id: 6,
    user_id: 8,
  },
  {
    comment_text: "I appreciate your insights. Keep them coming!",
    post_id: 7,
    user_id: 9,
  },
  {
    comment_text: "Great job! Your posts are a joy to read.",
    post_id: 8,
    user_id: 1,
  },
  {
    comment_text: "You have a unique perspective. I admire that.",
    post_id: 9,
    user_id: 2,
  },
  {
    comment_text: "This is wonderful. I'm impressed by your work.",
    post_id: 10,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
