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

  
searchInput.addEventListener("input", function () {
    fetch("http://www.omdbapi.com/?apikey=9bb94a8c&s=" + searchInput.value)
      .then((response) => {
        return response.json();
      })
  
      .then((data) => {
        // reset
        dataList.innerHTML = "";
        if (data.Search) {
        data.Search.forEach(function (item) {
          dataList.innerHTML += createItemHTML(item);
        });
      }else {
        dataList.innerHTML = "No Result"
      }
        
      })
  
      .catch((error) => {
        console.log(error);
        dataList.innerHTML = "Oh no. Our server. It's broken";
      });
  });