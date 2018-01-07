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
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
