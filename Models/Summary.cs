using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class Summary
    {
        public string EmployeeId { get; set; }
        public string jobDescription { get; set; }
        public string jobTitle { get; set; }
        public string nationality { get; set; }
        public DateTime dateOfExit { get; set; }
        public DateTime dateOfEntry  { get; set; }
        public DateTime passportExpiryDate { get; set; }
        public string passportNumber { get; set; }
        public string gender { get; set; }
        public string expertise { get; set; }
        public string aboutMe { get; set; }
       
    }
}
