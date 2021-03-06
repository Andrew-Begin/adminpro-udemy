import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Graficas1Component } from '../graficas1/graficas1.component';
import { ProgressComponent } from '../progress/progress.component';
import { PagesComponent } from './pages.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { PAGES_ROUTES } from './pages.router';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES

    ]
})
export class PagesModule { }
