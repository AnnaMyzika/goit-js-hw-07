const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgGallery = document.querySelector('#gallery');
imgGallery.classList.add('galerry-list');
console.log(imgGallery);

const items = images.map(image => {
    const imgList = document.createElement('li');
    const imgEl = document.createElement('img');
    imgList.classList.add('galerry-list-img');
    imgEl.src = image.url;
    imgEl.alt = image.alt;
    imgEl.width = 1200;

    imgList.append(imgEl);

    return imgList;
});

console.log(items);
imgGallery.append(...items);

// imgGallery.insertAdjacentHTML('beforebegin', images.map(img => `<li><img class='gallery-list-img' src='${img.url}' alt='${img.alt}'></li>`).join(''));


