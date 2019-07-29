using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
//using Twilio;
//using Twilio.Rest.Api.V2010.Account;
namespace hrms_cit
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //const string accountSid = "ACe7a867b6057b398e329ea798496512d8";
            //const string authToken = "a6a9442044d0d361adac382a22fa4ffb";
            //TwilioClient.Init(accountSid, authToken);

            //var message = MessageResource.Create(
            //    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
            //    from: new Twilio.Types.PhoneNumber("+919315839164"),
            //    to: new Twilio.Types.PhoneNumber("+919315839164")
            //);

            //Console.WriteLine(message.Sid);
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
