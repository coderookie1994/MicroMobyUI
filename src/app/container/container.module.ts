import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { ContainerService } from './container.service';
import { ContainerContainer } from './container.container';
import { ToggleButtonComponent } from '../common-ui/toggle-button/toggle-button.component';
import { CommonUIModule } from '../common-ui/common-ui.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContainerComponent,
    ],
    imports: [
        CommonUIModule,
        CommonModule
    ],
    providers: [ContainerContainer, ContainerService]
})
export class ContainerModule { }