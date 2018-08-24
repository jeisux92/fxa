// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false, 
  url: 'https://qa.banlinea.cloud/api/v2/ProcessFlow/',
  urlSimulator:'https://releaseasesor.banlinea.com:9092/api/simulator',
  UrlReference: 'https://qa.banlinea.cloud/api/v2/references/confirm',
  processId: '92661267-8a4b-4024-a1cd-fa502c59b0f4',
  simpleId: 'SimpleId',
  executionId: 'ExecutionId'
};
