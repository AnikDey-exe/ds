AFRAME.registerComponent('side', {
    createPlace: function(position, id) {
        var element = document.createElement('a-entity');

        element.setAttribute('visible', true);
        element.setAttribute('id', `place-${id}`);
        element.setAttribute('geometry', {primitive:'circle', radius: 10});
        element.setAttribute('material', {src: '../assets/thumbnails/helicopter.png'});
        element.setAttribute('position', position);
        element.setAttribute('tracker', {});

        return element;
    },
    createPosition: function() {
        const sideView = document.querySelector("#sideview");

        let posX = -125;
        let posY = 30;

        for (var i = 1; i <= 5; i++) {
            var position = {x: posX += 50, y: posY += 2, z: -40}
            var element = this.createPlace(position, i);

            sideView.appendChild(element);
        }
    },
    tick: function() {
        const placesContainer = document.querySelector("#places-container");
        const state = placesContainer.getAttribute("tour").state;

        if(state === 'view' || state === 'view-2') {
            this.el.setAttribute('visible', true);
        }
        else {
            this.el.setAttribute('visible', false);
        }
    },
    init: function() {
        this.createPosition();
    }
})