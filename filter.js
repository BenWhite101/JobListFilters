const fff = document.querySelector('filters-wrap');
let requestURL = 'https://musing-dubinsky-734d44.netlify.app/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
    const jobsListJ = request.response;
    const jobsList = JSON.parse(jobsListJ);

    populate(jobsList);

    function populate(jsonObj){
        jsonObj.array.forEach(item => {
            console.log(item.company);
        });
      }
    
  }

  