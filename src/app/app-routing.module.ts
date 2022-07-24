import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';

export const routeColors = {
    intro: 'bg-orange-300',
    q1: 'bg-amber-300',
    q2: 'bg-teal-300',
    q3: 'bg-cyan-300',
    q4: 'bg-fuchsia-300',
};

const routes: Routes = [
    {
        path: 'intro',
        component: IntroComponent,
        data: {
            backgroudColor: routeColors.intro,
        },
    },
    {
        path: '1',
        component: Q1Component,
        data: {
            backgroudColor: routeColors.q1,
        },
    },
    {
        path: '2',
        component: Q2Component,
        data: {
            backgroudColor: routeColors.q2,
        },
    },
    {
        path: '3',
        component: Q3Component,
        data: {
            backgroudColor: routeColors.q3,
        },
    },
    {
        path: '4',
        component: Q4Component,
        data: {
            backgroudColor: routeColors.q4,
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
