document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const serviceCards = document.querySelectorAll(".card");
  const categories = document.querySelectorAll(".category");
  const noResultsMessage = document.createElement("p");
  noResultsMessage.textContent = "No results found";
  noResultsMessage.style.display = "none";
  noResultsMessage.classList.add("no-results");
  document.body.appendChild(noResultsMessage);

  let debounceTimeout;

  const performSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    let hasResults = false;

    serviceCards.forEach((card) => {
      const cardText = card.innerText.toLowerCase();
      if (cardText.includes(lowerCaseQuery)) {
        card.style.display = "block";
        hasResults = true;
        highlightMatch(card, query);
      } else {
        card.style.display = "none";
      }
    });

    categories.forEach((category) => {
      const categoryText = category.innerText.toLowerCase();
      if (categoryText.includes(lowerCaseQuery)) {
        category.style.display = "flex";
        hasResults = true;
        highlightMatch(category, query);
      } else {
        category.style.display = "none";
      }
    });

    noResultsMessage.style.display = hasResults ? "none" : "block";
  };

  const highlightMatch = (element, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    element.innerHTML = element.innerText.replace(regex, `<mark>$1</mark>`);
  };

  searchInput.addEventListener("keyup", () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      const query = searchInput.value.trim();
      performSearch(query);
    }, 300);
  });
});
