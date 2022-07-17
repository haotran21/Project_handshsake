const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);

const itemsLeft = aa(".left-item");
const itemsContent = aa(".list-item-content");

const itemsRight = aa(".right-item");
const itemsContentRight = aa(".list-item-content-Right");
// console.log(itemsLeft)
console.log(itemsContentRight)

function start() {
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

}


start();



