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
        jsonObj.forEach(item => {
            /* START FOREACH */

            console.log(item.company);
            
            let id = item.id;
            let company = item.company;
            let logoUrl = item.logo;
            let isNew = item.new;
            let isFeatured = item.featured;
            let position = item.position;
            let role = item.role;
            let level = item.level;
            let postedAt = item.postedAt;
            let contract = item.contract;
            let location = item.location;

            

            let languages = item.languages;
            let allLang = "";

            item.languages.forEach(item => {
                
                allLang += `<button>${item}</button>`;
            });
            console.log(allLang);

            let tools = item.tools;

            //"id": 1,
            //"company": "Photosnap",
            //"logo": "./images/photosnap.svg",
            //"new": true,
            //"featured": true,
            //"position": "Senior Frontend Developer",
            //"role": "Frontend",
            //"level": "Senior",
            //"postedAt": "1d ago",
            //"contract": "Full Time",
            //"location": "USA Only",
            //"languages": ["HTML", "CSS", "JavaScript"],
            //"tools": []








            /* END FOREACH */
        });
      }
    
  }

  