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
    navigator.geolocation.getCurrentPosition(successResult => {
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude
      };
      console.log(coordinates)
    },
     error => {
      alert('Could not locate you, please enter your adress manually.')
    })
  }

  findAdressHandler(){}
}

new PlaceFinder();

