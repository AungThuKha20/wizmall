$(document).ready(function () {
  AOS.init();

  $(".all_cate_btn").click(function () {
    $(".all_cate_items").toggleClass("open");
  });

 

  // main banner swiper
  var swiper = new Swiper(".mainBanner", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next_main_banner",
      prevEl: ".swiper-button-prev_main_banner",
    },
    loop:"true",
  });

  var sec_01_swiper = new Swiper(".sec_01_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:"true",

    navigation: {
      nextEl: ".swiper-button-next_sec_01",
      prevEl: ".swiper-button-prev_sec_01",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      440: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
    },
  });
  var sec_03_swiper = new Swiper(".sec_03_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:"true",

    navigation: {
      nextEl: ".swiper-bu3tton-next_sec_03",
      prevEl: ".swiper-button-prev_sec_03",
    },  
 
  });
  var sec_02_swiper = new Swiper(".sec_02_swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next_sec_02",
      prevEl: ".swiper-button-prev_sec_02",
    },
  });
  var sec_03_swiper = new Swiper(".sec_03_swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    // loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".swiper-button-next_sec_03",
      prevEl: ".swiper-button-prev_sec_03",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,

      },
      470: {
        slidesPerView: 2,

      },
      620: {
        slidesPerView: 3,

      },
      900: {
        slidesPerView: 4,
      },
    },
  });
  var sec_06_swiper = new Swiper(".sec_06_swiper", {
    loop: true,
    slidesPerView: "6",
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next_sec_06",
      prevEl: ".swiper-button-prev_sec_06",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      470: {
        slidesPerView: 2,
      },
      620: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 4,
      },
    },
  });

  //
  const dropdownItems = document.querySelectorAll(".mb_dropdown");

  dropdownItems.forEach(function (item) {
    const button = item.querySelector("button");

    button.onclick = function () {
      dropdownItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    };
  });
  // collapse pd-review 
  document.querySelectorAll('.collapes_open_btn').forEach((openButton, index) => {
    const closeButton = document.querySelectorAll('.collapes_close_btn')[index];
    const collapeItem = document.querySelectorAll('.myOrderCollape_item')[index];
    const collapeFtPrice = document.querySelectorAll('.myOrdCollapeFtPrice')[index];
  
    if (openButton || closeButton) {
      openButton.addEventListener('click', function() {
        collapeItem.classList.add('open');
        collapeFtPrice.style.display = 'none';
      });
  
      closeButton.addEventListener('click', function() {
        collapeItem.classList.remove('open');
        collapeFtPrice.style.display = 'flex';
      });
    }
  });
  // sidebar
  const hamburgerButton = document.querySelector(".mb_hamburger button");
  const sidebarCloseButton = document.querySelector(".mb_sidebar_close_btn");
  const sidebar = document.querySelector(".mobile_menu_sideBar");

  if (hamburgerButton && sidebarCloseButton && sidebar) {
    hamburgerButton.addEventListener("click", function () {
      sidebar.classList.toggle("sidebar-open");

      if (sidebar.classList.contains("sidebar-open")) {
        document.body.classList.add("no-scroll");

        const noScrollWrapper = document.createElement("div");
        noScrollWrapper.className = "no-scroll-wrapper";
        document.body.appendChild(noScrollWrapper);
   
      } else {
        document.body.classList.remove("no-scroll");
        const noScrollWrapper = document.querySelector(".no-scroll-wrapper");
        if (noScrollWrapper) {
          noScrollWrapper.remove();
        }
     
      }
    });
    sidebarCloseButton.addEventListener("click", function () {
      sidebar.classList.remove("sidebar-open");
      document.body.classList.remove("no-scroll");
      const noScrollWrapper = document.querySelector(".no-scroll-wrapper");
      if (noScrollWrapper) {
        noScrollWrapper.remove();
      }

    });
  }
  //search_sidebar
  const searchSidebarOpenButton = document.querySelector(".mb_search_sidebar");
  const searchSidebarCloseButton = document.querySelector(".search_close_btn");
  const searchcloseTxt = document.querySelector(".search_close_text");
  const searchSidebar = document.querySelector(".search_sidebar");

  if (searchSidebarOpenButton && searchSidebarCloseButton && searchSidebar) {
    searchSidebarOpenButton.onclick = function () {
      searchSidebar.style.display = "block";
      document.body.classList.add("no-scroll");

      const noScrollWrapper = document.createElement("div");
      noScrollWrapper.className = "no-scroll-wrapper";
      document.body.appendChild(noScrollWrapper);
    };

    searchSidebarCloseButton.onclick = function () {
      searchSidebar.style.display = "none";
      document.body.classList.remove("no-scroll");

      const noScrollWrapper = document.querySelector(".no-scroll-wrapper");
      if (noScrollWrapper) {
        noScrollWrapper.remove();
      }
    };
    searchcloseTxt.onclick = function () {
      searchSidebar.style.display = "none";
      document.body.classList.remove("no-scroll");

      const noScrollWrapper = document.querySelector(".no-scroll-wrapper");
      if (noScrollWrapper) {
        noScrollWrapper.remove();
      }
    };
  }
  //search suggestions 
  document.getElementById('search_input').addEventListener('focus', function() {
    document.getElementById('search_suggestions').style.display = 'block';
  });

  document.getElementById('close_suggestions').addEventListener('click', function() {
    document.getElementById('search_suggestions').style.display = 'none';
  });
  document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.head_search').contains(event.target);
    if (!isClickInside) {
      document.getElementById('search_suggestions').style.display = 'none';
    }
  });
  document.getElementById('search_input').addEventListener('click', function(event) {
    event.stopPropagation();
  });
  //product detail swiper
  var swiperDetail2 = new Swiper(".mydetail_Swiper2", {
    spaceBetween: 0,
    slidesPerView: 6,
    allowTouchMove: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var swiperDetail1 = new Swiper(".mydetail_Swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    speed: 300,
    loop: true,
    allowTouchMove: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiperDetail2,
    },
    breakpoints: {
      767: {
        autoplay: false,
        speed: 10,
        allowTouchMove: false,
      },
    },
  });
  //myDetail_review_swiper 
  var swiper_rw = new Swiper(".mySwiper_rw", {
    loop: true,
    spaceBetween: 1,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper_rw2 = new Swiper(".mySwiper_rw2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween:400,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper_rw,
    },
  });
      //quick_menu
      const quick_menu = document.querySelector(".quick_menu");
      const quick_menuOnBtn = document.getElementById("quick_menu_on_btn");
    
      quick_menuOnBtn.onclick = () => {
        quick_menu.classList.toggle("quick_menu_off");
      };
  //pd_detail_accordion
  const accordionButtons = document.querySelectorAll(
    ".prd_detail_accordion_btn"
  );
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const currentItems = document.querySelector(
        '.pd_accordion_items[style*="display: table-row;"]'
      );
      const nextRow = this.parentElement.parentElement.nextElementSibling;

      if (currentItems && currentItems !== nextRow) {
        currentItems.style.display = "none";
      }

      nextRow.style.display =
        nextRow.style.display === "table-row" ? "none" : "table-row";
    });
  });
  //
  var modal = document.querySelector(".pd_detail_swiper_gp");
