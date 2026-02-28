const Search = document.querySelector(".search-icon");
const SearchScreen = document.querySelector(".off-screen-search")
    Search.addEventListener("click", () =>{
        Search.classList.toggle("active")
        SearchScreen.classList.toggle("active");
    })

$(function(){
    $('.mobilecategory').on('click',function(){
        var mobileId = $(this).attr('data-mobileId');
        $('#'+ mobileId).slideToggle(200);
    });
});

const hamburger = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".off-screen-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


  $(function() {

         $('.tab-panels .tabs li').mouseenter(function(){
             var $panel = $(this).closest('.tab-panels');
                 $panel.find('.tab li.active').removeClass('active');
                     $(this).addClass('active').siblings('li').css('color','lightgrey');
                             $(this).css('color','black');
                         $('.panel').hide();
             var panelToShow = $(this).attr('rel');
                 $('#'+panelToShow).show().css('display','flex').mouseleave(function(){
                     $('#'+panelToShow).hide();
                         $('.desktop').css('color','black')
             });
         });
    });


'use strict';

$(function(){

    function setupSlider(sliderElement,totalSlides){
    var currentSlide = 0;

                  function updateButtonColor(){
                        if(currentSlide === 0)
                                            {$(sliderElement).find('button.btnsL').css('color','grey').css('background-color','');
                                            $(sliderElement).find('button.btnsR').css('color','white').css('background-color','black');}
                                    else if (currentSlide === totalSlides -1)
                                            {$(sliderElement).find('button.btnsR').css('color','grey').css('background-color','');}
                                    else {$(sliderElement).find('button.btnsL').css('color','white').css('background-color','black');
                                        $(sliderElement).find('button.btnsR').css('color','white').css('background-color','black');}
                    }
                //configuration
                var width = 210;
                var animattionSpeed = 100;
                // CACHE DOM
    
                        $(sliderElement).find('button').click(function(e){
                            var btnS = $(this).attr('rel');
                            
                            if($(this).hasClass('btnsR'))
                                {if(currentSlide < totalSlides -1)
                                    {currentSlide++;
                                        $(btnS).animate({'margin-left':'-='+width},animattionSpeed);}} 
                            else if ($(this).hasClass('btnsL'))
                                {if(currentSlide > 0)
                                    {currentSlide--; 
                                        $(btnS).animate({'margin-left': '+='+width},animattionSpeed);}}
                        updateButtonColor();
                        });
                        updateButtonColor();
    }
    setupSlider('#productslider1',12);
    setupSlider('#productslider2',12);
});

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isVisible)
    })
})


fetch("test.json")
    .then(res => res.json())
    .then(data =>{
       users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const Image = card.querySelector("[data-image]")
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            const Price = card.querySelector("[data-cost]")
            Image.src = user.url
            header.textContent = user.name
            body.textContent = user.email
            Price.textContent = user.price
            userCardContainer.append(card)
            return{ name: user.name, email: user.email, element: card}
        })
    })