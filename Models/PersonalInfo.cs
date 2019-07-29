using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class PersonalInfo
    {
        public string EmployeeId { get; set; }
        public string mobile { get; set; }
        public string otherEmail { get; set; }
        public DateTime dob { get; set; } //date of birth
        public string maritalStatus { get; set; }
        public string address { get; set; }
        public string tags { get; set; }
     
    }
}
