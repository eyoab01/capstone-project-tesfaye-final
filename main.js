const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger-close");
const navMenu = document.querySelector(".hidden-menu");
const navLinks = document.querySelectorAll(".hidden-list");

hamburgerClose.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach((ele) => ele.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));

/*popup*/

const Project = [
  {
    
    img: './images/img-4.png',
    header: 'Multi-Post Stories',
    lists: ['CANOPY', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    img: './images/img-2.png',
    header: 'Facebook 360',
    lists: ['FACEBOOK', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    img: './images/img-3.png',
    header: 'Uber Navigations',
    lists: ['UBER', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 3,
    img: './images/img-5.png',
    header: 'Multi-Post Stories',
    lists: ['CANOPY', 'Back End', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    img: './images/img-7.png',
    header: 'Multi-Post Stories',
    lists: ['FACEBOOK', 'FULL Stack Dev', '2015'],
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,',
    plang: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
];


    const close = document.querySelector('#popup > span');
    const PopUp = document.querySelector('#popup-main');
    const cards = document.querySelectorAll('.card a');

 close.addEventListener('click', () => {
   PopUp.classList.toggle('hidden');
 }); 

const proPopup = ({
  img, header, lists, paragraph, plang,
}) => {
  const pohead = document.querySelector('#popup > h2');
  const Polist = document.querySelectorAll('#popup-main ul > li');
  const Poimg = document.querySelector('#pop-image > img');
  const Potext = document.querySelector('#detail-pop > p');
  const Pomenu = document.querySelector('#detail-pop menu');

  pohead.innerHTML = header;
  Potext.innerHTML = paragraph;
  Poimg.src = img;
  Polist.forEach((ele, i) => { ele.innerHTML = lists[i]; });
  Pomenu.innerHTML = '';
  plang.forEach((ele) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ele;
    Pomenu.appendChild(listItem);
  });
  PopUp.classList.toggle('hidden');
};

cards.forEach((ele, i) => {
  ele.addEventListener('click', () => {
    proPopup(Project[i]);
  });
});

/**********************/
const contactF = document.forms[0];
const emailAdd = contactF.elements[1];
const submit = document.querySelector('button[type=submit]');
const message = document.querySelector('form > span');

submit.addEventListener('click', (event) => {
  const { value } = emailAdd;
  const lowercase = value.toLowerCase();
  if (value !== lowercase) {
    event.preventDefault();
    message.style.color = '#ff0000';
    message.innerHTML = 'your email address should be in Lowercase.';
  }
});