function toggle(event){
    event.preventDefault();
    const accedi=document.querySelector('.details');

    
    if(accedi.classList.contains('hidden'))
    {
        accedi.classList.remove('hidden');        
    }
    else
    {
        accedi.classList.add('hidden');      
    }
}

const detailToggle = document.querySelector('.profilo');
detailToggle.addEventListener('click', toggle);






fetch('https://js.api.here.com/v3/3.1/mapsjs-core.js')
  .then(response => response.text())
  .then(data => {
    //Step 1: initialize communication with the platform
        // Replace variable YOUR_API_KEY with your own apikey
        var platform = new H.service.Platform({
            apikey: 'Amoi27ykY8DdhQk1fjdm7L8yrSA0IgTtXky-QSNILPU'
        });
        var defaultLayers = platform.createDefaultLayers();
        //Step 2: initialize a map - this map is centered over Europe
        var map = new H.Map(document.getElementById('map'),
            defaultLayers.vector.normal.map,
            {
                center: { lat: 50, lng: 5 },
                zoom: 4,
                pixelRatio: window.devicePixelRatio || 1
            }
        );
        // add a resize listener to make sure that the map occupies the whole container
        window.addEventListener('resize', () => map.getViewPort().resize());
        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Create the default UI components
        var ui = H.ui.UI.createDefault(map, defaultLayers);

        // Marker code goes here
        var LocationOfMarker = { lat: 37.5526396601395, lng: 15.069488949197773}; 
        var LocationOfMarker1 = { lat: 37.56169078362664, lng: 15.06860732430613};
        var LocationOfMarker2 = { lat: 37.481635418989136, lng: 15.050067895961865};
        // optionally - resize a larger PNG image to a specific size
        var pngIcon = new H.map.Icon("https://cdn0.iconfinder.com/data/icons/gpsmapicons/red/gpsmapicons01.png", { size: { w: 56, h: 56 } });

        // Create a marker using the previously instantiated icon:
        var marker = new H.map.Marker(LocationOfMarker, { icon: pngIcon });
        var marker1 = new H.map.Marker(LocationOfMarker1, { icon: pngIcon });
        var marker2 = new H.map.Marker(LocationOfMarker2, { icon: pngIcon });
        // Add the marker to the map:
        map.addObject(marker);
        map.addObject(marker1);
        map.addObject(marker2);
        
        // Optionally, 
        //Show the marker in the center of the map
        map.setCenter(LocationOfMarker)
        map.setCenter(LocationOfMarker1)
        map.setCenter(LocationOfMarker2)
        

        //Zooming so that the marker can be clearly visible
        map.setZoom(11)
  })
  .catch(error => {
    console.error('Si è verificato un problema con l\'operazione di fetch:', error);
  });


 