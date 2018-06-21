import {Type} from '@angular/core';

export class PanelItem {
    constructor(public component: Type<any>, public data?: any) {
    }
}
