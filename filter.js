const filtersWrap = document.getElementById('filters-wrap');
let requestURL = 'https://musing-dubinsky-734d44.netlify.app/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
    const jobsListJ = request.response;
    const jobsList = JSON.parse(jobsListJ);

    const pokeEl = document.createElement('div');

    let main = "";

    populate(jobsList);

    function populate(jsonObj){
        jsonObj.forEach(item => {
            /* START FOREACH */
            console.log(item.new);
            let id = item.id;
            let company = item.company;
            let logoUrl = item.logo;

            let isNew = item.new;
            let isNewText = "";
            if (isNew = true) {
                let isNewText = "<span class='badge new'>New</span>";
            }

            let isFeatured = item.featured;
            let isFeaturedText = "";
            if (isFeatured = true) {
                let isFeaturedText = "<span class='badge featured'>Featured</span>";
            }

            let position = item.position;
            let role = item.role;
            let level = item.level;
            let postedAt = item.postedAt;
            let contract = item.contract;
            let location = item.location;

            let tools = item.tools;
            let languages = item.languages.concat(tools);
                let allLang = "";
                item.languages.forEach(item => {
                    allLang += `<button>${item}</button>`;
                });



            

             main += 
             `
                <div class="block">
                <div class="wrap">

                    <div class="left">
                    <img src="${logoUrl}" alt="${logoUrl} Logo">
                    </div>
                    <div class="mid">
                    <div class="top">
                        <span class="company">${company}</span>
                        <span class="badges">
                            ${isNewText}
                            ${isFeaturedText}
                        </span>
                    </div>
                    <h6>${position}</h6>
                    <div class="bottom">
                        <span>${postedAt} - ${contract} - ${location}</span>
                    </div>
                    </div>
                    <div class="right">
                        <div class="buttons">
                            ${allLang}
                        </div>
                    </div>

                </div>
                </div>

             `   






            /* END FOREACH */
        });

        
      }

      filtersWrap.innerHTML = main;
      //filtersWrap.appendChild(pokeEl);

  }

  