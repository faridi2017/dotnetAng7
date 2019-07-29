import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { throwError, Subject } from 'rxjs';
import { ApiServiceService } from 'src/app/ServiceUrlModel/api-service.service';
import { Checkouts } from 'src/app/ServiceUrlModel/checkouts';
import { Employee } from 'src/app/ServiceUrlModel/employee';
import { Router } from '@angular/router';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit, OnDestroy {
    employee: Employee;
    display = 'none'; 
    employees:Employee[];
    public loading = false;
    dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
    constructor(private myservice:ApiServiceService,private router:Router) {
        this.employees=[];
    }

    ngOnInit() {
        this.loading = true;
        this.myservice.getEmployees().subscribe((res:Employee[])=> {
            
             this.employees = res;
            
             this.loading = false;
             console.log('all employees',this.employees);
             
             this.dtTrigger.next();            
          
               },error=>{
              this.loading = false;
                   console.error('Error in calling get employees Api');
                // alert('Error in calling Blog Api');
               return throwError(error);
              });  
              this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                processing: true
              };
    }
    ngOnDestroy(): void {
       this.dtTrigger.unsubscribe();
      }
      get_employee_details(i){
        localStorage.setItem('employeeInfo', JSON.stringify(this.employees[i]));
        //let personFromStorage = JSON.parse(localStorage.getItem('employeeInfo'));
       // console.log('info-->',personFromStorage);
        this.router.navigate(['/tables/emp']); 
      }
      edit_employee(i){
        localStorage.setItem('employeeInfo', JSON.stringify(this.employees[i])); 
        this.router.navigateByUrl('/forms'); 
      }
    delete_employee() {
        this.loading = true;
        console.log('delete start');
        this.myservice.deleteEmployee(this.employee.employeeId).subscribe(res => {
            this.loading = false;
            console.log('confirm delete');
        }, error => {
            this.loading = false;
            console.error('Error in calling delete employees Api');
            // alert('Error in calling Blog Api');
            return throwError(error);
        });
        this.employee = new Employee;
        this.display = 'none'; //set none css after close dialog
    }
    openModalDialog(i) {
        this.employee = this.employees[i]
        this.display = 'block'; //Set block css
    }

    closeModalDialog() {
        this.employee = new Employee;
        this.display = 'none'; //set none css after close dialog
    }
}
