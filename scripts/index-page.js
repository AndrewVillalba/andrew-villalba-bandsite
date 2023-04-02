const api = "https://project-1-api.herokuapp.com";
const apiKey = "?api_key=dcb6d814-baad-466c-8bb0-e687accc3b55";
const apiComments = "/comments"
const apiShowdates = "/showdates"

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
        comments.unshift(response.data)
        inputSubmit.reset()
        displayComments(comments)
    }) 
    .catch ((error)=>{
        console.error(error)
    });
}


const inputSubmit = document.querySelector(`.input-wrapper__inputs`);

inputSubmit.addEventListener('submit', submitComment);
displayComments(comments);