import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ImagesComponent } from './images/images.component';
import { MetricsComponent } from './metrics/metrics.component';

export const appRoutes: Routes = [
    { path: "containers", component: ContainerComponent },
    { path: "images", component: ImagesComponent },
    { path: "metrics", component: MetricsComponent }
]