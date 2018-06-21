import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabAlternativesComponent} from './components/tab-alternatives.component';
import {CardAlternativesComponent} from './components/card-alternatives.component';
import {DashboardComponent} from './dashboard.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {EchartsGraphComponent} from './components/echarts-graph.component';
import {WarningMessageComponent} from './components/warning-message.component';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {DASHBOARDSERVICE} from './config';
import {ZjCarouselModule} from '../carousel';
import {ZijinDashboardComponent} from './zijin-dashboard.component';
import {UserAddDashboardComponent} from './components/user-add-dashboard.component';
import {BuiltInAddDashboardComponent} from './components/built-in-add-dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        ZjCarouselModule,
        NgxEchartsModule,
    ],
    declarations: [
        ZijinDashboardComponent,
        DashboardComponent,
        CardAlternativesComponent,
        TabAlternativesComponent,
        EchartsGraphComponent,
        WarningMessageComponent,
        UserAddDashboardComponent,
        BuiltInAddDashboardComponent
    ],
    entryComponents: [
        ZijinDashboardComponent,
        DashboardComponent,
        CardAlternativesComponent,
        TabAlternativesComponent,
        EchartsGraphComponent,
        WarningMessageComponent,
        UserAddDashboardComponent,
        BuiltInAddDashboardComponent
    ],
    exports: [
        ZijinDashboardComponent,
        DashboardComponent
    ]
})
export class ZjDashboardModule {
    static forRoot(DashboardService): ModuleWithProviders {
        return {
            ngModule: ZjDashboardModule,
            providers: [
                {provide: DASHBOARDSERVICE, useClass: DashboardService},
            ]
        };
    }
}

