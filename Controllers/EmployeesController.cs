using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using hrms_cit.Models;
using hrms_cit.Dataprovider;

namespace hrms_cit.Controllers
{
    //Employee
    [Route("api/employee/")]
    [ApiController]
    public class EmployeesController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeesController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet]
        public async Task<IEnumerable<Employee>> Get()
        {
            return await this.empDataProvider.GetEmployees();
        }
        [HttpGet("{EmployeeId}")]
        public async Task<Employee> Get(string EmployeeId)
        {
            return await this.empDataProvider.GetEmployee(EmployeeId);
        }

        [HttpPost]
        public async Task Post([FromBody]Employee user)
        {
            await this.empDataProvider.AddEmployee(user);
        }

        [HttpPut("{employeeId}")]
        public async Task Put(string employeeId, [FromBody]Employee user)
        {
            await this.empDataProvider.UpdateEmployee(user);
        }

        [HttpDelete("{EmployeeId}")]
        public async Task Delete(string EmployeeId)
        {
            await this.empDataProvider.DeleteEmployee(EmployeeId);
        }


    }

    // WorkInfo
    [Route("api/employee/WorkInfo/")]
    [ApiController]
    public class EmployeeWorkInfoController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeeWorkInfoController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet("{EmployeeId}")]
        public async Task<IEnumerable<WorkInfo>> Get(string EmployeeId)
        {
            return await this.empDataProvider.GetEmployeeWorkInfo(EmployeeId);
        }

        [HttpPost]
        public async Task Post([FromBody]WorkInfo user)
        {
            await this.empDataProvider.AddEmployeeWorkInfo(user);
        }

        [HttpPut("{employeeId}")]
        public async Task Put(string employeeId, [FromBody]WorkInfo user)
        {
            await this.empDataProvider.UpdateEmployeeWorkInfo(user);
        }


    }
    // PersonalInfo
    [Route("api/employee/PersonalInfo/")]
    [ApiController]
    public class EmployeePersonalInfoController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeePersonalInfoController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet("{EmployeeId}")]
        public async Task<IEnumerable<PersonalInfo>> Get(string EmployeeId)
        {
            return await this.empDataProvider.GetEmployeePersonalInfo(EmployeeId);
        }

        [HttpPost]
        public async Task Post([FromBody]PersonalInfo user)
        {
            await this.empDataProvider.AddEmployeePersonalInfo(user);
        }

        [HttpPut("{employeeId}")]
        public async Task Put(string employeeId, [FromBody]PersonalInfo user)
        {
            await this.empDataProvider.UpdateEmployeePersonalInfo(user);
        }


    }

    // Experience
    [Route("api/employee/experience/")]
    [ApiController]
    public class EmployeeExperienceController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeeExperienceController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet("{EmployeeId}")]
        public async Task<IEnumerable<Experience>> Get(string EmployeeId)
        {
            return await this.empDataProvider.GetEmployeeExperience(EmployeeId);
        }

        [HttpPost]
        public async Task Post([FromBody]Experience user)
        {
            await this.empDataProvider.AddEmployeeExperience(user);
        }

        [HttpPut("{employeeId}")]
        public async Task Put(string employeeId, [FromBody]Experience user)
        {
            await this.empDataProvider.UpdateEmployeeExperience(user);
        }


    }

    // Education
    [Route("api/employee/education/")]
    [ApiController]
    public class EmployeeEducationController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeeEducationController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet("{EmployeeId}")]
        public async Task<IEnumerable<Education>> Get(string EmployeeId)
        {
            return await this.empDataProvider.GetEmployeeEducation(EmployeeId);
        }

        [HttpPost]
        public async Task Post([FromBody]Education user)
        {
            await this.empDataProvider.AddEmployeeEducation(user);
        }

        [HttpPut("{employeeId}")]
        public async Task Put(string employeeId, [FromBody]Education user)
        {
            await this.empDataProvider.UpdateEmployeeEducation(user);
        }


    }



    // Summary
    [Route("api/employee/summary/")]
    [ApiController]
    public class EmployeeSummaryController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeeSummaryController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet("{EmployeeId}")]
        public async Task<IEnumerable<Summary>> Get(string EmployeeId)
        {
            return await this.empDataProvider.GetEmployeeSummary(EmployeeId);
        }

        [HttpPost]
        public async Task Post([FromBody]Summary user)
        {
            await this.empDataProvider.AddEmployeeSummary(user);
        }

        [HttpPut("{employeeId}")]
        public async Task Put(string employeeId, [FromBody]Summary user)
        {
            await this.empDataProvider.UpdateEmployeeSummary(user);
        }
    }
    //emp count
    [Route("api/emp/count/")]
    [ApiController]
    public class EmpCountController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmpCountController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet]
        public async Task<IEnumerable<EmpCount>> Get()
        {
            return await this.empDataProvider.GetEmployeesCount();
        }

    }

    //EmployeeImage
    [Route("api/employee/image/")]
    [ApiController]
    public class EmployeeImageController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeeImageController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }
        
        [HttpGet("{EmployeeId}")]
        public async Task<IEnumerable<EmployeeImage>> Get(string EmployeeId)
        {
            return await this.empDataProvider.GetEmployeeImage(EmployeeId);
        }

        [HttpPost]
        public async Task Post([FromBody]EmployeeImage user)
        {
            await this.empDataProvider.AddEmployeeImage(user);
        }

        [HttpPut("{employeeId}")]
        public async Task Put(string employeeId, [FromBody]EmployeeImage user)
        {
            await this.empDataProvider.UpdateEmployeeImage(user);
        }

        
    }

    //EmployeeAttrition
    [Route("api/employee/Attrition/")]
    [ApiController]
    public class EmployeeAttritionController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeeAttritionController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet]
        public async Task<IEnumerable<Attrition>> Get()
        {
            return await this.empDataProvider.GetEmployeeAttrition();
        }

        


    }
    //ExperieceTier
    [Route("api/ExperieceTier/")]
    [ApiController]
    public class EmployeeExperieceTierController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public EmployeeExperieceTierController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpGet]
        public async Task<IEnumerable<ExperieceTier>> Get()
        {
            return await this.empDataProvider.GetExperienceTier();
        }




    }
    //Login
    [Route("api/user/")]
    [ApiController]
    public class UserLoginController : Controller
    {
        private IhrmsDataProvider empDataProvider;

        public UserLoginController(IhrmsDataProvider empDataProvider)
        {
            this.empDataProvider = empDataProvider;
        }

        [HttpPost]
        public async Task<LoginResponse> Post([FromBody]LoginUser user)
        {
           return await this.empDataProvider.verifyUser(user);
        }




    }
}
