import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ApiServiceService } from '../ServiceUrlModel/api-service.service';
import { throwError } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user: Object = {};
user_name;
    password;
    loading = false;
    constructor(
      public router: Router, private myservice:ApiServiceService
    ) {}

    ngOnInit() {}

    // onLoggedin() {
    //     localStorage.setItem('user_name', 'true');
    //     localStorage.setItem('isLoggedin', 'true');
    // }
    onSubmit() {
        console.log(this.user_name, this.password);
        this.loading = true;
        this.myservice.login({ "username":this.user_name, "userpassword":this.password }).subscribe((res:any) => {
            this.loading = true;
            console.log("loged in-->",res);
          this.router.navigate(['/dashboard']);
            localStorage.setItem('user_name',res.fullname);
            localStorage.setItem('isLoggedin', 'true');
                             
        }, error => {
                this.loading = true;
          //        console.error('Error in login Api');
                alert('Wrong username or password');
              return throwError(error);
             });
             
        
       //  console.log(localStorage.getItem('user_name'),localStorage.getItem('isLoggedin'));
    }
    dotnetapicall() {
        this.myservice.getdotnetapi().subscribe((res) => {
            
            console.log('dot net response-->',res);

        }, error => {
            //        console.error('Error in login Api');
            alert('dot net api not called');
            return throwError(error);
        });
    }
}
