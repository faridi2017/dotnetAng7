import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from './url';
import { Details } from './details';
import { Employee } from './employee';
import { Education } from './education';
import { Experience } from './experience';
import { WorkInfo } from './work-info';
import { PersonalInfo } from './personal-info';
import { Summary } from './summary';
import { forkJoin } from 'rxjs';  // RxJS 6 syntax
import { SendEmail } from './send-email';
import { ContactUSTemplate } from './contact-ustemplate';
import { EmployeeImage } from './employee-image';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptionsL = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
const httpOptionsFileUpload = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data'})
};
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  
  public getEmployees():Observable<any> {
    console.log('get employee API called');
    return this.http.get(Url.emp,httpOptions);
  } // 

  public getEducation(employeeId):Observable<any> {
    console.log('get education API called');
    return this.http.get(Url.education+employeeId,httpOptions);
  } // 
  public getWorkInfo(employeeId):Observable<any> {
    console.log('get work API called');
    return this.http.get(Url.work+employeeId,httpOptions);
  } // 
  public getExperience(employeeId):Observable<any> {
    console.log('get experience API called');
    return this.http.get(Url.experience+employeeId,httpOptions);
  } // 
  public getPersonalInfo(employeeId):Observable<any> {
    console.log('get personal info API called');
    return this.http.get(Url.personalInfo+employeeId,httpOptions);
  } // 
  public getSummary(employeeId):Observable<any> {
    console.log('get summary API called');
    return this.http.get(Url.summary+employeeId,httpOptions);
  } // 
  


  public getAttritionChart():Observable<any> {
    console.log('get attrition rate data api');
    return this.http.get(Url.attrition_chart);
  } // 

  public getExperieceChart():Observable<any> {
    console.log('get experiece chart data api');
    return this.http.get(Url.exp_chart);
  } // 
  public empCount():Observable<any> {
    console.log('get employee count API called');
    return this.http.get(Url.empCount);
  } // 
  public addEmployee(myObject:Employee,employeeId):Observable<any> {
    console.log('add update employee API called');
    if(employeeId==null){
      return this.http.post(Url.emp,myObject,httpOptions);
    }else{
      return this.http.put(Url.emp+employeeId,myObject,httpOptions);
    }
    
  } // 
  public addEducation(myObject:Education):Observable<any> {
    console.log('add education API called');
    return this.http.post(Url.education,myObject,httpOptions);
  } // 
  public addExperience(myObject:Experience):Observable<any> {
    console.log('add experience API called');
    return this.http.post(Url.experience,myObject,httpOptions);
  } // 
  public addWorkInfo(myObject:WorkInfo):Observable<any> {
    console.log('add workinfo API called');
    return this.http.post(Url.work,myObject,httpOptions);
  } // 
  public addPernonalInfo(myObject:PersonalInfo):Observable<any> {
    console.log('add Personal info API called');
    return this.http.post(Url.personalInfo,myObject,httpOptions);
  } //
  public addSummary(myObject:Summary):Observable<any> {
    console.log('add Summary info API called');
    return this.http.post(Url.summary,myObject,httpOptions);
  } //  
  public updateEmployee(myObject:Employee):Observable<any> {
    console.log('update employee API called');
    return this.http.put(Url.emp + '?employeeId='+String(myObject.employeeId),myObject,httpOptions);
  } //
  public deleteEmployee(employeeId):Observable<any> {
    console.log('delete employee API called');
    return this.http.delete(Url.emp+employeeId,httpOptions);
  } //  

  public login(userinfo:any):Observable<any> {
    console.log('Login API called');
    return this.http.post(Url.Login,userinfo,httpOptions);
} // end of login


public requestDataFromMultipleSources(): Observable<any[]> {
  let response1 = this.http.get('https://usmand.pythonanywhere.com/lms/employee/');
  let response2 = this.http.get('https://usmand.pythonanywhere.com/lms/emp/count/');
  let response3 = this.http.get('https://usmand.pythonanywhere.com/lms/attrition/');
  let response4 = this.http.get('https://usmand.pythonanywhere.com/lms/expData/');
  // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
  ///lms/expData/
  return forkJoin([response1, response2, response3,response4]);
}

public addEmpImage(formdata: FormData):Observable<any> {
  console.log('upload image  API called');
    return this.http.post(Url.image_api,formdata);
    } //
    public addEmployeeImage(ImageObj: EmployeeImage): Observable<any> {
        console.log('upload image  API called');
        return this.http.post(Url.addEmpImage, ImageObj, httpOptions);
    } //
    public getEmployeeImage(employeeId): Observable<any> {
        console.log('get image  API called');
        return this.http.get(Url.addEmpImage + employeeId, httpOptions);
    } //
public getImage(employeeId):Observable<any> {
  console.log('get employee image API called');
    return this.http.get(Url.image_api+employeeId,httpOptions);
} // 

public send_email(myObject:SendEmail):Observable<any> {
  console.log('send emal using email js API called',myObject);
 let emailjs_api='https://api.emailjs.com/api/v1.0/email/send';// sending email using emailjs api
  return this.http.post(emailjs_api,myObject,httpOptions);
    } //

    public getdotnetapi(): Observable<any> {
        console.log('get dot net API called');
        return this.http.get('https://localhost:44355/api/SampleData/WeatherForecasts/', httpOptions);
    } //
}
