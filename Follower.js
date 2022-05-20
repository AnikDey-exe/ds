AFRAME.registerComponent('tracker', {
    schema: {
        selection: { type: 'string', default: "" }
    },
    init: function () {
        this.mouseEnterEvent();
        this.mouseLeaveEvent();
        this.mouseClickEvent();
    },
    mouseEnterEvent: function () {
        this.el.addEventListener('mouseenter', () => {
            var id = this.el.getAttribute("id");

            var placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];

            // for (var i = 0; i < placesId.length; i++) {
            if (placesId.includes(id)) {

                const placesContainer = document.querySelector('#places-container');

                placesContainer.setAttribute('tracker', { selection: id });

                this.el.setAttribute('material', { color: '#d76b30', opacity: 1 });


            }
            //}
        })
    },
    mouseLeaveEvent: function () {
        this.el.addEventListener('mouseleave', () => {
            var id = this.el.getAttribute("id");

            var placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];

            // for (var i = 0; i < placesId.length; i++) {
            if (placesId.includes(id)) {

                const placesContainer = document.querySelector('#places-container');

                placesContainer.setAttribute('tracker', { selection: id });

                this.el.setAttribute('material', { color: '#0077cc', opacity: 1 });
                // this.el.setAttribute('visible',false);

            }
            //}
        })
    },
    mouseClickEvent: function () {
        this.el.addEventListener('click', () => {
            const placesContainer = document.querySelector('#places-container');
            const state = placesContainer.getAttribute('tour').state;

            if (state === 'placesList') {
                const id = this.el.getAttribute('id'); 
                const placesId = ['taj-mahal', 'budapest', 'eiffel-tower', 'new-york-city']; 
                if (placesId.includes(id)) {
                    placesContainer
                    .setAttribute('tour', {
                        state: 'view',
                        selectedCard: id
                    })
                }
            }

            if(state === 'view' || state === 'view-2') {
                this.handleState();            
            }
        })
    },
    handleState: function() {
        var id = this.el.getAttribute('id');
        const placesContainer = document.querySelector('#places-container');
        const selectedItemId = placesContainer.getAttribute('tour').selectedCard;

        const sideViewId = ['place-1', 'place-2', 'place-3', 'place-4', 'place-5'];

        if(sideViewId.includes(id)) {
            placesContainer.setAttribute('tour', {
                state: 'view-2',
                selectedCard: selectedItemId
                
            })
            const skyEl = document.querySelector('#main-container');
            skyEl.setAttribute('material', {src: `../assets/360_images/${selectedItemId}/${id}.jpg`});
        }
    }
});

AFRAME.registerComponent('onenter', {
    schema: {
        selection: { type: 'string', default: "" }
    },
    init: function () {
        this.mouseEnterEvent();
        this.mouseLeaveEvent();
        this.mouseClickEvent();
    },
    mouseEnterEvent: function () {
        this.el.addEventListener('mouseenter', () => {
            

            var id = this.el.getAttribute("id");

            var placesId = ["superman", "flash", "spiderman", "hulk"];

            // for (var i = 0; i < placesId.length; i++) {
            if (placesId.includes(id)) {

                const placesContainer = document.querySelector('#comics-container');

                placesContainer.setAttribute('onenter', { selection: id });

                this.el.setAttribute('material', { opacity: 0.5, transparent: false });
                // this.el.setAttribute('visible',false);

            }
            //}
        })
    },
    mouseLeaveEvent: function () {
        this.el.addEventListener('mouseleave', () => {
            var id = this.el.getAttribute("id");

            var placesId = ["superman", "flash", "spiderman", "hulk"];

            // for (var i = 0; i < placesId.length; i++) {
            if (placesId.includes(id)) {

                const placesContainer = document.querySelector('#comics-container');

                placesContainer.setAttribute('onenter', { selection: id });

                this.el.setAttribute('material', { opacity: 1, transparent: false });
                // this.el.setAttribute('visible',false);

            }
            //}
        })
    },
    mouseClickEvent: function () {
        this.el.addEventListener('click', () => {
            const comicsContainer = document.querySelector('#comics-container');
            const state = comicsContainer.getAttribute('comics').state;

            if (state === 'comicsList') {
                const id = this.el.getAttribute('id'); 
                const placesId = ["superman", "flash", "spiderman", "hulk"];
                if (placesId.includes(id)) {
                    comicsContainer
                    .setAttribute('comics', {
                        state: 'banner',
                        //selectedCard: id
                    })
                }
                
            }

            // if(state === 'banner') {
            //     this.handleState();            
            // }
        })
    },
    // handleState: function() {
    //     const fade = document.querySelector('#fadeContainer');
    //     fade.setAttribute('visible', true);
    // }
});