var closeBtn = document.querySelector(".close");

document.querySelectorAll('.modal-trigger').forEach(function(element) {
   if(element) {
    element.onclick = function(event) {
      event.preventDefault();
      modal.style.display = "flex";
      document.body.classList.add("no-scroll2");

      const noScrollWrapper = document.createElement("div");
      noScrollWrapper.className = "no-scroll-wrapper";
      document.body.appendChild(noScrollWrapper);
  }
   }
});

if(closeBtn){
  closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll2");
    const noScrollWrapper = document.querySelector(".no-scroll-wrapper");
    if (noScrollWrapper) {
        noScrollWrapper.remove();
    }
}
}

if(window) {
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
        const noScrollWrapper = document.querySelector(".no-scroll-wrapper");
        if (noScrollWrapper) {
            noScrollWrapper.remove();
        }
    }
}
}
  // text slide 
  const prevButton = document.getElementById("pre_txt");
  const nextButton = document.getElementById("next_txt");
  const texts = document.querySelectorAll(".below_txt h1");
  let currentIndex = 0;
  const intervalTime = 2000;

  function showText(index) {
    texts.forEach((text, idx) => {
      text.classList.toggle("hidden_text", idx !== index);
      text.classList.toggle("current_text", idx === index);
    });
  }

  function nextText() {
    currentIndex = (currentIndex + 1) % texts.length;
    showText(currentIndex);
  }

  function prevText() {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    showText(currentIndex);
  }

  if(nextButton || prevButton){
    nextButton.addEventListener("click", nextText);
    prevButton.addEventListener("click", prevText);
  }


  showText(currentIndex);

  setInterval(nextText, intervalTime);
   // counting  
  
  // sub_quick menu at scroll to top gp
  function toggleQuickMenu() {
    var subQuickMenu = document.querySelector('.sub_quick_menu');
    var quickMenuBtn = document.querySelector('.fixed_quick_menu_btn');

    if (subQuickMenu.style.bottom === '70px') {
      subQuickMenu.style.bottom = '-300px';
      subQuickMenu.style.opacity = '0';
      quickMenuBtn.classList.remove('active');
      const noScrollWrapper = document.querySelector('.no-scroll-wrapper');
      if (noScrollWrapper) {
        noScrollWrapper.remove();
      }
    } else {
      subQuickMenu.style.bottom = '70px';
      subQuickMenu.style.opacity = '1';
      quickMenuBtn.classList.add('active');

      const noScrollWrapper = document.createElement('div');
      noScrollWrapper.className = 'no-scroll-wrapper';
      document.body.appendChild(noScrollWrapper);
    }
  }

  document.querySelector('.fixed_quick_menu_btn').addEventListener('click', toggleQuickMenu);
