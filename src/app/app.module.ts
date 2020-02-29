import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRoutes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterContainerComponent } from './feature/header-footer/containers/footer/footer-container/footer-container.component';
import { HeaderContainerComponent } from './feature/header-footer/containers/header/header-container/header-container.component';
import { LazyLoaderService } from './module-injecter/services/lazy-loader/lazy-loader.service';
import { LAZY_WIDGETS } from './module-injecter/utils/tokens';
import { lazyArrayToObj, lazyWidgets } from './module-injecter/utils/widgets';

@NgModule({
  declarations: [
    AppComponent,
    FooterContainerComponent,
    HeaderContainerComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LAZY_WIDGETS,
      useFactory: lazyArrayToObj
    },
    LazyLoaderService,
    provideRoutes(lazyWidgets)
  ]
})
export class AppModule {}
