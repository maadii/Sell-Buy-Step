import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { ListingPageComponent } from './listing-page/listing-page.component';


export const routes: Routes = [
    {path:'',redirectTo:'lists',pathMatch:'full'},
    { path:'lists', component:ListingPageComponent, pathMatch:'full'}
];
