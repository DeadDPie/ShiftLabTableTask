const headers = [
  {
    Rank: "Rank",
    Title: "Title",
    Genres: "Genres",
    Episodes: "Episodes",
    Year: "Year",
  },
];
const myBD = [
  {
    Rank: 1,
    Title: "Attack on Titan",
    Genres: "Action Drama War",
    Episodes: "89",
    Year: "2014",
  },
  {
    Rank: 2,
    Title: "Fullmetal Alchemist: Brotherhood",
    Genres: "Adventure Drama Fantasy",
    Episodes: "64",
    Year: "2010",
  },

  {
    Rank: 3,
    Title: "Heavenly Delusion",
    Genres: "Adventure Thriller Sci-Fi",
    Episodes: "13",
    Year: "2023",
  },
  {
    Rank: 4,
    Title: "Death Note",
    Genres: "Supernatural Psychological Thriller",
    Episodes: "37",
    Year: "2006",
  },
];
const tableHeaders = document.getElementById("Headers");
const table = document.getElementById("myTable");
const submitBtn = document.getElementById("search-button");
const searchString = document.getElementById("search-input");

const buildHeaders = (data) => {
  tableHeaders.innerHTML += `<div class="column">
              <div class="header">${data.Rank}</div>
              <div class="header">${data.Title}</div>
              <div class="header">${data.Genres}</div>
              <div class="header">${data.Episodes}</div>
              <div class="header">${data.Year}</div>
              </div>
              `;
};
const buildTable = (data) => {
  table.innerHTML += `<div class="column">
              <div class="cell" data-label="Rank">${data.Rank}</div>
              <div class="cell" data-label="Title">${data.Title}</div>
              <div class="cell" data-label="Genres" id="search">${data.Genres}</div>
              <div class="cell" data-label="Episodes">${data.Episodes}</div>
              <div class="cell" data-label="Year">${data.Year}</div>
              </div>
              `;
};
headers.forEach(buildHeaders);
myBD.forEach(buildTable);

const performSearch = (event) => {
  const searchText = searchString.value.toLowerCase().trim();

  const cells = table.querySelectorAll(".cell[data-label='Genres']");
  if (
    searchString.value.length === 0 ||
    searchString.value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === ""
  ) {
    return;
  } else {
    event.preventDefault();
  }
  cells.forEach((cell) => cell.classList.remove("match"));

  let matchCount = 0;

  cells.forEach((cell) => {
    const cellText = cell.innerText.toLowerCase();

    if (cellText.includes(searchText)) {
      cell.classList.add("match");
      matchCount++;
    }
  });

  const matchCountDisplay = document.getElementById("match-count");

  matchCountDisplay.textContent =
    matchCount > 0
      ? "Matches found:  " + matchCount.toString()
      : "Nothing found";
};

submitBtn.addEventListener("click", performSearch);
