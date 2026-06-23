// Task 4: Async / Await

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

async function showData() {
  try {
    const user = await getUser(1);
    console.log("User fetched");

    const posts = await getPosts(user.id);
    console.log("Posts fetched");

    const comments = await getComments(posts[0]);
    console.log("Comments fetched");

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error:", error);
  }
}

showData();
