var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "publisherSearch"
    },
    {
      "id": "publisherKey"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "DATASET",
    "PUBLISHER"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "locale": "es",
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "ARCTIC": [
          "NATURAL",
          "BRIGHT"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "es",
      "localeCode": "es",
      "label": "Spanish",
      "default": true,
      "textDirection": "ltr",
      "cmsLocale": "es",
      "vocabularyLocale": "es-ES",
      "iso3LetterCode": "spa",
      "gbifOrgLocalePrefix": "/es",
      "grSciCollLocalePrefix": "/es",
      "mapTileLocale": "es"
    },
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "publishingCountry",
          "values": [
            "AR",
            "FK",
            "GS"
          ]
        },
        {
          "type": "and",
          "predicates": [
            {
              "type": "in",
              "key": "country",
              "values": [
                "AR",
                "FK",
                "GS"
              ]
            },
            {
              "type": "equals",
              "key": "hasGeospatialIssue",
              "value": "false"
            }
          ]
        },
        {
          "type": "within",
          "key": "geometry",
          "value": "POLYGON((-74 -60, -25 -60, -25 -90, -74 -90, -74 -60))"
        }
      ]
    },
    "mapSettings": {
      "lat": -45.373733938343776,
      "lng": -65.8143857581085,
      "zoom": 3.5
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {
    "scope": {
      "publishingCountry": "AR"
    },
    "excludedFilters": [
      "publishingCountry"
    ]
  },
  "publisherSearch": {
    "scope": {
      "country": "AR"
    },
    "excludedFilters": [
      "country"
    ]
  },
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "countriesOfResearcher",
          "values": [
            "AR",
            "FK",
            "GS"
          ]
        },
        {
          "type": "in",
          "key": "countriesOfCoverage",
          "values": [
            "AR",
            "FK",
            "GS"
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }
