var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  version: 2,
  routes: {
    alwaysUseHrefs: true, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    enabledRoutes: ['occurrenceSearch', 'datasetSearch', 'datasetKey', 'publisherSearch', 'publisherKey', 'literatureSearch']
  },
  occurrence: {
    // excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    // highlightedFilters: ['taxonKey',  'catalogNumber', 'recordedBy', 'identifiedBy'],
    // defaultTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
    mapSettings: {
      lat: -45.373733938343776,
      lng: -65.8143857581085,
      zoom: 3.5
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
      type: 'or',
      predicates: [
        {
          type: 'in',
          key: 'publishingCountry',
          values: ['AR', 'FK', 'GS']
        },
        {
          type: 'and',
          predicates: [
            {
              type: 'in',
              key: 'country',
              values: ['AR', 'FK', 'GS']
            },
            {
              type: 'equals',
              key: 'hasGeospatialIssue',
              value: 'false'
            }
          ]
        },
        {
          type: 'within',
          key: 'geometry',
          value: 'POLYGON((-74 -60, -25 -60, -25 -90, -74 -90, -74 -60))'
        }
      ]
    }
  },
  dataset: {
    rootFilter: {
      publishingCountry: 'AR'
    },
    excludedFilters: ['publishingCountryCode'],
  },
  publisher: {
    rootFilter: {
      country: 'AR'
    },
    excludedFilters: ['countrySingle'],
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['AR', 'FK', 'GS']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['AR', 'FK', 'GS']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year'],
    },
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER'],
 
  
  maps: {
    locale: 'es',
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }
