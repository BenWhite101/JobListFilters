const fff = document.querySelector('filters-wrap');
let requestURL = 'https://musing-dubinsky-734d44.netlify.app/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const jobsList = request.response;
   

    populate(jobsList);
    
  }

  function populate(jsonObj){
    jsonObj.array.forEach(item => {
        console.log(item.company);
    });
  }