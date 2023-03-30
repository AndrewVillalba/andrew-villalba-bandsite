const api = "https://project-1-api.herokuapp.com";
const apiKey = "?api_key=dcb6d814-baad-466c-8bb0-e687accc3b55";
const apiComments = "/comments"
const apiShowdates = "/showdates"

// const comments = [
//     {name: `Connor Walton`, date: `02/17/2021`,
//     text: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.`},
//     {name: `Emilie Beach`, date: `01/09/2021`, 
//     text: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.`},
//     {name: `Miles Acosta`, date: `12/20/2020`, 
//     text: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`}
// ]

let comments = [];

axios.get(api+apiComments+apiKey)
.then ((response) => {
    comments = response.data.sort((a,b)=>{
        return new Date(a.timestamp) - new Date(b.timestamp);
    });
    displayComments(comments)
})
.catch ((error)=>{
    console.error(error)
})

const commentContainer = document.querySelector('.comment-container');

function createCard(obj) {

    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');
    commentContainer.prepend(commentCard);

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
    commentCardInfoDate.innerText = new Date (obj.timestamp).toLocaleDateString();
    commentCardInfoTop.appendChild(commentCardInfoDate);

    const commentCardInfoText = document.createElement(`p`);
    commentCardInfoText.classList.add('comment-card__info-text');
    commentCardInfoText.innerText = obj.comment;
    commentCardInfo.appendChild(commentCardInfoText);
} 

function displayComments(comments) {
    commentContainer.innerHTML = "";
    comments.forEach((comment)=>{
        createCard(comment);
    });
}

function submitComment(e){
    e.preventDefault();

    const formSubmit = {
        name: e.target.name.value, 
        comment: e.target.text.value, 
    };

    axios.post(api+apiComments+apiKey, formSubmit)
    .then ((response) => {
        // comments.unshift(response.data);
        inputSubmit.reset()
        displayComments(comments)
    }) 
    .catch ((response) => {
        console.error('error!')
    })
}




const inputSubmit = document.querySelector(`.input-wrapper__inputs`);

inputSubmit.addEventListener('submit', submitComment);
displayComments(comments);