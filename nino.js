var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Khai báo biến mục Slideshow
const btnNext = $('.next_slide');
const btnPrev = $('.prev_slide');
const btnNav = $('.btn_nav');


// Khai báo biến chế độ Mobile
const navBoxEng = $('.nav_mobile_box_english');
const navBoxViet = $('.nav_mobile_box_vietnamese');

// Khai báo biến xử lý thay đổi ngôn ngữ
    // English Version
const headerEnglishHtml = $('.header_english_ver');
const serviceEnglishHtml = $('.service_english_ver');
const aboutEnglishHtml = $('.about_english_ver');
const tipsEnglishHtml = $('.tips_english_ver');
const footerEnglishHtml = $('.footer_english_ver');
    //  VietNamese Version
const headerVietnameseHtml = $('.header_vietnamese_ver');
const serviceVietnameseHtml = $('.service_vietnamese_ver');
const aboutVietnameseHtml = $('.about_vietnamese_ver');
const tipsVietnameseHtml = $('.tips_vietnamese_ver');
const footerVietnameseHtml = $('.footer_vietnamese_ver');
    // Buttons change
const btnViet = $('.lang_vi');
const btnEng = $('.lang_en');
//  Khai báo biến video mode
const video =$('#video')
const btnMp4 = $('.btn_play_video');

const ninospa = {
    currentIndex: 0,
    

    slides : [
        {
            image: './asset/imgs/slide_show/slide1.jpg',
            title: 'This is title for the picture 1'
        },
        {
            image: './asset/imgs/slide_show/slide2.jpg',
            title: 'This is title for the picture 2'
        },
        {
            image: './asset/imgs/slide_show/slide3.jpg',
            title: 'This is title for the picture 3'
        },
        {
            image: './asset/imgs/slide_show/slide4.jpg',
            title: 'This is title for the picture 4'
        },
        {
            image: './asset/imgs/slide_show/slide5.jpg',
            title: 'This is title for the picture 5'
        },
        {
            image: './asset/imgs/slide_show/slide7.jpg',
            title: 'This is title for the picture 6'
        },
       
    ],
    render : function () {
        const htmls = this.slides.map((slide,index) => {
            return `
        <div class="slide" data-index="${index}"
            style="background-image: url(${slide.image})">
            <p class="title_slide">${slide.title}</p>
        </div>
            `
        });
        $('.slide_show').innerHTML = htmls.join('');
        
    },
    renderActiveFirstslide: function () {
        const slideInlist = $$('.slide');
        slideInlist[0].classList.add('active')
    },
    handleEvent : function(){
        // Handle nextSlides
        const _this = this
        btnNext.onclick = function () {
            _this.nextSlides();
            _this.activeSlide();
            
        };
        btnPrev.onclick = function () {
            _this.prevSlides();
            _this.activeSlide();
            
        };
        // handle nav mobile
        btnNav.onclick = function () {
            navBoxEng.classList.toggle('active_box')
            navBoxViet.classList.toggle('active_box')
        };
        // Handle change language  
        // Không thể innerHTML 2 lần (đưa inner 2 lần) trên một element
        // Không thể Handle Event 2 element chung 1 class (ví dụ phần Header ỏ Nav)
        //  Vậy nên đối với Element dùng để lắng nghe sự kiện thì
        // tách ra ngoài (không để trùng )
        btnEng.onclick = function () {
                headerVietnameseHtml.classList.add('off');
                serviceVietnameseHtml.classList.add('off');
                aboutVietnameseHtml.classList.add('off'); 
                serviceVietnameseHtml.classList.add('off');
                tipsVietnameseHtml.classList.add('off');
                footerVietnameseHtml.classList.add('off');
                btnEng.classList.add('active_btn')

                headerEnglishHtml.classList.remove('off');
                serviceEnglishHtml.classList.remove('off');
                aboutEnglishHtml.classList.remove('off'); 
                serviceEnglishHtml.classList.remove('off');
                tipsEnglishHtml.classList.remove('off');
                footerEnglishHtml.classList.remove('off');
                btnViet.classList.remove('active_btn')
        };
        btnViet.onclick = function () {     
                headerEnglishHtml.classList.add('off');
                serviceEnglishHtml.classList.add('off');
                aboutEnglishHtml.classList.add('off'); 
                serviceEnglishHtml.classList.add('off');
                tipsEnglishHtml.classList.add('off');
                footerEnglishHtml.classList.add('off');
                btnViet.classList.add('active_btn')

                headerVietnameseHtml.classList.remove('off');
                serviceVietnameseHtml.classList.remove('off');
                aboutVietnameseHtml.classList.remove('off'); 
                serviceVietnameseHtml.classList.remove('off');
                tipsVietnameseHtml.classList.remove('off');
                footerVietnameseHtml.classList.remove('off');
                btnEng.classList.remove('active_btn')
        };
        btnMp4.onclick = function () {
            console.log(video);
            video.play()
        };
    },
    autoNextslide: function () {
        setInterval(() => {
            this.nextSlides();
            this.activeSlide();},5000)
    },
    activeSlide : function(){
        const slideInlist =$$('.slide');
        const slideActive = $('.slide.active');
        slideActive.classList.remove('active');
        slideInlist[this.currentIndex].classList.add('active')
    },
    nextSlides: function () {
        this.currentIndex++
        if (this.currentIndex >= this.slides.length) {
            this.currentIndex = 0
        }
    },
    prevSlides: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.slides.length - 1
        }
    },
    start: function(){
        this.render();
        this.renderActiveFirstslide();
        this.handleEvent();
        this.autoNextslide();
    },
    // handle navigator
    // btnNav.onclick = function () {
    //     navBox.classList.toggle('flex')
    // }
    
}
ninospa.start();