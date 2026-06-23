// ============================================================
//  Task 1: Understanding Callbacks
// ============================================================

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Ram" });
  }, 2000);
}

// Call getUser and print the user name
getUser(1, (user) => {
  console.log("User name:", user.name);
});


// ============================================================
//  Task 2: Callback Hell
// ============================================================

function getUserCB(id, callback) {
  setTimeout(() => {
    const user = { id: id, name: "Ram" };
    console.log("User fetched");
    callback(user);
  }, 1000);
}

function getPostsCB(userId, callback) {
  setTimeout(() => {
    const posts = ["post1", "post2"];
    console.log("Posts fetched");
    callback(posts);
  }, 1000);
}

function getCommentsCB(postId, callback) {
  setTimeout(() => {
    const comments = ["nice", "good"];
    console.log("Comments fetched");
    callback(comments);
  }, 1000);
}

// Nested callbacks — hard to read (Callback Hell)
getUserCB(1, (user) => {
  getPostsCB(user.id, (posts) => {
    getCommentsCB(posts[0], (comments) => {
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});


// ============================================================
//  Task 3: Convert to Promises
// ============================================================

function getUserPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "Ram" });
    }, 1000);
  });
}

function getPostsPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getCommentsPromise(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["nice", "good"]);
    }, 1000);
  });
}

// Chained .then() — flat and readable
let savedUser, savedPosts;

getUserPromise(1)
  .then((user) => {
    console.log("User fetched");
    savedUser = user;
    return getPostsPromise(user.id);
  })
  .then((posts) => {
    console.log("Posts fetched");
    savedPosts = posts;
    return getCommentsPromise(posts[0]);
  })
  .then((comments) => {
    console.log("Comments fetched");
    console.log("User:", savedUser);
    console.log("Posts:", savedPosts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });


// ============================================================
//  Task 4: Async / Await Version
// ============================================================

async function showData() {
  try {
    const user = await getUserPromise(1);
    console.log("User fetched");

    const posts = await getPostsPromise(user.id);
    console.log("Posts fetched");

    const comments = await getCommentsPromise(posts[0]);
    console.log("Comments fetched");

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

showData();
