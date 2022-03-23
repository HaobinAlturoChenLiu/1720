//Trying to create a pause/play when click is detected, but it's not working properly?
AFRAME.registerComponent('video-handler',{
    init: function(){
     let element = this.element;
     let video = document.querySelector("#rickroll");
     vid.pause();
     //event listener for when someone clicks on the element with id "rickroll"
     element.addEventListener("click",function(){ 
         //play "rickroll"
        video.play();
     });
     element.addEventListener("click",function(){
         //puase "rickroll"
        video.pause();
     });    
    }
  });

//trigger renderPlaces function that renders myModel on an expecific latitude and logitude while window is loading
window.onload = () => {
    //load static data for "places"
     let places = staticLoadPlaces();
     //calling renderPlaces function
     renderPlaces(places); 
};

//function that returns an array of objects with the respective model name and location
function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            location: {
                lat: <your-latitude>,
                lng: <your-longitude>,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    //your longitude and latitude
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        //creates an entity with attributes listed below in the code such as latitude, logitude, rotation, scale, etc...
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        //wait for model to be loaded to load scene.gltf
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        //the entity is appended to the scene element so that it can be rendered when needed
        scene.appendChild(model);
    });
}