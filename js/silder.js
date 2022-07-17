setTimeout(() => {
    $(document).ready(function () {
        $("#autoWidth").lightSlider({
            autoWidth: true,
            loop: true,
            onSliderLoad: function () {
                $("#autoWidth").removeClass("cS-hidden");
            },
        });
    });
}, 100)

// var silderrApi = "http://localhost:3000/silder";


// async function getSlider(callback) {
//     await fetch(silderrApi)
//     .then((response) => response.json())
//     .then(callback)
// }
// console.log(getSlider())

// function renderSlider(silders) {
//     var sliderBox = document.querySelector('.slider-box');
//     var htmls = silders.map((silder, index) => {
//         return `
//         <li class="item-${silder.id}" key="index">
//         <div class="block-Slider">
//             <!-- img-block  -->
//             <div class="slide-img">
//                 <img src="${silder.img}" alt="1">
//             </div>
//             <!-- detail-block  -->
//             <div class="detail-block">
//                 <!-- info  -->
//                 <div class="info">
//                     <a href="#">${silder.name}</a>
//                 </div>
//                 <!-- year  -->
//                 <p class="year">${silder.year}</p>
//             </div>
//         </div>
//     </li>
//         `;
//     });
//     sliderBox.innerHTML = htmls.join("");
// }

// function startSlider() {
//     getSlider(renderSlider);
// }
// startSlider();

