export class Url {
    private static hostP = 'https://usmand.pythonanywhere.com';
  
   private static hostD = 'https://localhost:44355';
    // https://usmand.pythonanywhere.com/admin/
  //  public static emp = Url.hostP + '/lms/employee/'; //get basic info
    public static emp = Url.hostD + '/api/employee/'; //get,update,delete,insert: basic info https://localhost:44355/api/employee/
  //  public static empCount = Url.hostP + '/lms/emp/count/'; 
    public static empCount = Url.hostD + '/api/emp/count/';
    public static Login = Url.hostD + '/api/user/';
    // for login post api
   
    public static education = Url.hostD + '/api/employee/education/';  // get educations
    public static work = Url.hostD + '/api/employee/WorkInfo/';  // get work info
    public static experience = Url.hostD + '/api/employee/experience/';  // get experience info
    public static personalInfo = Url.hostD + '/api/employee/PersonalInfo/';  // get personal info
    public static summary = Url.hostD + '/api/employee/summary/';  // get summary info
    public static exp_chart = Url.hostD + '/api/ExperieceTier/';  // get experiece data for pi chart
    
    public static image_api = Url.hostD + '/api/employee/image/';  // get/post image

    //addEmpImage
    public static addEmpImage = Url.hostD + '/api/employee/image/';  // post image
    public static attrition_chart = Url.hostD + '/api/employee/Attrition/';  // get attrition data for bar graph
}
