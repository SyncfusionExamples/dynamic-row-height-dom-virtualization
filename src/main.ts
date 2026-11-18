// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Provider } from '@angular/core';
import { OVERLAY_DEFAULT_CONFIG } from '@angular/cdk/overlay';
import { AppComponent } from './app/app.component';

import { provideTranslateLoader, provideTranslateService, TranslateService } from '@ngx-translate/core';
import {
  TRANSLATE_HTTP_LOADER_CONFIG,
  TranslateHttpLoader,
} from '@ngx-translate/http-loader';

const workaroundEnabled = new URLSearchParams(window.location.search).get('workaround') === '1';
const overlayProviders: Provider[] = workaroundEnabled
  ? [{ provide: OVERLAY_DEFAULT_CONFIG, useValue: { usePopover: false } }]
  : [];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideTranslateService({
      lang: 'en',
      loader: provideTranslateLoader(() => new TranslateHttpLoader()),
    }),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: { resources: [{ prefix: '/assets/i18n/', suffix: '.json' }] },
    },
    ...overlayProviders,
  ],
}).then(ref => {
  const translate = ref.injector.get(TranslateService);
  translate.addLangs(['en', 'te']);
  const saved = localStorage.getItem('lang') || 'en';
  translate.use(saved);
});