import { Component, OnInit,OnDestroy } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { throwError } from 'rxjs';
import { Employee } from 'src/app/ServiceUrlModel/employee';
import { PersonalInfo } from 'src/app/ServiceUrlModel/personal-info';
import { WorkInfo } from 'src/app/ServiceUrlModel/work-info';
import { Summary } from 'src/app/ServiceUrlModel/summary';
import { Experience } from 'src/app/ServiceUrlModel/experience';
import { Details } from 'src/app/ServiceUrlModel/details';
import { Education } from 'src/app/ServiceUrlModel/education';
import { ApiServiceService } from 'src/app/ServiceUrlModel/api-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profilemage } from 'src/app/ServiceUrlModel/profilemage';
import { EmployeeImage } from '../../ServiceUrlModel/employee-image';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit, OnDestroy {
  newLocation;
  public imagePath;
  upload_image=false;
    base64textString;
    getbase64textString;
    employeeImage: EmployeeImage;
    maxsize;
  imgURL: any;
  uploadForm: FormGroup; 
  employeeId;
  selectedFile: File;
  btnDisabled = true;
  loading;
  newImage: Profilemage;
  editMode=false;
  isEducationFilled=false;
  isExperienceFilled=false;
  newDesignation;
  saveEdu=false;
  saveExp=false;
  saveWork=false;
  savePersonal=false;
  saveSumm=false;
  addNewLocation=false;
  addNewDesignation=false;
    employee:Employee;
    employeeRes:Employee;
  totalRecords;
  personalInfo:PersonalInfo;
  workInfo: WorkInfo;
  summary: Summary;
  maritalStatus=false;
  locations = ['New Delhi', 'Gurgao', 'Noida', 'Bangaluru'];
  departments=['HR','A/C','IT'];
  reportingsTo=['Team Lead','Project Manager','HR Manager','Director'];
  sources=['Naukri.com','jobs.com','Employee reference'];
  designations=['CEO','MD','Project Manager','developer','Senior developer','Network Admin','HR'];
  statuses=['Active','Terminated','Decreased','Resigned'];
  empTypes=['Permanent','On Contract','Trainee','Temporary'];
  roles=['Admin','Team member','Manager','Director'];
name='';
fname='';
dt=true;
sal=false;
personal=false;
edu=false;
profile_image=false;
exp=false;
work=false;
summary_details=false;
private fieldArrayExperience: Array<Experience> = [];
private arrayExperience: Array<Experience> = [];
    private newAttributeExperience: Experience;
    private employeeDetailInfo:Details;
    private fieldArrayEducation: Array<Education> = [];
    private arrayEducation: Array<Education> = [];
    private newAttributeEducation: Education;

    
  constructor(private myservice: ApiServiceService,private router:Router,
      private formBuilder: FormBuilder) {
      this.employeeImage = new EmployeeImage;
    this.employeeDetailInfo=new Details;
    this.newAttributeExperience = new Experience;
    this.newAttributeEducation = new Education;
    this.employee= new Employee;
  
    this.personalInfo = new PersonalInfo;
    this.summary=new Summary;
    this.workInfo= new WorkInfo;
  }

  ngOnInit() {
    
    document.getElementById('btn-basic').style.color = "#FF8C00";
   //this.totalRecords = +localStorage.getItem('totalRecords');
   if(JSON.parse(localStorage.getItem('employeeInfo'))){
     this.employee=JSON.parse(localStorage.getItem('employeeInfo'));//used in updating employee
   this.employeeId=this.employee.employeeId;
   this.editMode=true;
   this.newAttributeEducation.employeeId= this.employee.employeeId;
   this.newAttributeExperience.employeeId= this.employee.employeeId;
   this.workInfo.employeeId= this.employee.employeeId;
   this.personalInfo.employeeId= this.employee.employeeId;
   this.summary.employeeId= this.employee.employeeId;
    }else{
      this.totalRecords = +localStorage.getItem('totalRecords');
   this.employee.employeeId=this.totalRecords + 1;//used in creating employee
   
  }
  if(localStorage.getItem('img')=='image'){
    this.showForm('profile_image');
  }
 
  }
  ngOnDestroy(){
    localStorage.removeItem('edit_employee');
  }
  
checkMaritalStatus(){
  this.maritalStatus=false;
}
  showForm(details){
if(details==='basicInfo'){
  document.getElementById('btn-basic').style.color = "#FF8C00";
  document.getElementById('btn-edu').style.color = "#000000";
  document.getElementById('btn-work').style.color = "#000000";
  document.getElementById('btn-exp').style.color ="#000000";
  document.getElementById('btn-psnl').style.color = "#000000";
  document.getElementById('btn-smry').style.color = "#000000";
  document.getElementById('btn-image').style.color = "#000000";
  this.dt=true;
  this.summary_details=false;
  this.work=false;
  this.exp=false;
  this.edu=false;
  this.sal=false;
  this.personal=false;
  this.profile_image=false;
}else if(details==='edu'){
  document.getElementById('btn-basic').style.color = "#000000";
  document.getElementById('btn-edu').style.color = "#FF8C00";
  document.getElementById('btn-work').style.color = "#000000";
  document.getElementById('btn-exp').style.color ="#000000";
  document.getElementById('btn-psnl').style.color = "#000000";
  document.getElementById('btn-smry').style.color = "#000000";
  document.getElementById('btn-image').style.color = "#000000";
  this.dt=false;
  this.personal=false;
  this.summary_details=false;
  this.work=false;
  this.exp=false;
  this.edu=true;
  this.sal=false;
  this.profile_image=false;
}else if(details==='sal'){
  document.getElementById('btn-basic').style.color = "#000000";
  document.getElementById('btn-edu').style.color = "#FF8C00";
  document.getElementById('btn-work').style.color = "#000000";
  document.getElementById('btn-exp').style.color ="#000000";
  document.getElementById('btn-psnl').style.color = "#000000";
  document.getElementById('btn-smry').style.color = "#000000";
  document.getElementById('btn-image').style.color = "#000000";
  this.dt=false;
  this.summary_details=false;
  this.work=false;
  this.exp=false;
  this.edu=false;
  this.sal=true;
  this.personal=false;
  this.profile_image=false;
}else if(details==='summary'){
  document.getElementById('btn-basic').style.color = "#000000";
  document.getElementById('btn-edu').style.color = "#000000";
  document.getElementById('btn-work').style.color = "#000000";
  document.getElementById('btn-exp').style.color ="#000000";
  document.getElementById('btn-psnl').style.color = "#000000";
  document.getElementById('btn-smry').style.color = "#FF8C00";
  document.getElementById('btn-image').style.color = "#000000";
  this.dt=false;
  this.summary_details=true;
  this.work=false;
  this.exp=false;
  this.edu=false;
  this.sal=false;
  this.personal=false;
  this.profile_image=false;
}else if(details==='exp'){
  document.getElementById('btn-basic').style.color = "#000000";
  document.getElementById('btn-edu').style.color = "#000000";
  document.getElementById('btn-work').style.color = "#000000";
  document.getElementById('btn-exp').style.color ="#FF8C00";
  document.getElementById('btn-psnl').style.color = "#000000";
  document.getElementById('btn-smry').style.color = "#000000";
  document.getElementById('btn-image').style.color = "#000000";
  this.dt=false;
  this.summary_details=false;
  this.work=false;
  this.exp=true;
  this.edu=false;
  this.sal=false;
  this.personal=false;
  this.profile_image=false;
}else if(details==='work'){
  document.getElementById('btn-basic').style.color = "#000000";
  document.getElementById('btn-edu').style.color = "#000000";
  document.getElementById('btn-work').style.color = "#FF8C00";
  document.getElementById('btn-exp').style.color ="#000000";
  document.getElementById('btn-psnl').style.color = "#000000";
  document.getElementById('btn-smry').style.color = "#000000";
  document.getElementById('btn-image').style.color = "#000000";
  this.dt=false;
  this.summary_details=false;
  this.work=true;
  this.exp=false;
  this.edu=false;
  this.sal=false;
  this.personal=false;
  this.profile_image=false;
}else if(details==='personal'){
  document.getElementById('btn-basic').style.color = "#000000";
  document.getElementById('btn-edu').style.color = "#000000";
  document.getElementById('btn-work').style.color = "#000000";
  document.getElementById('btn-exp').style.color ="#000000";
  document.getElementById('btn-psnl').style.color = "#FF8C00";
  document.getElementById('btn-smry').style.color = "#000000";
  document.getElementById('btn-image').style.color = "#000000";
  this.dt=false;
  this.summary_details=false;
  this.work=false;
  this.exp=false;
  this.edu=false;
  this.sal=false;
  this.personal=true;
  this.profile_image=false;
}else if(details==='profile_image'){
  document.getElementById('btn-image').style.color = "#FF8C00";
  document.getElementById('btn-basic').style.color = "#000000";
  document.getElementById('btn-edu').style.color = "#000000";
  document.getElementById('btn-work').style.color = "#000000";
  document.getElementById('btn-exp').style.color ="#000000";
  document.getElementById('btn-psnl').style.color = "#000000";
  document.getElementById('btn-smry').style.color = "#000000";
  this.dt=false;
  this.summary_details=false;
  this.work=false;
  this.exp=false;
  this.edu=false;
  this.sal=false;
  this.personal=false;
  this.profile_image=true;
}
  }
  saveBasicInfo(){  
    console.log(this.employee);  
    this.myservice.addEmployee(this.employee,this.employeeId).subscribe((res)=>{
     // this.employeeRes=res;
      this.newAttributeEducation.employeeId= this.employeeId;
   this.newAttributeExperience.employeeId= this.employeeId;
   this.workInfo.employeeId= this.employeeId;
   this.personalInfo.employeeId= this.employeeId;
   this.summary.employeeId= this.employeeId;
   this.showForm('profile_image');
           },error=>{
            alert('could not submitt! Error');
           return throwError(error);
          });
  
   
  }
  addFieldValueEdu() {
    
    if(this.checkProperties(this.newAttributeEducation)==false){
      alert('please fill all fields');
      return;
    }
 this.isEducationFilled=true;
      this.saveSingleEduaction(this.newAttributeEducation);
   this.fieldArrayEducation.push(this.newAttributeEducation)
   console.log('education details-->',this.fieldArrayEducation);
   this.newAttributeEducation = new Education;
   this.newAttributeEducation.employeeId= this.employee.employeeId;
  }
  deleteFieldValueEdu(index) {
    this.fieldArrayEducation.splice(index, 1);
    }

  saveSingleEduaction(newAttributeEducation: Education): boolean  {
        this.myservice.addEducation(newAttributeEducation).subscribe(res => {
            this.saveEdu = true;
            alert('education saved');
           
          //  console.log('education res-->', res);
          //  this.showForm('work');
        }, error => {
            alert('could not submitt! Error');
                return throwError(error);
               
            });
        return this.saveEdu;
       
    }
  saveEduactionDetails(){
    
    if(this.checkProperties(this.employee)==false){
      alert('please fill basic info first!');
      this.showForm('basicInfo');
     return;
    }
    if(this.checkProperties(this.newAttributeEducation)==false){
      alert('please fill all fields!');
      //this.showForm('basicInfo');
      return;
    } else {
     
        if (this.saveSingleEduaction(this.newAttributeEducation) == true) {
            this.showForm('work');
        }
       
     
    }
   
        
    }// end of save education

    saveSingleExperience(newAttributeExperience: Experience): boolean {
        this.myservice.addExperience(newAttributeExperience).subscribe(res => {
            this.saveExp = true;
            alert('experience  saved');

            //  console.log('education res-->', res);
            //  this.showForm('work');
        }, error => {
            alert('could not submitt! try latter');
            return throwError(error);

        });
        return this.saveExp;

    }
  addFieldValueExp() {
    
      if (this.checkProperties(this.newAttributeExperience) == false) {
          console.log('education details-->', this.newAttributeExperience);
          alert('please fill all fields');
          return;
      } 

      this.saveSingleExperience(this.newAttributeExperience);
        this.isEducationFilled=true;

   this.fieldArrayExperience.push(this.newAttributeExperience)
   console.log('education details-->',this.fieldArrayExperience);
   this.newAttributeExperience = new Experience;
   this.newAttributeExperience.employeeId= this.employee.employeeId;
}
deleteFieldValueExp(index) {
  this.fieldArrayExperience.splice(index, 1);
}
saveExperience(){
    if(this.checkProperties(this.employee)==false){
      alert('please fill basic info first!');
      this.showForm('basicInfo');
     return;
    }
    if(this.checkProperties(this.newAttributeExperience)==false){
      alert('please fill all fields!');
  
      return;
    }else{
        if (this.saveSingleExperience(this.newAttributeExperience) == true) {
            this.showForm('personal');
        }

    }
   
    //console.log('array Experience-->',this.arrayExperience);
    //this.myservice.addExperience(this.arrayExperience).subscribe((res:Experience[])=>{
    //  this.saveExp=true;
    // console.log('experience res-->',res);
    // this.showForm('personal');
    //       },error=>{
    //        alert('could not submitt! Error');
    //       return throwError(error);
    //      });
    
  }
  savePersonalInfo(){
    this.personalInfo.employeeId=this.employee.employeeId;
    if(this.checkProperties(this.employee)==false){
      alert('please fill basic info first!');
      this.showForm('basicInfo');
      return;
    }
    console.log(this.personalInfo);
    this.myservice.addPernonalInfo(this.personalInfo).subscribe((res:PersonalInfo)=>{
      this.savePersonal=true;
      this.showForm('summary');
            },error=>{
             alert('could not submitt! Error');
            return throwError(error);
           });
  
    
   
  }
  saveSummary(){
    this.summary.employeeId=this.employee.employeeId;
    if(this.checkProperties(this.employee)==false){
      alert('please fill basic info first!');
      this.showForm('basicInfo');
      return;
    }
   console.log('summary-->',this.summary);
   this.myservice.addSummary(this.summary).subscribe((res:Summary)=>{
    this.saveSumm=true;
    this.router.navigate(['/tables']);
          },error=>{
           alert('could not submitt! Error');
          return throwError(error);
         });

  
    //this.saveAll();
  }
  saveWorkInfo(){
    this.workInfo.employeeId=this.employee.employeeId;
    console.log('workInfo-->',this.workInfo);
    if(this.checkProperties(this.employee)==false){
      alert('please fill basic info first!');
      this.showForm('basicInfo');
      return;
    }
    this.myservice.addWorkInfo(this.workInfo).subscribe((res:WorkInfo)=>{
      this.saveWork=true;
    },error=>{
     alert('could not submitt! Error');
    return throwError(error);
   });
    this.showForm('exp');
  }
  saveAll(){
    if(this.checkProperties(this.employee)==false){
      alert('please fill basic info first!');
      this.showForm('basicInfo');
      return;
    }
    this.employeeDetailInfo.employeeEdu=this.fieldArrayEducation;
    this.employeeDetailInfo.employeeExp=this.fieldArrayExperience;
    this.employeeDetailInfo.employeeWorkInfo=this.workInfo;
    this.employeeDetailInfo.employeeSummary=this.summary;
    this.employeeDetailInfo.employeePersonalInfo=this.personalInfo;
    this.employeeDetailInfo.employeeInfo= this.employee;
    console.log('details-->',this.employeeDetailInfo);
    
  }
  submitAll(){
    console.log('submit all',this.employee);
    if(this.fieldArrayEducation.length==0 ||
      this.fieldArrayExperience.length==0 ||
      this.employee==undefined ||
      this.personalInfo==undefined ||
      this.summary==undefined ||
      this.workInfo==undefined){
      alert('please fill all form');
      return;
    }else{
      this.saveAll();
    }
  }
  addLocation(){
    console.log('dfgsd');

    this.addNewLocation=!this.addNewLocation;

  }
  locationAdded(){
    this.locations.push(this.newLocation);
    console.log(this.locations);
    this.addNewLocation=!this.addNewLocation;
  }
  addLocationArray(){
   // this.locations.push(this.newLocation);
  }
  addDesignation(){
    console.log('dfgsd');

    this.addNewDesignation=!this.addNewDesignation;

  }
  designationAdded(){
    this.designations.push(this.newDesignation);
    console.log(this.designations);
    this.addNewDesignation=!this.addNewDesignation;
  }
  public checkProperties(obj){
    for (var key in obj) {
      if (obj[key] == null || obj[key] == '')
          return false;
  }
  return true;

  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    this.btnDisabled=false;
  }
  //onUpload() {
  //  // this.http is the injected HttpClient
  //  const uploadData = new FormData();
  //  uploadData.append('employeeImage', this.selectedFile);
  //  uploadData.append('employeeId', String(this.employee.employeeId));
  //  this.myservice.addEmpImage(uploadData).subscribe((res: any)=> {
  //    console.log(res)
  //    alert('successfully uploaded');
  //    this.upload_image=true;
  //    this.showForm('edu');
  //  },error=>{
  //    alert('could not uploaded! Error');
  //   return throwError(error);
  //  });
  //}
    onUploadImage() {
        this.employeeImage.employeeId = this.employee.employeeId;
        console.log('your image-->', this.employeeImage);
        this.myservice.addEmployeeImage(this.employeeImage).subscribe(res => {
           // console.log(res)
            alert('successfully uploaded');
          //  this.upload_image = true;
           // this.showForm('edu');
        }, error => {
            alert('could not uploaded! Error');
            return throwError(error);
        });
    }
    handleFileSelect(evt) {
        var files = evt.target.files;
        var file = files[0];
        this.maxsize = file.size;
        if (file.size > 1000000) {
            // checking size here - 2MB
           // this.maxsize = file.size;
            return;
        }

        if (files && file) {
            var reader = new FileReader();

            reader.onload = this.handleReaderLoaded.bind(this);

            reader.readAsBinaryString(file);
        }
    }



    handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
       // console.log(btoa(binaryString));
        
        this.employeeImage.blobData = this.base64textString;
    }
    getEmployeeImage() {
        this.myservice.getEmployeeImage('1').subscribe((res: EmployeeImage) => {
            // console.log(res)
            // console.log(res);
            this.employeeImage = res;
            this.getbase64textString = this.employeeImage.blobData;
            console.log(this.employeeImage);
          //  alert('successfully uploaded');
            //  this.upload_image = true;
            // this.showForm('edu');
        }, error => {
            alert('could not get image blob! Error');
            return throwError(error);
        });
    }
}


