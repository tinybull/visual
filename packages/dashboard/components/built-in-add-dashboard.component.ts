import {Component} from '@angular/core';
import {NzModalSubject} from 'ng-zorro-antd';

@Component({
    template: `
        <div nz-row [nzGutter]="8">
            <div nz-col [nzSpan]="8" *ngFor="let page of pages;">
                <nz-card [ngClass]="{'card-nonavailable': !page.available,'card-available':page.available}"
                         (click)="selectPage(page)">
                    <ng-template #body>
                        <i class="anticon anticon-check-circle"
                           style="color: blueviolet;font-size: 22px;position: absolute;right: 7px;top:4px;"
                           *ngIf="page.selected"></i>
                        <i class="anticon anticon-check-circle-o" *ngIf="!page.selected"
                           style="position: absolute;right: 7px;top:4px"></i>
                        <i style="font-size: 45px;" [ngClass]="['anticon','anticon-area-chart']"></i>
                        <p style="height: 50px;">{{page.description}}</p>
                    </ng-template>
                </nz-card>
            </div>
        </div>
    `,
    styles: [
            `
            .card-available {
                cursor: pointer;
                background-color: #8bd22f;
                margin-bottom: 5px;
            }

            .card-nonavailable {
                cursor: pointer;
                background-color: darkslategray;
                margin-bottom: 5px;
            }
        `
    ]
})
export class BuiltInAddDashboardComponent {

    pages;

    constructor(private nzModalSubject: NzModalSubject) {

    }

    selectPage(page) {

        if (!page.available) {
            return;
        }

        // 标志当前页被选中
        this.pages.forEach(val => {
            if (val.available) {
                val.selected = false;
            }
        });
        page.selected = true;

        this.nzModalSubject.next(page);
    }

}
