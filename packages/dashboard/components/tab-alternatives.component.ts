import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as _ from 'lodash';


@Component({
    selector: 'tab-alt',
    template: `
        <div style="background: #ECECEC;padding:30px;">
            <div nz-row [nzGutter]="8">
                <div nz-col [nzSpan]="8" *ngFor="let tab of alternatives;">
                    <nz-card (click)="selectTab(tab)">
                        <ng-template #body>
                            <i class="anticon anticon-check-circle"
                               style="color: blueviolet;font-size: 22px;position: absolute;right: 7px;top:4px;"
                               *ngIf="tab.selected"></i>
                            <i class="anticon anticon-check-circle-o" *ngIf="!tab.selected"
                               style="position: absolute;right: 7px;top:5px;"></i>
                            <!--<i style="font-size: 45px;" [ngClass]="['anticon',tab.icon]"></i>-->
                            <i style="font-size: 45px;" class="zijin-icon-histogram"></i>
                            <!--<i style="font-size: 45px;" [ngClass]="['anticon','anticon-area-chart']"></i>-->
                            <p style="height: 50px;">{{tab.name}}</p>
                        </ng-template>
                    </nz-card>
                </div>
            </div>
        </div>
    `
})
export class TabAlternativesComponent implements OnInit {


    @Input() alts;  // 所有项
    @Input() index; // 当前打开的tab在HomeComponent.tabs的索引HomeComponent.tabs[index.1][index.0]
    @Output() tabSelect = new EventEmitter<any>();
    alternatives = []; // 扩展了selected属性的所有可供选择项

    constructor() {
    }


    ngOnInit(): void {
        if (this.alts) {
            this.alts.forEach(val => {
                this.alternatives.push(_.extend({selected: false}, val));
            });
        }
    }

    selectTab(tab) {
        this.alternatives.forEach(value => {
            value.selected = false;
        });
        tab.selected = true;
        this.tabSelect.emit({
            index: this.index,
            tab: _.omit(tab, ['selected'])
        });
    }

}



