const blogGrid = document.getElementById("blogGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
let postsData = [];

// 🔄 Fetch Posts from JSON
fetch("assets/data/posts.json")
  .then(res => res.json())
  .then(data => {
    postsData = data.posts;
    displayPosts(postsData);
  })
  .catch(err => console.error("Error loading posts:", err));

// 🧩 Display Posts
function displayPosts(posts) {
  blogGrid.innerHTML = "";

  if (posts.length === 0) {
    blogGrid.innerHTML = `<p class="no-results">No posts found.</p>`;
    return;
  }

  posts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("blog-card", "fade-in");
    card.setAttribute("data-category", post.category.toLowerCase());

    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="blog-image">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a href="post.php?id=${post.id}" class="btn-glow">Read More</a>
    `;
    blogGrid.appendChild(card);
  });
}

// 🔍 Search Filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = postsData.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query) ||
    post.category.toLowerCase().includes(query)
  );
  displayPosts(filtered);
});

// 💊 Category Filter
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    if (category === "all") {
      displayPosts(postsData);
    } else {
      const filtered = postsData.filter(
        post => post.category.toLowerCase() === category.toLowerCase()
      );
      displayPosts(filtered);
    }
  });
});
