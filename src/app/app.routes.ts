import { Routes } from '@angular/router';
import { TaskComponent } from './component/task/task.component';
import { HomeComponent } from './component/home/home.component';
import { ShowAndHideComponent } from './component/show-and-hide/show-and-hide.component';
import { AddAndSubComponent } from './component/add-and-sub/add-and-sub.component';
import { ForLoopComponent } from './component/for-loop/for-loop.component';

export const routes: Routes = [
    {
    path:'task',component:TaskComponent
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'ShowAndHide',component:ShowAndHideComponent
    },
    {
        path:'AddAndSub',component:AddAndSubComponent
    },
     {
        path:'forLoop',component:ForLoopComponent
    }

];
