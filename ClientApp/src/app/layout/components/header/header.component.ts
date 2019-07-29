import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
   
    public pushRightClass: string;
user_name= localStorage.getItem('user_name');
loggedin=localStorage.getItem('isLoggedin');
    constructor(private translate: TranslateService, public router: Router) {
        console.log('at header');
if(!localStorage.getItem('user_name')){
this.router.navigate(['/login'])
}
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';

    }
    ngOnDestroy() { 
        console.log('ng destroy called');
        //alert('leave the page');
     }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.clear();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
