window.onload = function() {
  const hamburger = document.getElementById('hamburger');

  hamburger.onclick = function() {
    let topNav = document.getElementById('myTopnav');
    if (topNav.className === 'responsive') {
      topNav.className = '';
    } else {
      topNav.className = 'responsive';
    }
  }

  const menuList = document.querySelectorAll('.menu-element');
  menuList.forEach(function(element) {
    element.addEventListener('click', function(event) {

      const elementLink = element.dataset.link;

      if (elementLink) {
        event.preventDefault();
        document.getElementById(elementLink).scrollIntoView({ behavior: 'smooth'});
      }
    });
  });

  let docWidth = $(document).width();
  const imageCount = $('.top-image').lenght;

  function el() {

  }

  const photoList = document.querySelectorAll('.portfolio-item');
  photoList.forEach(function(item) {
    item.addEventListener('click', function() {
  //    createPopup(item);
    });
  });

  window.addEventListener('click', function(e) {

  });
}

function createPopup(item) {
  let container = document.createElement('div');
  container.className = "popup-container";
  let popup = document.createElement('img');
  popup.className = "popup";
  popup.src = item.dataset.img;

  container.append(popup);
  document.body.append(container);
}
