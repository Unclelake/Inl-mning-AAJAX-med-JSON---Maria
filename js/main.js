let searchInput = document.getElementById("search-input");
let dataList = document.getElementById("data-list");

function createItemHTML(item) {
    const html = `<li>
        <h1>Title: ${item.Title}</h1>
        <h2>Year: ${item.Year}</h2>
        
        <img src="${item.Poster}" />
     </li>`;
  
    return html;
  }

  