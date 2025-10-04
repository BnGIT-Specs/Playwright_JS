// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { LocalWebConfig, CIWebConfig } from './configs';


export default defineConfig(
  {
  //...LocalWebConfig.Browsers_n_Device_Setup,
  ...CIWebConfig.Browsers_n_Device_Setup,
  }
);
