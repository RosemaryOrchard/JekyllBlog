(function () {
  var searchTerm = getQueryVariable("query");
  if (searchTerm) {
    document.getElementById("search-box").value = searchTerm;
  }

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById("search-results");

    if (results.length) {
      var appendString = "";

      for (var i = 0; i < results.length; i++) {
        var item = store[results[i].ref];
        appendString +=
          '<div><a href="' + item.url + '"><h3>' + item.title + "</h3></a>";
        appendString += item.excerpt + "...</p></div>";
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = "<span>No results found</span>";
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
      }
    }
  }

  function searchError() {
    var searchError = document.getElementById("search-error");

    searchError.innerHTML = `Sorry, something went wrong! Try using <a href="https://duckduckgo.com/?q=${encodeURIComponent(
      searchTerm
    )}+site%https%3A%2F%2Frosemaryorchard.com">DuckDuckGo</a> or <a href="https://www.google.com/search?q=${encodeURIComponent(
      searchTerm
    )}+site%https%3A%2F%2Frosemaryorchard.com">Google</a> and putting <code>site:rosemaryorchard.com</code> after your search.`;
  }

  function getPostData() {
    var url = "search_data.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
      var status = xhr.status;
      if (status === 200) {
        runSearch(xhr.response);
      } else {
        searchError();
      }
    };
    xhr.send();
  }

  function runSearch(postData) {
    let idx = lunr(function () {
      this.field("id");
      this.field("title", { boost: 10 });
      this.field("tags", {boost: 5});
      this.field("categories");
      this.field("content", {boost: 5});
      this.field("excerpt", {boost: 2});

      postData.forEach(function (post) {
        this.add(post);
      }, this);
    });

    if (searchTerm) {
      document.getElementById("search-box").setAttribute("value", searchTerm);

      var results = idx.search(searchTerm);
      displaySearchResults(results, window.store);
    }
  }

  getPostData();
})();
