var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiYXdhZG1pc2hhIiwiYSI6ImNsc2M4bHNvNTBubG0yc2tnMWpzNTU0YnEifQ.bEsaKTQjMPGRsAsqwXArqA',
    showMarkers: false,
    markerColor: '',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'modern-political-borders',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Substantial archaeological remains from the ancient city of Dura-Europos are located in modern eastern Syria, on the western bank of the Euphrates River, near the border with Iraq. The site and the objects that descend from it–including many rare survivals–are a critical resource for the study of life in antiquity.',
            location: {
                center: [40.76208, 34.62198],
                zoom: 5.47,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                    // duration: 5000
                },
                {
                    layer: 'trade_routes',
                    opacity: 0,
                    // duration: 5000
                },
                {
                    layer: 'seleucid_empire',
                    opacity: 0,
                    // duration: 5000
                },
                {
                    layer: 'roman_territory_250ce',
                    opacity: 0,
                    // duration: 5000
                },
                {
                    layer: 'roman_territory_70ce',
                    opacity: 0,
                    // duration: 5000
                },
                {
                    layer: 'roman_territory_200ce',
                    opacity: 0,
                    // duration: 5000
                },
                {
                    layer: 'sassanid_territory_250sce',
                    opacity: 0,
                    // duration: 5000
                },
                {
                    layer: 'roman_relinquished_3ce',
                    opacity: 0,
                    // duration: 5000
                },
                {
                    layer: 'parthian_territory_120_bce',
                    opacity: 0,
                },
                {
                    layer: 'parthian_territory_165_ce',
                    opacity: 0,
                },
                {
                    layer: 'roman_territory_165_ce',
                    opacity: 0,
                },
                {
                    layer: 'roman_territory_300_bce',
                    opacity: 0,
                },
                {
                    layer: 'sasanian_seized_territory_250_ce',
                    opacity: 0,
                },
                

            ],
            onChapterExit: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
            ]
        },
        {
            id: 'trade-routes',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Thanks to its location relative to local and trans-regional trade routes, and at the frontier between powerful empires in the East and West, this ancient city was a crossroads of cultures.',
            location: {
                center: [47.55553, 36.93892],
                zoom: 4.32,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
                {
                    layer: 'trade_routes',
                    opacity: 1,
                },
            
            ],
            onChapterExit: [
                {
                    layer: 'trade_routes',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'seleucid-territory-300bce',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The city was founded c. 300 BCE by the Hellenistic (Greek) Seleucid Empire.',
            location: {
                center: [47.55553, 36.93892],
                zoom: 4.32,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'seleucid_empire',
                    opacity: 0.5,
                },
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'seleucid_empire',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'roman-territory-300bce',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'On the other side of the Mediterranean sits the Roman Empire whose territory would steadily grow over the course of the next centuries.',
            location: {
                center: [42.19101, 36.93892],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
                {
                    layer: 'roman_territory_300_bce',
                    opacity: .5,
                },

            ],
            onChapterExit: [
                {
                    layer: 'roman_territory_300_bce',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'parthian-territory-100bce',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'By the late second century BCE, Dura came under the control of the growing Arsacid (Parthian) Empire.',
            location: {
                center: [40.76208, 34.62198],
                zoom: 4.32,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
                {
                    layer: 'parthian_territory_120_bce',
                    opacity: .5,
                },
            ],
            onChapterExit: [
                {
                    layer: 'parthian_territory_120_bce',
                    opacity: 0, 
                },
            ]
        },
        {
            id: 'roman-territory-165ce',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'By the late 2nd century CE, the site had been absorbed into the territory of the Roman Empire to the West.',
            location: {
                center: [40.76208, 34.62198],
                zoom: 4.32,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
                {
                    layer: 'roman_territory_165_ce',
                    opacity: .5,
                },
                {
                    layer: 'parthian_territory_165_ce',
                    opacity: .5,
                },
            ],
            onChapterExit: [
                {
                    layer: 'roman_territory_165_ce',
                    opacity: 0,
                },
                {
                    layer: 'parthian_territory_165_ce',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'sasanian-territory-256ce',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Dura\’s ancient occupation came to an end around 256 CE, when it was one of a number of Roman cities besieged and conquered by the nascent Sasanian Persian Empire as it expanded its territory westward.',
            location: {
                center: [40.76208, 34.62198],
                zoom: 5.47,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
                {
                    layer: 'sassanid_territory_250sce',
                    opacity: .5,
                },
                {
                    layer: 'roman_relinquished_3ce',
                    opacity: .5,
                },
                {
                    layer: 'sasanian_seized_territory_250_ce',
                    opacity: .5,
                },
            ],
            onChapterExit: [
                {
                    layer: 'sassanid_territory_250sce',
                    opacity: 0,
                },
                {
                    layer: 'roman_relinquished_3ce',
                    opacity: 0,
                },
                {
                    layer: 'sasanian_seized_territory_250_ce',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'dura-europos-fall',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'But history didn\’t stop when Dura-Europos fell.',
            location: {
                center: [40.76208, 34.62198],
                zoom: 5.47,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dura_location',
                    opacity: 1,
                },
            ],
            onChapterExit: []
        },
        // {
        //     id: 'sasanian-empire-620ce',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'c. 620 CE Sasanian Empire',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'ummayad-caliphate-720ce',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'c. 720 CE Ummayad Caliphate',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'abbasid-caliphate-720ce',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'c.  850 CE Abbasid Caliphate',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'seljuk-empire',
        //     alignment: 'left',
        //     hidden: false,
        //     title: '[date]Seljuk Empire',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'ottoman-empire',
        //     alignment: 'left',
        //     hidden: false,
        //     title: ' [date]  Ottoman Empire right before WWI',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'ottoman-empire-desc',
        //     alignment: 'left',
        //     hidden: false,
        //     title: '',
        //     image: '',
        //     description: 'As one of the central powers defeated in WWI, the Ottoman Empire came to an end and forfeited its territory.',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'french-british-mandate',
        //     alignment: 'left',
        //     hidden: false,
        //     title: '',
        //     image: '',
        //     description: 'In the power vacuum after the forfeiture of Ottoman territory, the French and British stymied efforts to establish a self-governed Arab state and instead established Mandate governments divided along the Sykes-Picot line.',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'french-mandate-impact',
        //     alignment: 'left',
        //     hidden: false,
        //     title: '',
        //     image: '',
        //     description: 'It was under French Mandate authority that largescale excavation campaigns employing hundreds of local laborers were carried out at Dura-Europos through the 1920s and 30s. Power dynamics and labor relations of the era left local contributions largely uncredited.',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'modern-french-presence',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'French military presence until 1946.',
        //     image: '',
        //     description: '',
        //     location: {
        //         center: [47.55553, 36.93892],
        //         zoom: 4.32,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
    ]
}