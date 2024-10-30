document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const items = document.querySelectorAll(".card, .category");
  const noResultsMessage = document.createElement("p");
  noResultsMessage.textContent = "No results found";
  noResultsMessage.classList.add("no-results");
  noResultsMessage.style.display = "none";
  document.body.appendChild(noResultsMessage);

  let debounceTimeout;

  const performSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    let hasResults = false;

    items.forEach((item) => {
      if (item.innerText.toLowerCase().includes(lowerCaseQuery)) {
        item.style.display = "block";
        hasResults = true;
      } else {
        item.style.display = "none";
      }
    });

    noResultsMessage.style.display = hasResults ? "none" : "block";
  };

  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      performSearch(searchInput.value.trim());
    }, 300);
  });
});
