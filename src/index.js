import "./styles.css";

document.getElementById("parent-list").addEventListener("click", function (e) {
  // e.target is the clicked element!
  //console.log(e);
  // If it was a list item
  if (e.target.tagName == "LI") {
    // List item found!  Output the ID!
    console.log(
      "List item ",
      e.target.id.replace("post-", ""),
      " was clicked!"
    );
  }
});
