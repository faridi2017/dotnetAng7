import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/ServiceUrlModel/employee';
import { ApiServiceService } from 'src/app/ServiceUrlModel/api-service.service';
import { throwError } from 'rxjs';
import { Education } from 'src/app/ServiceUrlModel/education';
import { WorkInfo } from 'src/app/ServiceUrlModel/work-info';
import { Experience } from 'src/app/ServiceUrlModel/experience';
import { PersonalInfo } from 'src/app/ServiceUrlModel/personal-info';
import { Summary } from 'src/app/ServiceUrlModel/summary';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { EmployeeImage } from '../../../ServiceUrlModel/employee-image';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
employee:Employee;
    show_hide_edu = false;
    employeeImage: EmployeeImage;
    getbase64textString;
no_image=false;
apiData=false;//when get data API could not get
imgURL: any;
    
loadingExp=false;
loadingEdu=false;
loadingWork=false;
loadingPersonal=false;
loadingSummary=false;
show_hide_exp=false;
show_hide_work=false;
show_hide_personal=false;
show_hide_summary=false;
education:Education[];
workInfo:WorkInfo;
experience:Experience[];
personalInfo:PersonalInfo;
summary:Summary;
    constructor(private myservice: ApiServiceService, private router: Router) {
        this.employeeImage = new EmployeeImage;
    this.employee=new Employee();
    this.employee=JSON.parse(localStorage.getItem('employeeInfo'));
    console.log('my info-->',this.employee);
  }

  ngOnInit() {
    this.getEmployeeImage();
      
  
  }
  moreLess(option){
    if(option=='edu'){
      this.show_hide_edu=!this.show_hide_edu;
      if(this.show_hide_edu==true){
        this.getEducation();
      }
      
      return;
    }
    if(option=='exp'){
      this.show_hide_exp=!this.show_hide_exp;
      if(this.show_hide_exp==true){
      this.getExperience();
      }
      return;
    }
    if(option=='work'){
      this.show_hide_work=!this.show_hide_work;
      if(this.show_hide_work==true){
      this.getWorkInfo();
      return;
      }
    }
    if(option=='personal'){
      this.show_hide_personal=!this.show_hide_personal;
      if(this.show_hide_personal==true){
      this.getpersonalInfo();
      }
      return;
    }
    if(option=='summary'){
      this.show_hide_summary=!this.show_hide_summary;
      if(this.show_hide_summary==true){
      this.getSummary();
      }
      return;
    }

  }
getEducation(){
  this.loadingEdu=true;
  this.myservice.getEducation(this.employee.employeeId).subscribe((res:Education[])=> {      
    this.education = res; 
    this.loadingEdu=false;
    console.log('education',this.education);
      },error=>{
        this.loadingEdu=false;
    
    alert('Error! please try latter');
      return throwError(error);
     });  
}
getExperience(){
  this.loadingExp=true;
  this.myservice.getExperience(this.employee.employeeId).subscribe((res:Experience[])=> {      
    this.experience = res; 
    this.loadingExp=false;
    console.log('experience',this.experience);
      },error=>{
        this.loadingExp=false;
    alert('Error! please try latter');
      return throwError(error);
     });  
}
getWorkInfo(){
  this.loadingWork=true;
  this.myservice.getWorkInfo(this.employee.employeeId).subscribe((res:WorkInfo[])=> {      
    this.workInfo = res[0]; 
    this.loadingWork=false;
    console.log('work info',this.workInfo);
      },error=>{
        this.loadingWork=false;
    alert('Error! please try latter');
      return throwError(error);
     });  
}
getpersonalInfo(){
  this.loadingPersonal=true;
  this.myservice.getPersonalInfo(this.employee.employeeId).subscribe((res:PersonalInfo[])=> {      
    this.personalInfo = res[0]; 
    this.loadingPersonal=false;
    console.log('personal info',this.personalInfo);
      },error=>{
        this.loadingPersonal=false;
    alert('Error! please try latter');
      return throwError(error);
     });  
}
getSummary(){
  this.loadingSummary=true;
  this.myservice.getSummary(this.employee.employeeId).subscribe((res:Summary[])=> {      
    this.summary = res[0]; 
    this.loadingSummary=false;
    console.log('summary',this.summary);
      },error=>{
        this.loadingSummary=false;
    alert('Error! please try latter');
      return throwError(error);
     });  
}
upload_image(){
  localStorage.setItem('img','image');
  this.router.navigateByUrl('/forms'); 
}
makePdf() { 
  var data = document.getElementById('report');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
console.log(imgHeight);
var heightLeft = imgHeight;

const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf("l", "pt", "letter"); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save(this.employee.firstName+'_report.pdf'); // Generated PDF
});
}
    getEmployeeImage() {
        this.myservice.getImage(this.employee.employeeId).subscribe((res: EmployeeImage[]) => {

            this.employeeImage = res[0];
            console.log('image detailsdfg', this.employeeImage);
            if (this.employeeImage == undefined) {
                this.no_image = true;
                if (this.employee.gender.toUpperCase() == 'MALE') {
                    this.imgURL = 'assets/images/default-male.png';
                } else if (this.employee.gender.toUpperCase() == 'FEMALE') {
                    this.imgURL = 'assets/images/default-female.jpg';
                }
            } else {
                console.log('image details', this.employeeImage);
                //  this.imgURL='https://usmand.pythonanywhere.com'+this.emp_img_details.employeeImage;
            }

        }, error => {

            console.log('error in getting image');
            return throwError(error);
        });
    }
}
