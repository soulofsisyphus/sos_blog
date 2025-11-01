<?php include "includes/header.php" ?>

  <!-- 📝 Blog Section -->
  <section class="blog-section">
    <h2>My <span class="neon">Journey Posts</span></h2>

    <!-- 🔍 Search Bar -->
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="Search posts...">
    </div>

    <!-- 💊 Filter Pills -->
    <div class="filter-pills">
      <button class="filter-btn active" data-category="all">All</button>
      <button class="filter-btn" data-category="Life">Life</button>
      <button class="filter-btn" data-category="Tech">Tech</button>
      <button class="filter-btn" data-category="Productivity">Productivity</button>
      <button class="filter-btn" data-category="Design">Design</button>
      <button class="filter-btn" data-category="Philosophy">Philosophy</button>
      <button class="filter-btn" data-category="Games">Games</button>
      <button class="filter-btn" data-category="Finance">Finance</button>
      <button class="filter-btn" data-category="The Truth About Porn">The Truth About Porn</button>



    </div>

    <!-- 📚 Blog Grid -->
    <div class="blog-grid" id="blogGrid">
      <!-- Posts will be dynamically injected here -->
    </div>
  </section>


   <!-- 🌙 Footer -->
<?php include "includes/footer.php" ?>
