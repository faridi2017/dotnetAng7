import { Component, OnInit, OnDestroy} from '@angular/core';
import { ApiServiceService } from 'src/app/ServiceUrlModel/api-service.service';
import { throwError, Subject } from 'rxjs';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import { Expcount } from '../../../ServiceUrlModel/expcount';
import { EmpCount } from '../../../ServiceUrlModel/emp-count';

export class Attrition {
    theyear: number;
    empLeft:number;
    newJoinee:number;
    totalEOF:number;
     }
     export class ExperienceList {
      numberOfEmp: number;
     expLabel:string;
       }

export interface Experiencechart {
label:string[];
data:number[];
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {

    experienceCount: Expcount[];
  public expChartData:ExperienceList[];
    public attrition_data: Attrition[];
  public new_exp_data:ExperienceList;
loading=false;
loadingExperience=false;
  constructor(private myservice:ApiServiceService) {
      this.experienceCount = [];
      this.expChartData = [];
      this.attrition_data = [];
   }

  ngOnInit() {
    this.loading=true;
    this.myservice.getAttritionChart().subscribe((res:Attrition[])=> {
        console.log('attrition dasta here',res);
        this.attrition_data = res;
          this.loading=false;
      
                      },error=>{
                     this.loading = false;
                          console.error('Error in calling get attrition chart Api');
                     
                      return throwError(error);
                     });
    this.loadingExperience=true;
  
      this.myservice.getExperieceChart().subscribe((res: Expcount[]) => {
          this.experienceCount = res;
          this.loadingExperience = false;

      }, error => {
              this.loading = false;
              this.loadingExperience = false;
          console.error('Error in calling get employees Api');
          // alert('Error in calling Blog Api');
          return throwError(error);
      });

   
  }
  ngOnDestroy() { 
	 console.log('ng destroy called');
  }
  makePdf() { 
    var data = document.getElementById('report');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;

const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('report.pdf'); // Generated PDF
});
  }
}
