import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';

import {
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BeginComponent,
    BreadCrumbComponent,
    TitleStateComponent,
    InfoComponent,
    FinalComponent
} from "./layout/containerLayout";
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';


export const APP_ROUTES: Routes = [
    {
        path: '', component: MainLayoutComponent
        , children: [
            { path: '', loadChildren: './container/container.module#ContainerModule' }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(APP_ROUTES),
        FlexLayoutModule,
        SharedModule,
        CoreModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        MainLayoutComponent,
        InfoComponent,
        BreadCrumbComponent,
        TitleStateComponent,
        FinalComponent,
        BeginComponent
    ],
    exports: [
        RouterModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FnRoutingModule {

    constructor() {


    }
}
