import { Modal } from './UI/modal'

class PlaceFinder {
  constructor() {
    const adressForm = document.querySelector('form');
    const locateUserButton = document.getElementById('locate-btn');

    //event listeners
    locateUserButton.addEventListener('click', this.locateUserHandler)
    adressForm.addEventListener('submit', this.findAdressHandler)
  }

  
  locateUserHandler() {
    if(!navigator.geolocation) {
      alert('Location feature does not working. Please enter a location manually.');
      return
    }
    const modal = new Modal('loading-modal-content', 'Loading location - please wait')
    modal.show();
    navigator.geolocation.getCurrentPosition(successResult => {
      modal.hide();
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude
      };
      console.log(coordinates)
    },
     error => {
       modal.hide();
      alert('Could not locate you, please enter your adress manually.')
    })
  }

  findAdressHandler(){}
}

new PlaceFinder();

