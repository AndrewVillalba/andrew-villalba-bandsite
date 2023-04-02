const api = "https://project-1-api.herokuapp.com";
const apiKey = "?api_key=dcb6d814-baad-466c-8bb0-e687accc3b55";
const show_dates = "/showdates"

let showsArray = [];

const shows = document.querySelector('.shows');
const showsContainer = document.createElement('div');

function showHeadings() {
    const showsHeading = document.createElement('h2');
    showsHeading.classList.add('shows-heading');
    shows.appendChild(showsHeading);
    showsHeading.innerText = 'Shows';

    showsContainer.classList.add('shows-container');
    shows.appendChild(showsContainer);

    const showsContainerSections = document.createElement('div');
    showsContainerSections.classList.add('shows-container__sections');
    showsContainer.appendChild(showsContainerSections);

    const showsContainerSectionsDate= document.createElement('p');
    showsContainerSectionsDate.classList.add('shows-container__section-item');
    showsContainerSectionsDate.classList.add('shows-container__section-item--first');
    showsContainerSections.appendChild(showsContainerSectionsDate);
    showsContainerSectionsDate.innerText = 'DATE';

    const showsContainerSectionsVenue = document.createElement('p');
    showsContainerSectionsVenue.classList.add('shows-container__section-item');
    showsContainerSections.appendChild(showsContainerSectionsVenue);
    showsContainerSectionsVenue.innerText = 'VENUES';

    const showsContainerSectionsLocation = document.createElement('p');
    showsContainerSectionsLocation.classList.add('shows-container__section-item');
    showsContainerSections.appendChild(showsContainerSectionsLocation);
    showsContainerSectionsLocation.innerText = 'LOCATION';
}

function showsList(obj) {

    const showsContainerCard = document.createElement('div');
    showsContainerCard.classList.add('shows-container__card')
    showsContainer.appendChild(showsContainerCard);

    const cardSectionDate = document.createElement('p');
    cardSectionDate.classList.add('shows-container__card-section');
    showsContainerCard.appendChild(cardSectionDate);
    cardSectionDate.innerText = 'DATE';

    const cardSectionArrayDate = document.createElement('p');
    cardSectionArrayDate.classList.add('shows-container__card-date');
    showsContainerCard.appendChild(cardSectionArrayDate);
    cardSectionArrayDate.innerText = new Date (obj.date).toLocaleDateString();

    const cardSectionVenue = document.createElement('p');
    cardSectionVenue.classList.add('shows-container__card-section');
    showsContainerCard.appendChild(cardSectionVenue);
    cardSectionVenue.innerText = 'VENUE';

    const cardSectionArrayVenue = document.createElement('p');
    cardSectionArrayVenue.classList.add('shows-container__card-text');
    showsContainerCard.appendChild(cardSectionArrayVenue)
    cardSectionArrayVenue.innerText = obj.place; 

    const cardSectionLocation = document.createElement('p');
    cardSectionLocation.classList.add('shows-container__card-section');
    showsContainerCard.appendChild(cardSectionLocation);
    cardSectionLocation.innerText = 'LOCATION';

    const cardSectionArrayLocation = document.createElement('p');
    cardSectionArrayLocation.classList.add('shows-container__card-text');
    showsContainerCard.appendChild(cardSectionArrayLocation);
    cardSectionArrayLocation.innerText = obj.location;

    const cardSectionButton = document.createElement('button');
    cardSectionButton.classList.add('shows-container__card-button');
    showsContainerCard.appendChild(cardSectionButton);
    cardSectionButton.innerText = 'BUY TICKETS'
}

showHeadings()

showsArray.forEach((show)=>{
    showsList(show);
});

axios.get(api+show_dates+apiKey)
.then ((response) => {
    showsArray = response.data
    showsArray.forEach((show)=>{
        showsList(show);
        let cards = document.querySelectorAll(".shows-container__card")

        cards.forEach((card) => {
    card.addEventListener('click', ()=> {
    cards.forEach((card) => {
        card.removeAttribute('style');
    });
    card.style.backgroundColor = '#E1E1E1'
    })
    });
})

})
.catch ((error)=>{
    console.error(error)
})


