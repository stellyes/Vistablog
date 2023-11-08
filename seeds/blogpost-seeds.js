const { BlogPost } = require("../models");

const postData = [
  {
    title: "Lorem Ipsum",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in bibendum mauris. Nunc fermentum felis at justo eleifend, vel ullamcorper erat fermentum. Sed in purus quis odio vulputate egestas. Etiam non lacinia dui, in scelerisque lorem. Aenean eget justo eget mi eleifend auctor.",
    user_id: 1,
  },
  {
    title: "Sample Blog Post",
    blog_text:
      "This is a sample blog post. It contains some example text for demonstration purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus eu dolor quis purus pharetra suscipit vel eget ex. Nulla facilisi. Sed feugiat nisl non tincidunt eleifend. Aenean dapibus augue ut elit laoreet, eu ultricies tellus scelerisque.",
    user_id: 2,
  },
  {
    title: "Blog Post Title",
    blog_text:
      "This is another example blog post with a title and some blog text. It's important to have meaningful content in a blog post to engage readers. Sed eget urna tristique, venenatis sapien sit amet, scelerisque ligula. Nullam vel tincidunt risus, vel tincidunt justo. Aliquam erat volutpat. Donec quis dolor sed urna iaculis laoreet.",
    user_id: 3,
  },
  {
    title: "My Blog",
    blog_text:
      "Welcome to my blog! In this blog post, I will share some thoughts and ideas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl sed dui vestibulum, vel vulputate enim eleifend. Nam sollicitudin libero sed urna cursus, a egestas nulla eleifend.",
    user_id: 4,
  },
  {
    title: "Blog Example",
    blog_text:
      "Here's another example of a blog post. It's important to write engaging content for your readers. Sed fermentum mi a quam vehicula hendrerit. Quisque vitae justo id tellus dignissim euismod eu vitae dui. Aliquam non justo ac nunc feugiat dictum.",
    user_id: 5,
  },
  {
    title: "Blog Post Sample",
    blog_text:
      "This is a sample blog post with some random text. Sed tristique magna eu mi pharetra, in tempus justo laoreet. Vestibulum varius libero id justo feugiat, ac suscipit lorem viverra. In tincidunt, turpis eu vestibulum bibendum, metus libero hendrerit elit, a malesuada eros turpis vitae libero.",
    user_id: 6,
  },
  {
    title: "Blogging 101",
    blog_text:
      "In this blog post, we'll discuss the basics of blogging. Blogging is a popular way to share your thoughts and ideas with the world. Sed volutpat bibendum nulla, eu tincidunt sapien commodo vel. Fusce nec dolor urna. Nulla ac ante ac orci suscipit tristique.",
    user_id: 7,
  },
  {
    title: "Tech Trends",
    blog_text:
      "In this blog post, we'll explore the latest technology trends. Technology is constantly evolving, and it's essential to stay updated. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra dolor at vestibulum. Sed sit amet urna id quam iaculis varius.",
    user_id: 8,
  },
  {
    title: "Travel Adventures",
    blog_text:
      "Join me on a journey through my travel adventures. I've been to many amazing places and want to share my experiences. Sed a elit id nunc bibendum efficitur. Aliquam erat volutpat. Suspendisse eget est nec justo efficitur bibendum.",
    user_id: 9,
  },
  {
    title: "Foodie Delights",
    blog_text:
      "Calling all foodies! Explore the world of delicious culinary delights with me. Sed placerat ipsum a ligula rhoncus, ut efficitur arcu tincidunt. Nullam eu semper mauris. Suspendisse at dolor nec metus facilisis efficitur.",
    user_id: 1,
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedBlogPosts;
