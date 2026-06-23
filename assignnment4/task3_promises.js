// Task 3: Promises

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "Ram" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["nice", "good"]);
    }, 1000);
  });
}

let savedUser, savedPosts;

getUser(1)
  .then((user) => {
    console.log("User fetched");
    savedUser = user;
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts fetched");
    savedPosts = posts;
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments fetched");
    console.log("User:", savedUser);
    console.log("Posts:", savedPosts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
