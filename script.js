// Accordation for showing data below when clicked

// Hotels in Goa

// document.getElementById("show-more").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the default behavior of the anchor tag

//     // Show the full content and toggle button visibility
//     document.getElementById("content").style.display = "block";
//     document.getElementById("content-partial").style.display="none";
//     document.getElementById("show-more").style.display = "none";
//     document.getElementById("show-less").style.display = "block";
// });

// document.getElementById("show-less").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the default behavior of the anchor tag

//     // Hide the full content and toggle button visibility
//     document.getElementById("content").style.display = "none";
//     document.getElementById("content-partial").style.display="block";
//     document.getElementById("show-more").style.display = "flex";
//     document.getElementById("show-less").style.display = "none";
// });


///Goa Hotels and accommodation Sliding Image

const outerContainer = document.querySelector('.hotels-and-accommodation-viewpart');
const innerContainer = document.querySelector('.hotels-and-accommodation-details');
const pB = document.getElementById('hotel-left-icon');
const nB = document.getElementById('hotel-right-icon');
const boxWidth = innerContainer.querySelector('.hotels-accommodation').offsetWidth;
const containerWidth = outerContainer.clientWidth;

pB.addEventListener('click', () => {
    slide(-containerWidth);
});

nB.addEventListener('click', () => {
    slide(containerWidth);
});

function slide(distance) {
    const currentScroll = outerContainer.scrollLeft;
    const newScroll = currentScroll + distance;
    
    // To make it faster, adjust the duration to a smaller value
    const duration = 200; // Time in milliseconds (adjust as needed)

    let startTime;

    function animate(time) {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / duration;
        if (progress < 1) {
            outerContainer.scrollLeft = currentScroll + distance * progress;
            requestAnimationFrame(animate);
        } else {
            outerContainer.scrollLeft = newScroll;
        }
    }

    requestAnimationFrame(animate);
}

///Cheap place to stay in Goa


const outerContainerView = document.querySelector('.cheap-places-stay-viewpart');
const innerContainerView = document.querySelector('.cheap-places-stay-details');
const prevButtonView = document.getElementById('hotel-left-icon-cheap');
const nextButtonView = document.getElementById('hotel-right-icon-cheap');
const boxWidthView = innerContainerView.querySelector('.cheap-place-accommodation').offsetWidth;
const containerWidthView = outerContainerView.clientWidth;

prevButtonView.addEventListener('click', () => {
    slideView(-containerWidthView);
});

nextButtonView.addEventListener('click', () => {
    slideView(containerWidthView);
});

function slideView(distance) {
    const currentScroll = outerContainerView.scrollLeft;
    const newScroll = currentScroll + distance;
    
    // To make it faster, adjust the duration to a smaller value
    const duration = 200; // Time in milliseconds (adjust as needed)

    let startTime;

    function animateView(time) {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / duration;
        if (progress < 1) {
            outerContainerView.scrollLeft = currentScroll + distance * progress;
            requestAnimationFrame(animateView);
        } else {
            outerContainerView.scrollLeft = newScroll;
        }
    }

    requestAnimationFrame(animateView);
}




// const outerContainerView = document.querySelector('.cheap-places-stay-viewpart'); // Adjust the class name accordingly
// const prevButtonView = document.getElementById('hotel-left-icon-cheap');
// const nextButtonView = document.getElementById('hotel-right-icon-cheap');
// const boxWidthView = outerContainerView.querySelector('.box').offsetWidth;
// const containerWidthView = outerContainerView.clientWidth;

// prevButtonView.addEventListener('click', () => {
//     slideView(-containerWidthView);
// });

// nextButtonView.addEventListener('click', () => {
//     slideView(containerWidthView);
// });





///Accordian content


const accordionItems = document.querySelectorAll('.frequently-asked-questions-list');

accordionItems.forEach(item => {
    const header = item.querySelector('.frequently-asked-question');
    const content = item.querySelector('.answer-for-question');
    const dwnArrow = item.querySelector('.arrow-down-symbol');
    const upArrow = item.querySelector('.arrow-up-symbol');

    header.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            header.classList.add('question-clicked');
            upArrow.style.display = 'block';
            dwnArrow.style.display = 'none';
        } else {    
            content.style.display = 'none';
            header.classList.remove('question-clicked');
            upArrow.style.display = 'none';
            dwnArrow.style.display = 'block';
        }
    });

    document.getElementById("show-more-questions").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
    
        // Show the full content and toggle button visibility
        document.getElementById("hidden-questions").style.display = "block";
        document.getElementById("show-more-questions").style.display = "none";
        // document.getElementById("show-less").style.display = "block";
    });

});


