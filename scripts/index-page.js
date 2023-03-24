const comments = [
    {name: `Connor Walton`, date: `02/17/2021`,
     text: `This is art. This is inexplicable magic
    expressed in the purest way, everything
    that makes up this majestic work
    deserves reverence. Let us appreciate
    this for what it is and what it contains.`},
    {name: `Emilie Beach`, date: `01/09/2021`, 
    text: `I feel blessed to have seen them in
    person. What a show! They were just
    perfection. If there was one day of my
    life I could relive, this would be it. What
    an incredible day.`},
    {name: `Miles Acosta`, date: `12/20/2020`, 
    text: `I can't stop listening. Every time I hear
    one of their songs - the vocals - it gives
    me goosebumps. Shivers straight down
    my spine. What a beautiful expression of
    creativity. Can't get enough.`}
]

const commentContainer = document.querySelector(`.comment-container`)

function displayComment(obj) {
    
    const commentCard = document.createElement(`div`);
    commentCard.classList.add(`.comment-card`);
    commentContainer.appendChild(commentCard);

    const commentCardImg = document.createElement(`div`);
    commentCardImg.classList.add(`.comment-card__img`);
    commentCard.appendChild(commentCardImg);

    const commentCardInfo = document.createElement(`div`);
    commentCardInfo.classList.add(`.comment-card__info`);
    commentCard.appendChild(commentCardInfo);

    const commentCardInfoTop = document.createElement(`div`);
    commentCardInfoTop.classList.add(`.comment-card__info-top`);
    commentCardInfo.appendChild(commentCardInfoTop);

    const commentCardInfoName = document.createElement(`h5`);
    commentCardInfoName.classList.add(`.comment-card__info-name`);
    commentCardInfoName.innerText = obj.name;
    commentCardInfoTop.appendChild(commentCardInfoName);

    return commentCard
} 

displayComment(comments);

const inputSubmit = document.querySelector(`.input-wrapper__inputs`)
inputSubmit.addEventListener(`submit`, submitComment)

function submitComment(e) {
    e.preventDefault();
    
    
}

