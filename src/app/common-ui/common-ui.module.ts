import { NgModule } from '@angular/core';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
    declarations: [
        ToggleButtonComponent
    ],
    exports: [
        ToggleButtonComponent
    ],
    providers: []
})
export class CommonUIModule { }