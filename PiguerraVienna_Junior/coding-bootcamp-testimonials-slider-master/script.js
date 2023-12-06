const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const image = document.querySelector('.image');
const feedback = document.querySelector('.feedback');

const users = [
  {
    name: 'Kathryn Bernardo',
    role: 'Actress',
    feedback: '"Our lovestory began with respect and ended it with respect"',
    image: './images/kathryn1.jpg',
  },
  {
    name: 'Daniel Padilla',
    role: 'Actor',
    feedback: '"Thank you for dancing with me during my highs and thank you for singing<br>with me during my lows."',
    image: './images/daniel1.jpg',
  },
];

let slide = 0;

// Creating prev and next btn functions
const navigation = () => {
  // Check slide number
  if (slide > users.length - 1) {
    slide = 0;
  }

  image.innerHTML = `<img src="${users[slide].image}" alt="">`;

  feedback.innerHTML = `
    <img src="./images/pattern-quotes.svg" alt="">
    <p>${users[slide].feedback}</p>
    <h4 class="name">${users[slide].name} <span class="role">${users[slide].role}</span></h4>
  `;

  slide++;
};

// Initial navigation call
navigation();

prevBtn.addEventListener('click', navigation);
nextBtn.addEventListener('click', navigation);

/*
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const image=document.querySelector('.image')
const feedback=document.querySelector('.feedback');

const users=[
    {
        name:'Kathryn Bernardo',
        role:'Actres',
        feedback:'"Lorabjifhkjgjsbjajfjqbfjbmbqjhqfjbdnmbc',
        image:'./images/kathryn1.jpg"',
    },
    {
        name:'Daniel Padilla',
        role:'Actress',
        feedback:'Lorabjifhkjgjsbjajfjqbfjbmbqjhqfjbdnmbc',
        image:'/images/daniel.jpg'
    }
]  
let slide =0;
//cfeating prev and next btn fucn
const navigation=() => {
    //check slide number
    if(slide> users.length-1){
        slide=0;
    }
    image.innerHTML='<img src="${users[slide].image}" alt="">'

    feedback.innerHTML='<img src="./images/pattern-quotes.svg" alt="">'
    '<p>${users[slide].feedback}</p>'
    '<h4 class="name">${users[slide].name} <span class="role">${users[slide].role}</span></h4>';
    slide++; 
}
navigation();
prevBtn.addEventListener('click',navigation)
nextBtn.addEventListener('click',navigation)

*/