///Search box


window.addEventListener('load', function() {
    const originalDiv = document.getElementById("fixed");
    const replacedDiv = document.getElementById("fixedTop");
    let isReplaced = false;
    let initialOffset = originalDiv.offsetTop;

    window.addEventListener('scroll', function() {
        const distanceFromTop = originalDiv.getBoundingClientRect().top;
        if (distanceFromTop <= 0 && !isReplaced) {
            originalDiv.style.display = "none";
            replacedDiv.style.display = "block";
            // replacedDiv.classList.add("sticky");
            replacedDiv.style.position="fixed";
            replacedDiv.style.top="0"; 
            isReplaced = true;
        } else if (window.scrollY <= initialOffset && isReplaced) {
            replacedDiv.style.display = "none";
            originalDiv.style.display = "block";
            isReplaced = false;
        }
    });

    window.addEventListener('resize', function() {
        initialOffset = isReplaced ? replacedDiv.offsetTop : originalDiv.offsetTop;
    });
});


//Drop down

// const dropdowns=document.querySelectorAll(".dropdown");
// dropdowns.forEach(dropitem => 
//     {
//         const select=dropitem.querySelector('.adults-and-rooms');
//         const selected=dropitem.querySelector('.selected');
//         // const caret=dropitem.querySelector('.caret');
//         const menu=dropitem.querySelector('.menu');
//         const options=dropitem.querySelectorAll('.menu li');
//         select.addEventListener('click',() =>
//         {
//             select.classList.toggle('select-clicked');
//             menu.classList.toggle('menu-open');
//         });
//         options.forEach(option =>
//             {
//                 option.addEventListener('click',() =>
//                 {
//                     selected.innerText=option.innerText;
//                     select.classList.remove('select-clicked');
//                     menu.classList.remove('menu-open');
//                     options.forEach(option =>
//                         {
//                             option.classList.remove('active');
//                         });
//                     option.classList.add('active');    
//                 });
//             });
//     });


//     function toggleDropdown() {
//         document.getElementById("myDropdown").classList.toggle("show");
//       }
      
//       function changeContent(content) {
//         document.getElementById("mainContent").innerText = content;
//       }
      
//       window.onclick = function(event) {
//         if (!event.target.matches('.dropbtn')) {
//           var dropdowns = document.getElementsByClassName("dropdown-content");
//           var i;
//           for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//               openDropdown.classList.remove('show');
//             }
//           }
//         }
//       };
      

///Show-more and show-less functionalities

function addToggleFunctionality(idPrefix) {
    const showMore = document.getElementById(`show-more${idPrefix}`);
    const showLess = document.getElementById(`show-less${idPrefix}`);
    const content = document.getElementById(`content${idPrefix}`);
    const contentPartial = document.getElementById(`content-partial${idPrefix}`);

    showMore.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        content.style.display = "block";
        contentPartial.style.display = "none";
        showMore.style.display = "none";
        showLess.style.display = "block";
    });

    showLess.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        content.style.display = "none";
        contentPartial.style.display = "block";
        showMore.style.display = "flex";
        showLess.style.display = "none";
    });
}


addToggleFunctionality("");
addToggleFunctionality("-1-1");
addToggleFunctionality("-1-2");
addToggleFunctionality("-1-3");
addToggleFunctionality("-2-1");
// addToggleFunctionality("-2-2");
addToggleFunctionality("-2-3");
addToggleFunctionality("-3-1");
addToggleFunctionality("-3-2");
addToggleFunctionality("-3-3");
addToggleFunctionality("-4-1");
addToggleFunctionality("-4-2");
addToggleFunctionality("-4-3");






// <!-- Set-3 -->

// <div class="hotels-and-accommodation-details" id="set1">
//     <div class="hotels-accommodation">
//         <div class="hotels-and-accommodation-image">
//             <a href="#">
//             <img class="hotel-image" src="">
//             </a>
//         </div>
//         <div class="place-rating-paras">
//             <div class="names-rating-reviews">
//                 <div class="names-rating">
//                     <a href="#">
//                             <div class="hotel-name"></div>
//                     </a>
//                     <div class="hotel-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <!-- <img src="star.png" class="star-icon-rating"> -->
//                     </div>
//                 </div>
//                 <div class="hotel-review">
//                     <div class="hotel-review-content">6.6 Good</div>
//                     <div class="hotel-total-review">Based on 772 reviews</div>
//                 </div>
//             </div>

