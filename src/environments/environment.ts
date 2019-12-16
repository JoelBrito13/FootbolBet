// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: {
    api: 'http://127.0.0.1:8000/',
    app: 'http://localhost:4200/',
    gamesAPI: 'https://apiv2.apifootball.com/' +
      '?action=get_predictions' +
      '&APIkey=2460239a218e22dd4c13f692c3caedafd1ef37cfc2fcbe58e645065c1fefd9d3'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
