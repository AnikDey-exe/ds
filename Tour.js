AFRAME.registerComponent("tour", {
  schema: {
    state: {type: 'string', default: 'placesList'},
    selectedCard: {type: 'string', default: ''},
  },
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },
  tick: function() {
    const state = this.data.state;

    if(state === "view") {
      this.hide([this.placesContainer]);
      this.showView();
    }
  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },
      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];

    let previousXPosition = -62;

    for (var item of thumbNailsRef) {
      var posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      var position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      var borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      var thumbnailEl = this.createThumbnail(item);
      borderEl.appendChild(thumbnailEl);
     
      // Title Text Element
      var titleEl = this.createTitle(position, item);
      borderEl.appendChild(titleEl);
      
      this.placesContainer.appendChild(borderEl);

    }
  },
  createBorder: function(position, id) {
    var element = document.createElement('a-entity');

    element.setAttribute('id', id);
    element.setAttribute('geometry', {primitive: 'ring', radiusInner: 9, radiusOuter: 10});
    element.setAttribute('position', position);
    element.setAttribute('material', {color: '#0077cc'});
    element.setAttribute('visible', true);
    element.setAttribute('tracker', {});

    return element;
  },
  createThumbnail: function(item) {
    var element = document.createElement('a-entity');

    element.setAttribute('geometry', {primitive: 'circle', radius: 9});
    element.setAttribute('material', {src: item.url});
    element.setAttribute('visible', true);

    return element;
  },
  createTitle: function(position, item) {
    var element = document.createElement('a-entity');

    position.y -= 30;

    element.setAttribute('text', {font: 'exo2bold', align: 'center', width: 70, color: '#e65100', value: item.title});
    element.setAttribute('position', position);
    element.setAttribute('visible', true);

    return element;
  },
  hide: function(elementList) {
    elementList.map((el)=>{
      el.setAttribute('visible', false)
    });
  },
  showView: function() {
    const selectedCard = this.data.selectedCard;
    const skyEl = document.querySelector('#main-container');

    skyEl.setAttribute('material', {src: `../assets/360_images/${selectedCard}/place-0.jpg`});
  }
});


