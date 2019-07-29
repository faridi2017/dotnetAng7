using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class WorkInfo
    {
        public string EmployeeId { get; set; }
        public string reportingTo { get; set; }
        public string department { get; set; }
        public DateTime dateOfJoining { get; set; }
        public string sourceOfHire { get; set; }
        public string seatingLocation { get; set; }
        public string location { get; set; }
        public string designation { get; set; }
        public string employeeStatus { get; set; }
        public string employeeType { get; set; }
        public string workPhone { get; set; }
        public string extension { get; set; }
        public string empRole { get; set; }
    }
}
