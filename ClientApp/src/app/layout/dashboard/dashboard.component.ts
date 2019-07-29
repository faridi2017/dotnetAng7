import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { throwError, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/ServiceUrlModel/api-service.service';
import { Employee } from 'src/app/ServiceUrlModel/employee';
import { EmpCount } from '../../ServiceUrlModel/emp-count';
import { Expcount } from '../../ServiceUrlModel/expcount';

export class Attrition {
    theyear: number;
    empLeft: number;
    newJoinee: number;
    totalEOY: number;
}
  

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public responseData1: any;
    public responseData2: any;
    public responseData3: any;
    public responseData4: any;
    experienceCount: Expcount[];
    newJoinee_list = [];
    empLeft_list = [];
    totalEOY_list = [];
    pi_chart_list: number[];
    public loading = false;
    public attrition_data: Attrition[];
    maleCount=0;
    femaleCount=0;
    totalCount;
    data_exp_chart;
    data_attrition_chart;
    loggedin=localStorage.getItem('isLoggedin');
    employees:Employee[];
    // bar chart
    public barChartOptions: any = {
        //scaleShowVerticalLines: false,
        scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
        responsive: true,
        legend: {
            onClick: null
        }
    };
    public pieChartOptions:any = {
     legend: {
       onClick: null
   }
   }
    public barChartLabels: number[];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[];
    //  = [
    //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    // ];

    // Doughnut
    public doughnutChartLabels: string[];
    public doughnutChartData: number[];
    public doughnutChartType: string;

   
    
    // Pie
    public pieChartLabels: string[];
    public pieChartData: number[];
    public pieChartType: string;

    
    // lineChart
    public lineChartData: Array<any>;
    public lineChartLabels: Array<any>;
    public lineChartOptions: any = {
        responsive: true,
        legend: {
            onClick: null
        }
    };
    public doughnutChartOptions: any = {
        responsive: true,
        legend: {
            onClick: null
        }
    };
    public donutColors=[
        {
          backgroundColor: [
            'rgba(110, 114, 20, 1)',
            'rgba(252, 162, 249, 1)'
            
        ]
        }
      ];
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(255, 255, 102, 1)',
            pointBackgroundColor: 'rgba(252, 162, 249, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(255,51,51,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(0,102,0,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

   

    constructor(private router:Router, private myservice:ApiServiceService) {
        // if(!localStorage.getItem('user_name')){
        //     this.router.navigate(['/login'])
        //     }
        this.pi_chart_list=[]
        this.employees = [];
        this.attrition_data = [];
        this.barChartLabels = [];
        this.experienceCount = [];
        this.pieChartLabels=[];
    this.pieChartData=[];
    }

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.doughnutChartType = 'doughnut';
        this.pieChartType = 'pie';
      
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.loading = true;
        this.myservice.empCount().subscribe((res: EmpCount[]) => {
                
               this.totalCount=res[0].empcount;
            localStorage.setItem('totalRecords', String(res[0].empcount));
                this.loading = false;
                console.log(localStorage.getItem('totalRecords'));
               },error=>{
                this.loading = false;
                      console.error('Error in calling get employees Api');
                   // alert('Error in calling Blog Api');
                  return throwError(error);
                 });  
                 this.myservice.getEmployees().subscribe((res:Employee[])=> {
            
                    this.employees = res;
                    this.employees.forEach(element => {
                        if(element.gender=='Male'){
                        this.maleCount++;
                        }else{
                         this.femaleCount++;
                        }
                    });
                    this.doughnutChartLabels=['Male','Female'];
                    this.doughnutChartData=[this.maleCount,this.femaleCount];
                 
                      },error=>{
                     this.loading = false;
                          console.error('Error in calling get employees Api');
                       // alert('Error in calling Blog Api');
                      return throwError(error);
                     });   

        this.myservice.getExperieceChart().subscribe((res: Expcount[]) => {
            this.pieChartType = 'pie';
            this.experienceCount = res;
            
            console.log('pi chart data-->', this.experienceCount);
            for (let i = 0; i < this.experienceCount.length; i++) {
                this.pieChartLabels.push(this.experienceCount[i].experience);
                this.pi_chart_list.push(this.experienceCount[i].expCount);
           
            }
            console.log('piD', this.pi_chart_list);
            console.log('pil', this.pieChartLabels);
                     
                          },error=>{
                         this.loading = false;
                              console.error('Error in calling get employees Api');
                           // alert('Error in calling Blog Api');
                          return throwError(error);
        });

        this.myservice.getAttritionChart().subscribe((res: Attrition[]) => {
            
            this.attrition_data = res;
            console.log('attrition data here', this.attrition_data);
            for (let i = 0; i < this.attrition_data.length; i++) {
                this.barChartLabels.push(this.attrition_data[i].theyear);
                this.newJoinee_list.push(this.attrition_data[i].newJoinee);
                this.empLeft_list.push(this.attrition_data[i].empLeft);
                this.totalEOY_list.push(this.attrition_data[i].totalEOY);
            }
            this.barChartData = [
                { data: this.newJoinee_list, label: 'New Joinee' },
                { data: this.empLeft_list, label: 'Employee left' }
            ];
            this.lineChartData = [
                { data: this.totalEOY_list, label: 'Number of Employees' },
                { data: this.newJoinee_list, label: 'New Joinings' },
                { data: this.empLeft_list, label: 'Employee left' }
            ];
            this.lineChartLabels = this.barChartLabels;

        }, error => {
            this.loading = false;
            console.error('Error in calling get attrition chart Api');

            return throwError(error);
        });
          
    }
    public drawLineChart(){
        this.lineChartLegend = true;
        this.lineChartType = 'line';    
    }
    gotoTableModule(){
        this.router.navigate(['/tables']); 
    }
    gotoReportModule(){
        this.router.navigate(['/reports']);
    }
    multiple_api_request(){
        this.loading=true;
        this.myservice.requestDataFromMultipleSources().subscribe(responseList => {
            this.responseData1 = responseList[0];
            this.responseData2 = responseList[1];
            this.responseData3 = responseList[2];
            this.responseData4 = responseList[2];
            this.loading=true;
            console.log('multiplr response-->',this.responseData1,this.responseData2,this.responseData3);
        },error=>{
            this.loading = false;
                 console.error('Error in calling get employees Api');
              // alert('Error in calling Blog Api');
             return throwError(error);
            });
    }

}

