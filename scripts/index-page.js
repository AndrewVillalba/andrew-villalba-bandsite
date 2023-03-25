const comments = [
    {name: `Connor Walton`, date: `02/17/2021`,
     text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.`},
    {name: `Emilie Beach`, date: `01/09/2021`, 
    text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.`},
    {name: `Miles Acosta`, date: `12/20/2020`, 
    text: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`}
]

const commentContainer = document.querySelector('.comment-container')

function createCard(obj) {

    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');
    commentContainer.appendChild(commentCard);

    const commentCardImg = document.createElement('div');
    commentCardImg.classList.add('comment-card__img');
    commentCard.appendChild(commentCardImg);

    const commentCardInfo = document.createElement('div');
    commentCardInfo.classList.add('comment-card__info');
    commentCard.appendChild(commentCardInfo);

    const commentCardInfoTop = document.createElement('div');
    commentCardInfoTop.classList.add('comment-card__info-top');
    commentCardInfo.appendChild(commentCardInfoTop);

    const commentCardInfoName = document.createElement('h5');
    commentCardInfoName.classList.add('comment-card__info-name');
    commentCardInfoName.innerText = obj.name;
    commentCardInfoTop.appendChild(commentCardInfoName);

    const commentCardInfoDate = document.createElement(`p`);
    commentCardInfoDate.classList.add('comment-card__info-date');
    commentCardInfoDate.innerText = obj.date;
    commentCardInfoTop.appendChild(commentCardInfoDate);

    const commentCardInfoText = document.createElement(`p`);
    commentCardInfoText.classList.add('comment-card__info-text');
    commentCardInfoText.innerText = obj.text;
    commentCardInfo.appendChild(commentCardInfoText);
} 

// comments.forEach(comment => {
//     displayComment(comment)
// })


// const inputName = document.querySelector('.input-wrapper__name');
// const inputText = document.querySelector('.input-wrapper__text');
// const inputTest = document.querySelector('.input-wrapper__submit');

// function submitComment(e) {
//     e.preventDefault();

//     const commentCard = document.createElement('div');
//     commentCard.classList.add('comment-card');
//     commentContainer.appendChild(commentCard);

//     const commentCardImg = document.createElement('div');
//     commentCardImg.classList.add('comment-card__img');
//     commentCard.appendChild(commentCardImg);

//     const commentCardInfo = document.createElement('div');
//     commentCardInfo.classList.add('comment-card__info');
//     commentCard.appendChild(commentCardInfo);

//     const commentCardInfoTop = document.createElement('div');
//     commentCardInfoTop.classList.add('comment-card__info-top');
//     commentCardInfo.appendChild(commentCardInfoTop);

//     const commentCardInfoName = document.createElement('h5');
//     commentCardInfoName.classList.add('comment-card__info-name');
//     commentCardInfoName.innerText = inputName.value;
//     commentCardInfoTop.appendChild(commentCardInfoName);

//     const commentCardInfoDate = document.createElement(`p`);
//     commentCardInfoDate.classList.add('comment-card__info-date');
//     commentCardInfoDate.innerText = obj.date;
//     commentCardInfoTop.appendChild(commentCardInfoDate);

//     const commentCardInfoText = document.createElement(`p`);
//     commentCardInfoText.classList.add('comment-card__info-text');
//     commentCardInfoText.innerText = inputText.value;
//     commentCardInfo.appendChild(commentCardInfoText);

//     return commentCard
// }

// inputSubmit.addEventListener(`submit`, submitComment)

// function displayCommentsTwo(comments) {

    
//     comments.forEach((comment)=>{
//         displayComment(comment)
//     });
// }

// comments.forEach((comment)=>{
//     createCard(comment);
// });



function renderComments(comments) {
    commentContainer.innerHTML = "";
    comments.forEach((comment)=>{
        createCard(comment);
    });
}



function submitComment(e){
    e.preventDefault();

    const formSubmit = {
        name: e.target.name.value, 
        date: new Date().toLocaleDateString("en-US"),
        text: e.target.text.value, 
    };
    
    comments.unshift(formSubmit);
    renderComments(comments)
}

const inputSubmit = document.querySelector(`.input-wrapper__inputs`);

inputSubmit.addEventListener('submit', submitComment);
renderComments(comments);