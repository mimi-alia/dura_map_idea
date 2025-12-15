var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

/*********************************************    Layer Functions    *************************************************/


function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}



//Helper function for updating style on zoom changes  

function addSourceLayers(){
    //Add layers from layers object
    for (let key in layers){
        map.addSource(key, layers[key]);
        
     }


    map.addLayer({
        'id': 'roman_territory_300_bce',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'roman_territory_300_bce',
        'layout': {},
        'paint': {
            'fill-color': '#4F98CA', 
            'fill-opacity': 0,
            }
        });

    map.addLayer({
        'id': 'seleucid_empire',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'seleucid_empire', 
        'layout': {},
        'paint': {
            'fill-color': '#272727', 
            'fill-opacity': 0
            }
        });

    map.addLayer({
        'id': 'roman_territory_250ce',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'roman_territory_250ce', 
        'layout': {},
        'paint': {
            'fill-color': '#4F98CA', 
            'fill-opacity': 0
            }
        });

    map.addLayer({
        'id': 'roman_territory_70ce',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'roman_territory_70ce', 
        'layout': {},
        'paint': {
            'fill-color': '#4F98CA', 
            'fill-opacity': 0
            }
        });

    map.addLayer({
        'id': 'roman_territory_200ce',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'roman_territory_200ce', 
        'layout': {},
        'paint': {
            'fill-color': '#4F98CA', 
           'fill-opacity': 0
            }
        });

    map.addLayer({
        'id': 'roman_relinquished_3ce',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'roman_relinquished_3ce', 
        'layout': {},
        'paint': {
            'fill-color': '#4F98CA', 
            'fill-opacity': 0
            }
        });
    
    map.addLayer({
    'id': 'parthian_territory_120_bce',
    'type': 'fill',
    'slot': 'bottom',
    'source': 'parthian_territory_120_bce', 
    'layout': {},
    'paint': {
        'fill-color': '#480032', 
        'fill-opacity': 0
        }
    });

    map.addLayer({
        'id': 'parthian_territory_165_ce',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'parthian_territory_165_ce',
        'layout': {},
        'paint': {
        'fill-color': '#480032', 
        'fill-opacity': 0
        }
    })

    map.addLayer({
        'id': 'roman_territory_165_ce',
        'type': 'fill',
        'slot': 'bottom',
        'source': 'roman_territory_165_ce',
        'layout': {},
        'paint': {
        'fill-color': '#4F98CA', 
        'fill-opacity': 0
        }
    })

    map.addLayer({
    'id': 'sassanid_territory_250sce',
    'type': 'fill',
    'slot': 'bottom',
    'source': 'sassanid_territory_250sce', 
    'layout': {},
    'paint': {
        'fill-color': '#50D890', 
        'fill-opacity': 0
        }
    });

    map.addLayer({
    'id': 'sasanian_seized_territory_250_ce',
    'type': 'fill',
    'slot': 'bottom',
    'source': 'sasanian_seized_territory_250_ce', 
    'layout': {},
    'paint': {
        'fill-color': '#4F98CA', 
        'fill-opacity': 0
        }
    }); 

    map.addLayer({
        'id': 'trade_routes',
        'type': 'line',
        'slot': 'bottom',
        'source': 'trade_routes',
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': 'red',
            'line-width': 2,
            }
        });

    map.addLayer({
        'id': 'dura_location',
        'type': 'circle',
        'slot': 'top',
        'source': 'dura_location',
        'paint': {
            'circle-radius': 15,
            'circle-stroke-width': 5,
            'circle-color': 'rgba(0, 0, 0, 0)',
            'circle-stroke-color': 'red',
            'circle-opacity': 0
            }
        });

        
}


// Helper function for changinging layer gradient, save for when their data type changes
// function styleFillLayers(){
//     let mapLayers = map.getStyle().layers;
//     let fillLayers = mapLayers.filter(layer => layer["type"] === "fill");

//     const colors = ['#ff0000', '#00ff00', '#0000ff']; // Replace with your gradient colors  

//     return colors.forEach((color, index) => {
//         fillLayers.forEach((layer) => {
//             map.setPaintProperty(layer, "fill-opacity", 1 - (index / color.length));
//         })
//     })

// }

/*********************************************    Config Functions    ************************************************/

// dom sections
var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');


// Elements to generate if config elements have values / text added to them

// if title element in config obj is true
if (config.title) {
    // create an h1 element
    var titleText = document.createElement('h1');
    // add content from config.title's value
    titleText.innerText = config.title;
    // add to header
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}


// adds header generated in js to story div created in the html
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

// chapters
config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

/*************************************    Mapbox Map Objects and Functions    ***************************************/

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

let currentChapter;
let formerStyle = config.chapters[0].style;


// Create a inset map if enabled in config.js
if (config.inset) {
 var insetMap = new mapboxgl.Map({
    container: 'mapInset', // container id
    style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
    center: config.chapters[0].location.center,
    // Hardcode above center value if you want insetMap to be static.
    zoom: 3, // starting zoom
    hash: false,
    interactive: false,
    attributionControl: false,
    //Future: Once official mapbox-gl-js has globe view enabled,
    //insetmap can be a globe with the following parameter.
    //projection: 'globe'
  });
}

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function() {
    addSourceLayers();
    map.resize();
    // map.setLayoutProperty(map.getStyle().layers[97].id, 'visibility', 'none');

    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
    map.on('move', getInsetBounds);
    }
    
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(async response => {
        var current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
        var chapter = config.chapters[current_chapter]; 
        currentChapter = current_chapter;
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);


        const currentStyle = chapter.style;

        if(currentStyle && currentStyle != formerStyle){
            map.once("style.load", () => {
                addSourceLayers();
                map.resize();
                
                if (currentChapter === 0){
                    map.setLayoutProperty(map.getStyle().layers[97].id, "visibility", "none")

                }
                
                if (chapter.bounds) {
                    map.fitBounds(chapter.bounds, {
                    });
                }
            })
            map.setStyle(currentStyle);
            formerStyle = currentStyle;
            // console.log(`previous style is ${formerStyle}, switching to ${currentStyle}`)

        }

    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);

        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
 
    });
    




// setup resize event
window.addEventListener('resize', scroller.resize);

