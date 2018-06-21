import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {PanelDirective} from './panel.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CarouselComponent,
        PanelDirective
    ],
    entryComponents: [
        CarouselComponent
    ],
    exports: [
        CarouselComponent
    ]
})
export class ZjCarouselModule {

}
