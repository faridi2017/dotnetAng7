using System;
using System.Collections.Generic;

namespace hrms_cit.Models
{
    public partial class Employee
    {
        public string EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NickName { get; set; }
        public string Gender { get; set; }
        public string Status { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
    }
}
