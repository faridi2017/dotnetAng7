using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrms_cit.Models
{
    public partial class LoginUser
         {
        public int userid { get; set; }
        public string username { get; set; }
        public string fullname { get; set; }
        public string email { get; set; }
        public string userpassword { get; set; }
        public DateTime dateCreated { get; set; }
       
    }
}
