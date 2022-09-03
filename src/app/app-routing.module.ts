import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeColors, routes } from './constants';
import { IntroComponent } from './intro/intro.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';
import { ResetComponent } from './reset/reset.component';
import { StartGuard } from './start.guard';

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
        canActivate: [StartGuard],
        data: {
            backgroudColor: routeColors[1],
        },
    },
    {
        path: routes[2],
        component: Q2Component,
        canActivate: [StartGuard],
        data: {
            backgroudColor: routeColors[2],
        },
    },
    {
        path: routes[3],
        component: Q3Component,
        canActivate: [StartGuard],
        data: {
            backgroudColor: routeColors[3],
        },
    },
    {
        path: routes[4],
        component: Q4Component,
        canActivate: [StartGuard],
        data: {
            backgroudColor: routeColors[4],
        },
    },
    {
        path: routes[5],
        component: Q5Component,
        canActivate: [StartGuard],
        data: {
            backgroudColor: routeColors[5],
        },
    },
    {
        path: routes[6],
        component: Q6Component,
        canActivate: [StartGuard],
        data: {
            backgroudColor: routeColors[6],
        },
    },
    {
        path: 'reset',
        component: ResetComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            backgroudColor: routeColors[0],
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(r, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
