import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { ContainerService } from './container.service';
import { ContainerContainer } from './container.container';

@NgModule({
    declarations: [
        ContainerComponent
    ],
    providers: [ContainerContainer, ContainerService]
})
export class ContainerModule { }