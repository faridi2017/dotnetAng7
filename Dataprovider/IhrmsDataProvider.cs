using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hrms_cit.Models;

namespace hrms_cit.Dataprovider
{
    public interface IhrmsDataProvider
    {
        Task<IEnumerable<Employee>> GetEmployees();
        Task<IEnumerable<EmpCount>> GetEmployeesCount();
        Task<Employee> GetEmployee(string EmployeeId);

        Task AddEmployee(Employee usr1);

        Task UpdateEmployee(Employee usr1);

        Task DeleteEmployee(string EmployeeId);

        //Employee Image
        Task<IEnumerable<EmployeeImage>> GetEmployeeImage(string EmployeeId);
        Task AddEmployeeImage(EmployeeImage usr1);
        Task UpdateEmployeeImage(EmployeeImage usr1);


        //WorkInfo
        Task<IEnumerable<WorkInfo>> GetEmployeeWorkInfo(string EmployeeId);
        Task AddEmployeeWorkInfo(WorkInfo usr1);
        Task UpdateEmployeeWorkInfo(WorkInfo usr1);

        //PersonalInfo
        Task<IEnumerable<PersonalInfo>> GetEmployeePersonalInfo(string EmployeeId);
        Task AddEmployeePersonalInfo(PersonalInfo usr1);
        Task UpdateEmployeePersonalInfo(PersonalInfo usr1);

        //Summary
        Task<IEnumerable<Summary>> GetEmployeeSummary(string EmployeeId);
        Task AddEmployeeSummary(Summary usr1);
        Task UpdateEmployeeSummary(Summary usr1);

        //Education
        Task<IEnumerable<Education>> GetEmployeeEducation(string EmployeeId);
        Task AddEmployeeEducation(Education usr1);
        Task UpdateEmployeeEducation(Education usr1);

        //Experience
        Task<IEnumerable<Experience>> GetEmployeeExperience(string EmployeeId);
        Task AddEmployeeExperience(Experience usr1);
        Task UpdateEmployeeExperience(Experience usr1);

        //EmpHistory
        Task<IEnumerable<EmpHistory>> GetEmployeeEmpHistory(string EmployeeId);
        Task AddEmployeeEmpHistory(EmpHistory usr1);
        Task UpdateEmployeeEmpHistory(EmpHistory usr1);

        //Attrition
        //  Task<Attrition> GetEmployeeAttrition();
        Task<IEnumerable<Attrition>> GetEmployeeAttrition();

        //ExperienceTier
       
        Task<IEnumerable<ExperieceTier>> GetExperienceTier();
        Task<LoginResponse> verifyUser(LoginUser usr1);
    }
}
