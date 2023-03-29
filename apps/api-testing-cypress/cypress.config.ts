import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: nxE2EPreset(__dirname, {
    // TODO : move to vite once fixed (https://github.com/nrwl/nx/issues/15890)
    bundler: 'webpack',
  }),
});
