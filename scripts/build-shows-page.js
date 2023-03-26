const showsArray = [
    {date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA'},
    {date: 'Tue Sept 21 2021', venue: 'Pier 3 East', location: 'San Francisco, CA'},
    {date: 'Fri Oct 15 2021', venue: 'View Lounge', location: 'San Francisco, CA'},
    {date: 'Sat Nov 06 2021', venue: 'Hyatt Agency', location: 'San Francisco, CA'},
    {date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Francisco, CA'},
    {date: 'Wed Dec 15 2021', venue: 'Press Club', location: 'San Francisco, CA'},
]

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
    cardSectionArrayDate.innerText = obj.date;

    const cardSectionVenue = document.createElement('p');
    cardSectionVenue.classList.add('shows-container__card-section');
    showsContainerCard.appendChild(cardSectionVenue);
    cardSectionVenue.innerText = 'VENUE';

    const cardSectionArrayVenue = document.createElement('p');
    cardSectionArrayVenue.classList.add('shows-container__card-text');
    showsContainerCard.appendChild(cardSectionArrayVenue)
    cardSectionArrayVenue.innerText = obj.venue; 

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


