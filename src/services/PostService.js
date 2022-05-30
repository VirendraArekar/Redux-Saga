const GetPosts = async () => {
  console.log("4.PostService---GetPosts");
  var resPost = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await resPost.json();
};
const GetPost = async (id) => {
  console.log("4.PostService---GetPost");
  var resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await resPost.json();
};

export { GetPosts, GetPost };
