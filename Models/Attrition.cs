using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class Attrition
    {
        public int theyear { get; set; }
        public int newJoinee { get; set; }
        public int empLeft { get; set; }
        public int totalEOY { get; set; }
    }
}
