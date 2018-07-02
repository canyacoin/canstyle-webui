import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';
import { ColoursComponent } from './colours/colours.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AssetsComponent } from './assets/assets.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'index.html',
        component: HomeComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'typography', 
        component: TypographyComponent
    } ,
    {
        path: 'colours', 
        component: ColoursComponent
    } ,
    {
        path: 'buttons', 
        component: ButtonsComponent
    } ,
    {
        path: 'cards', 
        component: CardsComponent
    } ,
    {
        path: 'widgets', 
        component: WidgetsComponent
    } ,
    {
        path: 'assets', 
        component: AssetsComponent
    } ,
    {
        path: '**', 
        component: PageNotFoundComponent
    } 
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
