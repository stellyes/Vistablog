const { BlogPost } = require("../models");

const postData = [
  {
    title: "Tech Trends",
    blog_text:
      "Technology trends are constantly evolving, and it's essential to stay updated. In this blog post, we'll explore some of the latest developments in the tech world.",
    user_id: 1,
  },
  {
    title: "Travel Adventures",
    blog_text:
      "Join me on a journey through my recent travel adventures. From breathtaking landscapes to culinary delights, I'll share my experiences with you.",
    user_id: 2,
  },
  {
    title: "Foodie Delights",
    blog_text:
      "Calling all foodies! Let's explore the world of delicious culinary delights together. From mouthwatering recipes to hidden gems, there's something for everyone.",
    user_id: 3,
  },
  {
    title: "Healthy Living",
    blog_text:
      "Maintaining a healthy lifestyle is important. In this blog post, we'll discuss tips and tricks for staying fit, eating well, and living a balanced life.",
    user_id: 4,
  },
  {
    title: "Book Recommendations",
    blog_text:
      "Are you looking for your next great read? I've got some fantastic book recommendations for you. Dive into the world of literature with these picks.",
    user_id: 5,
  },
  {
    title: "DIY Projects",
    blog_text:
      "Get your creative juices flowing with these DIY project ideas. From home decor to crafting, there's no limit to what you can create with a little inspiration.",
    user_id: 6,
  },
  {
    title: "Career Growth",
    blog_text:
      "Are you ready to take your career to the next level? In this blog post, we'll discuss strategies for professional growth and success.",
    user_id: 7,
  },
  {
    title: "Nature's Wonders",
    blog_text:
      "Nature is full of wonders waiting to be explored. Join me as we delve into the beauty of our natural world, from awe-inspiring landscapes to fascinating wildlife.",
    user_id: 8,
  },
  {
    title: "Mindful Living",
    blog_text:
      "Discover the benefits of mindful living and find inner peace. In this blog post, we'll explore mindfulness practices and their positive impact on daily life.",
    user_id: 9,
  },
  {
    title: "The Art of Photography",
    blog_text:
      "Photography is more than just taking pictures; it's a form of art. In this blog post, we'll explore the creative aspects of photography and how to capture captivating moments.",
    user_id: 1,
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedBlogPosts;
