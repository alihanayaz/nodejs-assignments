const posts = [
  { title: 'Post 1', author: 'John Doe' },
  { title: 'Post 2', author: 'Jane Doe' },
  { title: 'Post 3', author: 'Joe Bloggs' },
];

function listPosts(data) {
  data.map((post) => {
    console.log(post.title, post.author);
  });
}

function addPost(newPost) {
  let promisePost = new Promise((resolve, reject) => {
    posts.push({ title: 'Post 4', author: 'Jon' });
    resolve('New post added');
  });
  return promisePost;
}

async function showPosts() {
  listPosts(posts);
  try {
    let response = await addPost();
    console.log(response);
    listPosts(posts);
  } catch (err) {
    console.log('Error');
  }
}

showPosts();
