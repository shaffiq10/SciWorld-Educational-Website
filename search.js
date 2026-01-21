const pages = [
  { title: "Product Life Cycle", content: "carbon footprint carbon handprint microplastics product life cycle sustainability environment", link: "chapter3.html#c31" },
  { title: "Environmental Pollution", content: "air pollution water pollution bod biochemical oxygen demand effective microorganisms wpi", link: "chapter3.html#c32" },
  { title: "Environmental Conservation", content: "environmental conservation restoration negative emission technology carbon removal", link: "chapter3.html#c33" },
  { title: "Video Tutorial", content: "environmental sustainability tutorial video conservation", link: "chapter3.html#c34" },
  { title: "Chapter 1", content: "introduction science technology sustainability environment", link: "chapter1.html" },
  { title: "Chapter 2", content: "human sustainability social economic environment", link: "chapter2.html" },
  { title: "Quiz", content: "quiz assessment test questions", link: "quiz.html" },
  { title: "About Us", content: "about us information team", link: "about.html" }
];

function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsBox = document.getElementById("searchResults");

  resultsBox.innerHTML = "";

  if (input.length < 2) {
    resultsBox.style.display = "none";
    return;
  }

  const results = pages.filter(p =>
    p.title.toLowerCase().includes(input) || p.content.includes(input)
  );

  if (results.length === 0) {
    resultsBox.innerHTML = "<a>No result found</a>";
  } else {
    results.forEach(p => {
      resultsBox.innerHTML += `<a href="${p.link}">${p.title}</a>`;
    });
  }

  resultsBox.style.display = "block";
}