//             <hr>

//             <div class="place-paras">
//                 <div id="content-partial">
//                     <p><p>
//                 </div>
//                 <div class="reviewer-full-content" style="display: none;" id="content">
//                     <p id="show-more-content">
//                     </p>
//                 </div>

//                 <div class="show-more-section">    

//                     <div class="show-more-button-section" id="show-more">
//                         <a class="show-more-button">Show more
//                             <div class="downarrow-container">
//                               <img class="downarrow" src="down-arrow.png">
//                             </div>  
//                         </a>
//                     </div>


//                     <div class="show-more-button-section" id="show-less" style="display: none;">
//                         <a class="show-more-button">Show less
//                             <div class="uparrow-container">
//                                 <img class="uparrow" src="up-arrow.png">
//                             </div>   
//                         </a>
//                     </div> 
//                 </div>
//             </div>
//             <div class="card-review-name">
//                 <span class="review-name">Rohan</span>
//                 <span class="review-country">,United States</span>
//             </div>
//         </div>
//     </div>


//     <!-- Hotels and accommodation-2 -->

//     <div class="hotels-accommodation">
//         <div class="hotels-and-accommodation-image">
//             <a href="#">
//             <img class="hotel-image" src="">
//             </a>
//         </div>
//         <div class="place-rating-paras">
//             <div class="names-rating-reviews">
//                 <div class="names-rating">
//                     <a href="#">
//                             <div class="hotel-name"></div>
//                     </a>
//                     <div class="hotel-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <!-- <img src="star.png" class="star-icon-rating"> -->
//                         <!-- <img src="star.png" class="star-icon-rating"> -->
//                     </div>
//                 </div>
//                 <div class="hotel-review">
//                     <div class="hotel-review-content">7.8 Very good</div>
//                     <div class="hotel-total-review">Based on 512 reviews</div>
//                 </div>
//             </div>

//             <hr>

//             <div class="place-paras">
//                 <p></p>
//                 <div class="show-more-section">
//                     <div class="reviewer-full-content" style="display: none;">
//                         <p id="show-more-content">
                
//                         </p>
//                     </div>

//                     <div class="show-more-button-section">
//                         <a class="show-more-button" id="show-more">Show more
//                             <div class="downarrow-container">
//                               <img class="downarrow" src="down-arrow.png">
//                             </div> 
//                         </a>

//                         <button class="show-more-button"  id="show-less" style="display: none;">Show more
//                             <div class="uparrow-container">
//                                 <img class="uparrow" src="up-arrow.png">
//                             </div>   
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div class="card-review-name">
//                 <span class="review-name">Parv</span>
//                 <span class="review-country">,India</span>
//             </div>
//         </div>
//     </div>


//     <!-- Hotels and accommodation-3 -->
//     <div class="hotels-accommodation">
//         <div class="hotels-and-accommodation-image">
//             <a href="#">
//             <img class="hotel-image" src="">
//             </a>
//         </div>
//         <div class="place-rating-paras">
//             <div class="names-rating-reviews">
//                 <div class="names-rating">
//                     <a href="#">
//                             <div class="hotel-name"></div>
//                     </a>
//                     <div class="hotel-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                         <img src="star.png" class="star-icon-rating">
//                     </div>
//                 </div>
//                 <div class="hotel-review">
//                     <div class="hotel-review-content">8.8 Excellent</div>
//                     <div class="hotel-total-review">Based on 718 reviews</div>
//                 </div>
//             </div>

//             <hr>

//             <div class="place-paras">
//                 <p><p>
//                 <div class="show-more-section">
//                     <div class="reviewer-full-content" style="display: none;">
//                         <p id="show-more-content">
                            
//                         </p>
//                     </div>

//                     <div class="show-more-button-section">
//                         <a class="show-more-button" id="show-more">Show more
//                             <div class="downarrow-container">
//                               <img class="downarrow" src="down-arrow.png">
//                             </div> 
//                         </a>

//                         <button class="show-more-button"  id="show-less" style="display: none;">Show more
//                             <div class="uparrow-container">
//                                 <img class="uparrow" src="up-arrow.png">
//                             </div>   
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div class="card-review-name">
//                 <span class="review-name">Pandurang</span>
//                 <span class="review-country">,India</span>
//             </div>
//         </div>
//     </div>


// </div>