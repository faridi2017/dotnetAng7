using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class Education
    {
        public string EmployeeId { get; set; }
        public string institute { get; set; }
        public string course { get; set; }
        public DateTime doc { get; set; } // date of completion
        public string stream { get; set; }
        public string notes { get; set; }
        public string interest { get; set; }

    }
}
