using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class EmployeeImage
    {
        public string EmployeeId { get; set; }
        public Byte[] blobData { get; set; }
    }
}
