// Task 2: Callback Hell

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Ram" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    callback(["post1", "post2"]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    callback(["nice", "good"]);
  }, 1000);
}

// Nested callbacks = Callback Hell
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0], (comments) => {
      console.log("User fetched");
      console.log("Posts fetched");
      console.log("Comments fetched");
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});
