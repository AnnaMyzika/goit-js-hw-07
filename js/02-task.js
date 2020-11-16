const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const elem1 = document.createElement('li');
// elem1.textContent = 'Картошка';

// const elem2 = document.createElement('li');
// elem2.textContent = 'Грибы';

// const elem3 = document.createElement('li');
// elem3.textContent = 'Чеснок';

// const elem4 = document.createElement('li');
// elem4.textContent = 'Помидоры';

// const elem5 = document.createElement('li');
// elem5.textContent = 'Зелень';

// const elem6 = document.createElement('li');
// elem6.textContent = 'Приправы';

// const ulList = document.querySelector('#ingredients')
// ulList.append(elem1, elem2, elem3, elem4, elem5, elem6);

//  console.log(ulList);


const createLi = item => {
  const liRef = document.createElement('li');
  liRef.textContent = item;

  return liRef;
};

const listArray = ingredients.map(ingridient => createLi(ingridient));

const ulListRef = document.querySelector('#ingredients');
ulListRef.append(...listArray);
