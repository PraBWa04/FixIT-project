document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      }
    }
  });
});