//scroll to top gp 
  
  window.addEventListener('scroll', function() {
    var scrollTopGp = document.querySelector('.scroll_top_gp');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollPosition >= window.innerHeight * 0.01) {
      scrollTopGp.style.bottom = '20px';
    } else {
      scrollTopGp.style.bottom = '-100vh';
    }
    // scroll to top 
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);
  });
 
})

// hide_show radio
function hideShow(x) {
  if (x == 2) {
    document.querySelector(".tax_body1").style.display = "block";
    document.querySelector(".tax_body").style.display = "none";
  } else if (x == 1) {
    document.querySelector(".tax_body").style.display = "block";
    document.querySelector(".tax_body1").style.display = "none";
  } else {
    document.querySelector(".tax_body").style.display = "none";
    document.querySelector(".tax_body1").style.display = "none";
    return;
  }
}
function incrementCount(selector) {
  console.log(selector);
  let selectedEl = document.querySelector(`.input_number${selector}`);
  console.log(selectedEl);
  if (Number(selectedEl.innerHTML) >= 1) {
    selectedEl.innerHTML = Number(selectedEl.innerHTML) + 1;
  } else {
    selectedEl.innerHTML = 1; 
  }
  console.log(selectedEl.innerHTML);
}
function decrementCount(selector) {
  let selectedEl = document.querySelector(`.input_number${selector}`);
  console.log(selectedEl);

  if (Number(selectedEl.innerHTML) >= 1) {
    selectedEl.innerHTML = Number(selectedEl.innerHTML) - 1;
  }
  if (Number(selectedEl.innerHTML) < 1) {
    selectedEl.innerHTML = 1;
  }
}






