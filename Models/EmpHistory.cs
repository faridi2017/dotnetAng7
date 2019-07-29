using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class EmpHistory
    {
        public string EmployeeId { get; set; }
        public string jobTitle { get; set; }
        public DateTime dateOfJoining { get; set; }
        public DateTime lastWorkingDate { get; set; }
        public Boolean isLeft { get; set; }
        public string notes { get; set; }
        
    }
}
