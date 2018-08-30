// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,  
  authURL:'https://apac2-auth-api.capillarytech.com/auth/v1/',
  apiURL:'https://apac2-api-gateway.capillarytech.com/mobile/v2/api/',
  sttarterURL:'https://api.sttarter.com/contentsystem/',
  token:'cea94caf3b38196b8f0f5cea05a534c9/'
};

/*
 * apiUrl: 'https://api.sttarter.com/contentsystem/',
 * token:'cea94caf3b38196b8f0f5cea05a534c9/'
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
