import { Employee } from "./employee";
import { Education } from "./education";
import { Experience } from "./experience";
import { Summary } from "./summary";
import { PersonalInfo } from "./personal-info";
import { WorkInfo } from "./work-info";
export class Details {
    employeeInfo:Employee;
    employeeEdu:Education[];
    employeeExp:Experience[];
    employeeSummary:Summary;
    employeePersonalInfo:PersonalInfo;
    employeeWorkInfo:WorkInfo;
}
