const userAction = async (path) => {
    try {
        let response = await fetch(`http://localhost:3000/${path}`);
        if (response && response.status !== 200) {
            throw new Error("Something wrong with the status code: " + response.status)
        } // reject response
        let data = await response.json();
        return data; // resolve
    } catch (e) {
        console.log('>>> Error: ' + e.message)
    }

};
const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);



// getAPI manager 
userAction('manager')
    .then(data => {
        var htmls = data?.map((manager) => {
            return `
            <div class="block-Manager manager-${manager.id}">
            <div class="block-img">
                <img src="${manager.avatar}" alt="">
            </div>
            <div class="responsibility">
                <h4>${manager.responsibility}</h4>
            </div>
            <div class="name">
                <h3>${manager.name}</h3>
            </div>
            <div class="describe">
                <p>${manager.describe}</p>
            </div>
            <div class="social">
                <ul>
                    <li><a href="#">IG</a></li>
                    <li><a href="#">TW</a></li>
                    <li><a href="#">LI</a></li>
                </ul>
            </div>
        </div>
        `;
        });
        const accountManager = document.querySelector('.accountManager');
        accountManager.innerHTML = htmls.join(""); 
    })
    .catch(err => {
        console.log(">>> Check error: " + err.message)
    })

// getAPI slider 
userAction('silder')
    .then(data => {
        var htmls = data?.map((silder) => {
            return `
            <li class="item-${silder.id}" key="index">
            <div class="block-Slider">
                <!-- img-block  -->
                <div class="slide-img">
                    <img src="${silder.img}" alt="1">
                </div>
                <!-- detail-block  -->
                <div class="detail-block">
                    <!-- info  -->
                    <div class="info">
                        <a href="#">${silder.name}</a>
                    </div>
                    <!-- year  -->
                    <p class="year">${silder.year}</p>
                </div>
            </div>
            </li>
        `;
        });
        var sliderBox = document.querySelector(".slider-box");
        sliderBox.innerHTML = htmls.join("");
    })
    .catch(err => {
        console.log(">>> Check error: " + err.message)
    })



// list-detail-left
userAction('introduce-list-1')
    .then(data => {
        var htmls = data?.map(list1 => {
            return `<div class="left">
            <div class="left-item item item">
                <i class="fal fa-plus"></i>
                <p>${list1.name}</p>
            </div>
            <div class="list-item-content">
                <p>
                ${list1.description}
                </p>
            </div>
        </div>`
        })

        var listDetailLeft = document.querySelector('.list-detail-left')
        listDetailLeft.innerHTML = htmls.join('')

        
        const itemsLeft = aa(".left-item");
        const itemsContent = aa(".list-item-content");
        

        console.log(itemsLeft, itemsContent)

        itemsLeft.forEach((item, index) => {
                const content = itemsContent[index];
            
                item.onclick = function () {
                  if (content.classList.contains("active")) {
                    content.classList.remove("active");
                  } else {
                    itemsContent.forEach((item) => {
                      item.classList.remove("active");
            
                    });
                    content.classList.add("active");
                  }
                };
              });
    })

    .catch(err => {
        console.log(">>> Check error: " + err.message)
    })

// list-detail-right
userAction('introduce-list-2')
    .then(data => {
        var htmls = data.map(list2 => {
            return `
            <div class="right ">
            <div class="right-item item">
                <i class="fal fa-plus"></i>
                <p>${list2.name}</p>
            </div>
            <div class="list-item-content list-item-content-Right">
                <p>${list2.description}
                </p>
            </div>
        </div>
        `;
        });

        var listDetailRight = document.querySelector('.list-detail-right')
        listDetailRight.innerHTML = htmls.join('')

        const itemsRight = aa(".right-item");
        const itemsContentRight = aa(".list-item-content-Right");

          itemsRight.forEach((item, index) => {
    const content = itemsContentRight[index];
    item.onclick = function () {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
      } else {
        itemsContentRight.forEach((item) => {
          item.classList.remove("active");
        });
        content.classList.add("active");
      }
    };
  });

       
    })
    .catch(err => {
        console.log(">>> Check error: " + err.message)
    })