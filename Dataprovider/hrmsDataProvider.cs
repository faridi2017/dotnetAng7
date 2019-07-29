using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hrms_cit.Models;
using Dapper;
using System.Data;
using System.Data.SqlClient;
namespace hrms_cit.Dataprovider
{
    public class hrmsDataProvider : IhrmsDataProvider
    {
        private readonly string connectionString = "Server=192.168.0.144;Database=DOTNETCOREAS7;User Id=legal;Password=legal";

        private SqlConnection sqlConnection;
        //Employee
        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Select");
                return await sqlConnection.QueryAsync<Employee>(
                    "spSelectInsertUpdateDelete",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public async Task<IEnumerable<EmpCount>> GetEmployeesCount()
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                return await sqlConnection.QueryAsync<EmpCount>("spGetEmpcount",null,commandType: CommandType.StoredProcedure);
            }
        }
        public async Task AddEmployee(Employee user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@FirstName", user.FirstName);
                dynamicParameters.Add("@LastName", user.LastName);
                dynamicParameters.Add("@NickName", user.NickName);
                dynamicParameters.Add("@Gender", user.Gender);
                dynamicParameters.Add("@Status", user.Status);
                dynamicParameters.Add("@ContactNumber", user.ContactNumber);
                dynamicParameters.Add("@Email", user.Email);
                

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDelete",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public async Task DeleteEmployee(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Delete");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDelete",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public async Task<Employee> GetEmployee(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QuerySingleOrDefaultAsync<Employee>(
                    "spSelectInsertUpdateDelete",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }



        public async Task UpdateEmployee(Employee user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@FirstName", user.FirstName);
                dynamicParameters.Add("@LastName", user.LastName);
                dynamicParameters.Add("@NickName", user.NickName);
                dynamicParameters.Add("@Gender", user.Gender);
                dynamicParameters.Add("@Status", user.Status);
                dynamicParameters.Add("@ContactNumber", user.ContactNumber);
                dynamicParameters.Add("@Email", user.Email);
                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDelete",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //Employee Image
        public async Task<IEnumerable<EmployeeImage>> GetEmployeeImage(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QueryAsync<EmployeeImage>(
                    "spSelectInsertUpdateDeleteEmpImage",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        public async Task AddEmployeeImage(EmployeeImage user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@BLOBData", user.blobData);
                
                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteEmpImage",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        
        


        public async Task UpdateEmployeeImage(EmployeeImage user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@BLOBData", user.blobData);
               
                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteEmpImage",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //Employee PersonalInfo
        public async Task AddEmployeePersonalInfo(PersonalInfo user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@BLOBData", user.mobile);
                dynamicParameters.Add("@EmployeeId", user.otherEmail);
                dynamicParameters.Add("@BLOBData", user.dob);
                dynamicParameters.Add("@EmployeeId", user.maritalStatus);
                dynamicParameters.Add("@BLOBData", user.address);
                dynamicParameters.Add("@EmployeeId", user.tags);

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteEmpPersonalInfo",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }


        public async Task<IEnumerable<PersonalInfo>> GetEmployeePersonalInfo(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QueryAsync<PersonalInfo>(
                    "spSelectInsertUpdateDeletePersonalInfo",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }



        public async Task UpdateEmployeePersonalInfo(PersonalInfo user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@BLOBData", user.mobile);
                dynamicParameters.Add("@EmployeeId", user.otherEmail);
                dynamicParameters.Add("@BLOBData", user.dob);
                dynamicParameters.Add("@EmployeeId", user.maritalStatus);
                dynamicParameters.Add("@BLOBData", user.address);
                dynamicParameters.Add("@EmployeeId", user.tags);
                

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeletePersonalInfo",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //Employee WorkInfo
        public async Task AddEmployeeWorkInfo(WorkInfo user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@reportingTo", user.reportingTo);
                dynamicParameters.Add("@department", user.department);
                dynamicParameters.Add("@dateOfJoining", user.dateOfJoining);
                dynamicParameters.Add("@sourceOfHire", user.sourceOfHire);
                dynamicParameters.Add("@seatingLocation", user.seatingLocation);
                dynamicParameters.Add("@location", user.location);
                dynamicParameters.Add("@designation", user.designation);
                dynamicParameters.Add("@employeeStatus", user.employeeStatus);
                dynamicParameters.Add("@employeeType", user.employeeType);
                dynamicParameters.Add("@workPhone", user.workPhone);
                dynamicParameters.Add("@extension", user.extension);
                dynamicParameters.Add("@empRole", user.empRole);

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteWorkInfo",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }


        public async Task<IEnumerable<WorkInfo>> GetEmployeeWorkInfo(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QueryAsync<WorkInfo>(
                    "spSelectInsertUpdateDeleteWorkInfo",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }



        public async Task UpdateEmployeeWorkInfo(WorkInfo user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@reportingTo", user.reportingTo);
                dynamicParameters.Add("@department", user.department);
                dynamicParameters.Add("@dateOfJoining", user.dateOfJoining);
                dynamicParameters.Add("@sourceOfHire", user.sourceOfHire);
                dynamicParameters.Add("@seatingLocation", user.seatingLocation);
                dynamicParameters.Add("@location", user.location);
                dynamicParameters.Add("@designation", user.designation);
                dynamicParameters.Add("@employeeStatus", user.employeeStatus);
                dynamicParameters.Add("@employeeType", user.employeeType);
                dynamicParameters.Add("@workPhone", user.workPhone);
                dynamicParameters.Add("@extension", user.extension);
                dynamicParameters.Add("@empRole", user.empRole);

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteWorkInfo",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //Employee Education
        public async Task AddEmployeeEducation(Education user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@institute", user.institute);
                dynamicParameters.Add("@course", user.course);
                dynamicParameters.Add("@doc", user.doc);
                dynamicParameters.Add("@stream", user.stream);
                dynamicParameters.Add("@notes", user.notes);
                dynamicParameters.Add("@interest", user.interest);

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteEducation",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }


        public async Task<IEnumerable<Education>> GetEmployeeEducation(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QueryAsync<Education>(
                    "spSelectInsertUpdateDeleteEducation",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }



        public async Task UpdateEmployeeEducation(Education user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@institute", user.institute);
                dynamicParameters.Add("@course", user.course);
                dynamicParameters.Add("@doc", user.doc);
                dynamicParameters.Add("@stream", user.stream);
                dynamicParameters.Add("@notes", user.notes);
                dynamicParameters.Add("@interest", user.interest);
              

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteEducation",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //Employee Experience
        public async Task AddEmployeeExperience(Experience user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@companyName", user.companyName);
                dynamicParameters.Add("@jobTitle", user.jobTitle);
                dynamicParameters.Add("@jobDescription", user.jobDescription);
                dynamicParameters.Add("@fromDate", user.fromDate);
                dynamicParameters.Add("@toDate", user.toDate);

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteExperience",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }


        public async Task<IEnumerable<Experience>> GetEmployeeExperience(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QueryAsync<Experience>(
                    "spSelectInsertUpdateDeleteExperience",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }



        public async Task UpdateEmployeeExperience(Experience user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@companyName", user.companyName);
                dynamicParameters.Add("@jobTitle", user.jobTitle);
                dynamicParameters.Add("@jobDescription", user.jobDescription);
                dynamicParameters.Add("@fromDate", user.fromDate);
                dynamicParameters.Add("@toDate", user.toDate);
                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteExperience",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //Employee Summary
        public async Task AddEmployeeSummary(Summary user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@jobDescription", user.jobDescription);
                dynamicParameters.Add("@jobTitle", user.jobTitle);
                dynamicParameters.Add("@nationality", user.nationality);
                dynamicParameters.Add("@dateOfExit", user.dateOfExit);
                dynamicParameters.Add("@dateOfEntry", user.dateOfEntry);
                dynamicParameters.Add("@passportExpiryDate", user.passportExpiryDate);
                dynamicParameters.Add("@passportNumber", user.passportNumber);
                dynamicParameters.Add("@gender", user.gender);
                dynamicParameters.Add("@expertise", user.expertise);
                dynamicParameters.Add("@aboutMe", user.aboutMe);

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteSummary",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }


        public async Task<IEnumerable<Summary>> GetEmployeeSummary(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QueryAsync<Summary>(
                    "spSelectInsertUpdateDeleteSummary",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }



        public async Task UpdateEmployeeSummary(Summary user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@jobDescription", user.jobDescription);
                dynamicParameters.Add("@jobTitle", user.jobTitle);
                dynamicParameters.Add("@nationality", user.nationality);
                dynamicParameters.Add("@dateOfExit", user.dateOfExit);
                dynamicParameters.Add("@dateOfEntry", user.dateOfEntry);
                dynamicParameters.Add("@passportExpiryDate", user.passportExpiryDate);
                dynamicParameters.Add("@passportNumber", user.passportNumber);
                dynamicParameters.Add("@gender", user.gender);
                dynamicParameters.Add("@expertise", user.expertise);
                dynamicParameters.Add("@aboutMe", user.aboutMe);
             

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteSummary",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //Employee EmpHistory
        public async Task AddEmployeeEmpHistory(EmpHistory user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Insert");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@jobTitle", user.jobTitle);
                dynamicParameters.Add("@dateOfJoining", user.dateOfJoining);
                dynamicParameters.Add("@lastWorkingDate", user.lastWorkingDate);
                dynamicParameters.Add("@isLeft", user.isLeft);
                dynamicParameters.Add("@notes", user.notes);

                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteEmpHistory",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }


        public async Task<IEnumerable<EmpHistory>> GetEmployeeEmpHistory(string EmployeeId)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "SelectOne");
                dynamicParameters.Add("@EmployeeId", EmployeeId);
                return await sqlConnection.QueryAsync<EmpHistory>(
                    "spSelectInsertUpdateDeleteEmpHistory",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }



        public async Task UpdateEmployeeEmpHistory(EmpHistory user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                dynamicParameters.Add("@StatementType", "Update");
                dynamicParameters.Add("@EmployeeId", user.EmployeeId);
                dynamicParameters.Add("@jobTitle", user.jobTitle);
                dynamicParameters.Add("@dateOfJoining", user.dateOfJoining);
                dynamicParameters.Add("@lastWorkingDate", user.lastWorkingDate);
                dynamicParameters.Add("@isLeft", user.isLeft);
                dynamicParameters.Add("@notes", user.notes);


                await sqlConnection.ExecuteAsync(
                    "spSelectInsertUpdateDeleteEmpHistory",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //GetEmployeeAttrition
        public async Task<IEnumerable<Attrition>> GetEmployeeAttrition()
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                return await sqlConnection.QueryAsync<Attrition>(
                    "spAttrition", null,
                    commandType: CommandType.StoredProcedure);
            }
        }

        //GetExperieceTier
        public async Task<IEnumerable<ExperieceTier>> GetExperienceTier()
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                return await sqlConnection.QueryAsync<ExperieceTier>(
                    "spExperienceTier", null,
                    commandType: CommandType.StoredProcedure);
            }
        }
        public async Task<LoginResponse> verifyUser(LoginUser user)
        {
            using (var sqlConnection = new SqlConnection(connectionString))
            {
                await sqlConnection.OpenAsync();
                var dynamicParameters = new DynamicParameters();
                
                dynamicParameters.Add("@username", user.username);
                dynamicParameters.Add("@userpassword", user.userpassword);
                return await sqlConnection.QuerySingleOrDefaultAsync<LoginResponse>(
                    "spLogin",
                    dynamicParameters,
                    commandType: CommandType.StoredProcedure);
            }
        }
    }
}
