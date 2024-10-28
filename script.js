document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const serviceCards = document.querySelectorAll(".card");
  const categories = document.querySelectorAll(".category");

  const performSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();

    serviceCards.forEach((card) => {
      const cardText = card.innerText.toLowerCase();
      if (cardText.includes(lowerCaseQuery)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    categories.forEach((category) => {
      const categoryText = category.innerText.toLowerCase();
      if (categoryText.includes(lowerCaseQuery)) {
        category.style.display = "flex";
      } else {
        category.style.display = "none";
      }
    });
  };

  searchInput.addEventListener("keyup", (event) => {
    const query = searchInput.value.trim();
    performSearch(query);
  });
});
