import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpService } from './shared/http.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { ContainerModule } from './container/container.module';
import { ImagesModule } from './images/images.module';
import { MetricsModule } from './metrics/metrics.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { containerReducers } from './container/container.reducer';
import { ContainerEffects } from './container/container.effects';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ContainerModule,
    ImagesModule,
    MetricsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot({containerReducers}),
    EffectsModule.forRoot([ContainerEffects])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
