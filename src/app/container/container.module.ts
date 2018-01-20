import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { ContainerService } from './container.service';
import { ContainerContainer } from './container.container';
import { ToggleButtonComponent } from '../common-ui/toggle-button/toggle-button.component';
import { CommonUIModule } from '../common-ui/common-ui.module';

@NgModule({
    declarations: [
        ContainerComponent,
    ],
    imports: [
        CommonUIModule
    ],
    providers: [ContainerContainer, ContainerService]
})
export class ContainerModule { }