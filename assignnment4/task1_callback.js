// Task 1: Understanding Callbacks

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Ram" });
  }, 2000);
}

getUser(1, (user) => {
  console.log("User name:", user.name);
});
