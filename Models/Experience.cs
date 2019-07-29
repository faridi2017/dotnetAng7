using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class Experience
    {
        public string EmployeeId { get; set; }
        public string companyName { get; set; }
        public string jobTitle { get; set; }
        public string jobDescription { get; set; }
        public DateTime fromDate { get; set; }
        public DateTime toDate { get; set; }
        
    }
}
