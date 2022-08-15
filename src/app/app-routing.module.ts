import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeColors, routes } from './constants';
import { IntroComponent } from './intro/intro.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';

const r: Routes = [
    {
        path: routes[0],
        component: IntroComponent,
        data: {
            backgroudColor: routeColors[0],
        },
    },
    {
        path: routes[1],
        component: Q1Component,
        data: {
            backgroudColor: routeColors[1],
        },
    },
    {
        path: routes[2],
        component: Q2Component,
        data: {
            backgroudColor: routeColors[2],
        },
    },
    {
        path: routes[3],
        component: Q3Component,
        data: {
            backgroudColor: routeColors[3],
        },
    },
    {
        path: routes[4],
        component: Q4Component,
        data: {
            backgroudColor: routeColors[4],
        },
    },

    { path: '**', redirectTo: routes[0] },
];

@NgModule({
    imports: [RouterModule.forRoot(r)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
