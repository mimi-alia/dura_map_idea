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



/*********************************************    Config Functions    ************************************************/

// dom sections
//var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');



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

//story.appendChild(features);

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
    maxBounds: config.chapters[0].location.bounds,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

let currentChapter;
let formerStyle = config.chapters[0].style;


// Create a inset map if enabled in config.js


// instantiate the scrollama
// var scroller = scrollama();



map.on("load", function() {
    console.log("Map has loaded");
    addSourceLayers();
    // map.setLayoutProperty(map.getStyle().layers[97].id, 'visibility', 'none');



    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
    map.on('move', getInsetBounds);
    }


    map.once('resize', () => {
    console.log('A resize event occurred.');
});

    // setup the instance, pass callback functions
    // scroller
    // .setup({
    //     step: '.step',
    //     offset: 0.5,
    //     progress: true
    // })
    // .onStepEnter(async response => {
    //     var current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
    //     var chapter = config.chapters[current_chapter]; 
    //     currentChapter = current_chapter;
    //     response.element.classList.add('active');
    //     map[chapter.mapAnimation || 'flyTo'](chapter.location);


    //     const currentStyle = chapter.style;

    //     if(currentStyle && currentStyle != formerStyle){
    //         map.once("style.load", () => {
    //             addSourceLayers();
    //             map.resize();
                
    //             if (currentChapter === 0){
    //                 map.setLayoutProperty(map.getStyle().layers[97].id, "visibility", "none")

    //             }
                
    //             if (chapter.bounds) {
    //                 map.fitBounds(chapter.bounds, {
    //                 });
    //             }
    //         })
    //         map.setStyle(currentStyle);
    //         formerStyle = currentStyle;

    //     }

   

    //     if (config.showMarkers) {
    //         marker.setLngLat(chapter.location.center);
    //     }
    //     //Deleting this removes  the opacity setting on chapter load
    //     if (chapter.onChapterEnter.length > 0) {
    //         chapter.onChapterEnter.forEach(setLayerOpacity);
    //     }
    //     if (chapter.callback) {
    //         window[chapter.callback]();
    //     }
    //     if (chapter.rotateAnimation) {
    //         map.once('moveend', () => {
    //             const rotateNumber = map.getBearing();
    //             map.rotateTo(rotateNumber + 180, {
    //                 duration: 30000, easing: function (t) {
    //                     return t;
    //                 }
    //             });
    //         });
    //     }
    //     if (config.auto) {
    //          var next_chapter = (current_chapter + 1) % config.chapters.length;
    //          map.once('moveend', () => {
    //              document.querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0].scrollIntoView();
    //          });
    //     }
    // })
    // .onStepExit(response => {
    //     var chapter = config.chapters.find(chap => chap.id === response.element.id);

    //     response.element.classList.remove('active');
    //     if (chapter.onChapterExit.length > 0) {
    //         chapter.onChapterExit.forEach(setLayerOpacity);
    //     }
 
    // });
    


    if (config.auto) {
        document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
    }

            
});

// map.on("style.load", function(){
//     console.log(`Max bounds default: ${map.getBounds()}`)
//     map.setMaxBounds([[35.705511590607614, 31.855080761681364],[45.81864840939082, 37.29961970393096]]);
//     console.log(`Max bounds altered: ${map.getBounds()}`)

// })


function updateInsetLayer(bounds) {
    insetMap.getSource('boundsSource').setData(bounds);
}



// setup resize event
window.addEventListener('resize', scroller.resize);
