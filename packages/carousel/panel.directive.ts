import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[panel-host]'
})
export class PanelDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}
