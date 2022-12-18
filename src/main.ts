import { EnvironmentInjector, enableProdMode } from '@angular/core';

import {AppModule} from './app/app.module'
import {environment} from "./environments/environment"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Make sure this is set before production
if (environment.production){
  enableProdMode()
}


platformBrowserDynamic().bootstrapModule(AppModule).catch(error => console.error(error))


