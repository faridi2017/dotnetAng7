import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    {
        path: '', component: TablesComponent
    },
    {
        path: 'emp', component: EmployeeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
