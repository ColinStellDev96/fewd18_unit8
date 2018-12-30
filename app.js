const directory = document.getElementById('directory');

function checkStatus(response) {
    if(response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  
  function fetchData(url) {
    return fetch(url)
      .then(checkStatus)
      .then(res => res.json())
      .catch(error => console.log('Looks Like There Was A Problem', error))
  }

  