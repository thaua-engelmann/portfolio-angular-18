import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run app-home:serve:development',
        production: 'nx run app-home:serve:production',
      },
      ciWebServerCommand: 'nx run app-home:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
