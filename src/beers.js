export const beers = [
    {
        name: 'Ariana Pale',
        type: 'American Pale Ale',
        cap: 'bronze',
        description: [
            'Test av nyutvecklad humle från Tyskland. Nästan enbart Ariana-humle, övriga sorter enbart för att runda av smaken.',
            'Sansad maltkaraktär och neutral jästprofil.',
        ],
        abv: 5.9,
        fermentation: '2020-09-09',
        bottling: '2020-10-11',
        expiry: '2021-04-11',
        count: 6,
        numbers: {
            og: 1.057,
            fg: 1.012,
            ibu: 32,
            ebc: 14,
        },
        ingredients: {
            malts: 'Kornmalt (Maris Otter, Cara Clair, Caramel 40L)',
            hops: 'Ariana, Amarillo, Centennial',
            yeast: 'US-05',
        },
    },

    {
        name: 'Northern Lager ("julöl")',
        type: 'Vienna Lager',
        cap: 'green',
        description: [
            'Farfar till den moderna lagern och Internationell tävlingsstil',
            'Kallas i norden ofta för Julöl',
        ],
        abv: 5.3,
        fermentation: '2020-10-11',
        bottling: '2020-10-24',
        expiry: '2021-07-24',
        count: 6,
        numbers: {
            og: 1.052,
            fg: 1.012,
            ibu: 23,
            ebc: 24,
        },
        ingredients: {
            malts: 'Kornmalt (Vienna, Pilsner, Caramunich 1, Melanoidin, Carafa 2)',
            hops: 'Hallertau Mittelfrûh, Northern Brewer, Tettnang',
            yeast: 'M76 Bavarian Lager',
        },
    },

    {
        name: 'Klosteröl',
        type: 'Mix: Belgian Singel | Veteöl',
        cap: 'white',
        description: [
            'Veteöl delvis bryggd med ekrökt vetemalt.',
            'En hel del fenol- och esterkaraktär från jästen.',
        ],
        abv: 4.7,
        fermentation: '2020-09-20',
        bottling: '2020-10-11',
        expiry: '2021-07-11',
        count: 6,
        numbers: {
            og: 1.048,
            fg: 1.012,
            ibu: 24,
            ebc: 6,
        },
        ingredients: {
            malts: 'Kornmalt (Maris Otter, Caramunich 1), Vetemalt (Pale, Ekrökt)',
            hops: 'Northern Brewer',
            yeast: 'Lallemand Abbaye Belgian',
        },
    },

    {
        name: 'Unknown Hop SMASH',
        type: 'SMASH IPA',
        cap: 'green-light',
        description: [
            'Bryggd som SMASH (Single MAlt Single Hop) för att verkligen få fram smaken av humlen',
            'Egen humle av okänd sort från växtmarknad i Uddevalla.',
        ],
        abv: 6.3,
        fermentation: '2020-10-11',
        bottling: '2020-10-24',
        expiry: '2021-04-24',
        count: 6,
        numbers: {
            og: 1.061,
            fg: 1.013,
            ibu: 22,
            ebc: 6,
        },
        ingredients: {
            malts: 'Kornmalt (Maris Otter)',
            hops: 'Okänd sort',
            yeast: 'Lallemand Voss Kveik',
        },
    },

    {
        name: 'South Africa',
        type: 'American IPA',
        cap: 'orange',
        description: [
            'IPA med 80% sydafrikansk humle. Citra (amerikansk) är inslängd för att avrunda smaken med lite citrus.',
        ],
        abv: 6.2,
        fermentation: '2020-11-15',
        bottling: '2020-11-22',
        expiry: '2021-04-22',
        count: 8,
        numbers: {
            og: 1.064,
            fg: 1.017,
            ibu: 36,
            ebc: 6,
        },
        ingredients: {
            malts: 'Kornmalt (Pilsner, Munich 1, Carapils)',
            hops: 'African Queen, Southern Passion, Citra',
            yeast: 'Lallemand Verdant IPA',
        },
    },

    {
        name: 'Nelson Sabro',
        type: 'New England IPA (NEIPA)',
        cap: 'purple',
        description: [
            '"Hazy/Juicy IPA" - Kallas ibland för humlejuice. Påminner lite om aprikosjuice med största mängden humle jag använt hittils. Brygd på fyra olika sädesslag',
            'Observera kort hållbarhet (mot oxidering) pga mängden humle.',
        ],
        abv: 6.2,
        fermentation: '2020-11-21',
        bottling: '2020-11-22',
        expiry: '2021-03-22',
        count: 8,
        numbers: {
            og: 1.064,
            fg: 1.017,
            ibu: 28,
            ebc: 6,
        },
        ingredients: {
            malts: 'Kornmalt (Pilsner, Carapils), havreflingor, rågflingor, vetemalt',
            hops: 'Nelson Sauvin, Sabro, Citra, Mosaic',
            yeast: 'Lallemand Verdant IPA',
        },
    },

    {
        name: 'West Coast',
        type: 'American IPA',
        cap: 'blue',
        description: [
            'Mer traditionell amerikansk västkustipa. På lägre ändan av spektrumet för beskan enligt ölstilen.',
        ],
        abv: 6.6,
        fermentation: '2020-11-20',
        bottling: '2020-12-20',
        expiry: '2021-04-20',
        count: 8,
        numbers: {
            og: 1.064,
            fg: 1.013,
            ibu: 47,
            ebc: 16,
        },
        ingredients: {
            malts: 'Kornmalt (Maris Otter, Munich 1, Carapils)',
            hops: 'Citra, Mosaic, Amarillo, Simcoe',
            yeast: 'Lallemand BRY-97 West Coast Ale',
        },
    },


    {
        name: 'Delad sats - Kölsch',
        type: 'Kölsch',
        cap: 'gold',
        description: [
            'En stor bryggning där till jäsningen vätskan delades på två olika jäskärl för att testa exakt samma recept med två olika jäster.',
            'Den här är jäst med Kölschjäst som är en lagerliknande Alejäst.',
        ],
        abv: 5,
        fermentation: '2020-10-26',
        bottling: '2020-11-11',
        expiry: '2021-08-11',
        count: 1,
        numbers: {
            og: 1.048,
            fg: 1.010,
            ibu: 28,
            ebc: 6,
        },
        ingredients: {
            malts: 'Kornmalt (Pilsner, Carapils, Munich 1)',
            hops: 'Herkules, Saaz, Hallertau Mittelfrûh',
            yeast: 'Lallemand Köln',
        },
    },

    {
        name: 'Delad sats - Lager',
        type: 'International Pale Lager',
        cap: 'silver',
        description: [
            'En stor bryggning där till jäsningen vätskan delades på två olika jäskärl för att testa exakt samma recept med två olika jäster.',
            'Den här är jäst med neutral äkta lagerjäst.',
        ],
        abv: 4.7,
        fermentation: '2020-10-26',
        bottling: '2020-11-11',
        expiry: '2021-08-11',
        count: 1,
        numbers: {
            og: 1.048,
            fg: 1.012,
            ibu: 28,
            ebc: 6,
        },
        ingredients: {
            malts: 'Kornmalt (Pilsner, Carapils, Munich 1)',
            hops: 'Herkules, Saaz, Hallertau Mittelfrûh',
            yeast: 'Lallemand Diamond Lager',
        },
    },


    {
        name: '-',
        cap: 'green-light',
        description: [
            'Vinteräpplen från Staxäng. Torrhumlad med egen humle (Cascade). Dock knappt märkbar mängd humle, denna sats mest för att se hur mycket smak går i från humlen.',
            'Eftersötad till SG 1.030.',
        ],
        abv: 0,
        fermentation: '2020-09-27',
        bottling: '2020-11-01',
        expiry: '2021-11-01',
        count: 1,
    },
    
    {
        name: 'Belgian Dark Strong Ale',
        cap: 'black',
        description: [
            'Ölvärldens whiskey eller cognac. Avnjuts smuttande. Lagrad över ett år innan flaskning. Mycket maltkaraktär, men inte överväldigande.',
        ],
        abv: 11,
        fermentation: '2019-11-17',
        bottling: '2020-11-22',
        expiry: 'om 10-15 år',
        count: 1,
        numbers: {
            og: 1.093,
            fg: 1.009,
            ibu: 32,
            ebc: 106,
        },
        ingredients: {
            malts: 'Maris Otter, Pilsner, Caramunich, Biscuit, Armomatic, Special B, Carafa 2',
            hops: 'Northern Brewer, Saaz',
            yeast: 'M31 Belgian Tripel',
        },
    },

    {
        name: 'Cider med lite humle',
        cap: 'green-light',
        description: [
            'Vinteräpplen från Staxäng. Torrhumlad med egen humle (Cascade). Dock knappt märkbar mängd humle, denna sats mest för att se hur mycket smak går i från humlen.',
            'Eftersötad till SG 1.030.',
        ],
        abv: 5.8,
        fermentation: '2020-09-27',
        bottling: '2020-11-01',
        expiry: '2021-11-01',
        count: 1,
        numbers: {
            og: 1.047,
            fg: 1.003,
            ibu: null,
            ebc: null,
        },
    },
];
