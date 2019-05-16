using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using System.IO;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using System.Threading.Tasks;

namespace functions
{
    public static class ProcessQueuedReport
    {
        [FunctionName("ProcessQueuedReport")]
        public static Task Run(
            [QueueTrigger("report-generation")]string name,
            [SignalR(HubName = "reports")] IAsyncCollector<SignalRMessage> signalRMessages,
            Binder binder, ILogger log
        )
        {
            //[Blob("reports/{name}.txt", System.IO.FileAccess.Write, Connection="StorageConnection")] TextWriter reportData
            log.LogInformation($"C# Queue trigger function processed: {name}");
            string outputFileName = $"reports/{name}-{DateTime.UtcNow.ToString("yyyMMddhhmmssfff")}.txt";
            var attribute = new BlobAttribute(outputFileName);

            using (var writer = binder.Bind<TextWriter>(attribute))
            {
                #region report text
                writer.Write(@"
  o         o                 o    o                                                                 o           o     o   
 <|>       <|>               <|>  <|>                                                               <|>         <|>   <|>  
 < >       < >               / \  / \                                                               / \         < \   / \  
  |         |     o__  __o   \o/  \o/    o__ __o         o              o     o__ __o    \o__ __o   \o/    o__ __o/   \o/  
  o__/_ _\__o    /v      |>   |    |    /v     v\       <|>            <|>   /v     v\    |     |>   |    /v     |     |   
  |         |   />      //   / \  / \  />       <\      < >            < >  />       <\  / \   < >  / \  />     / \   < >  
 <o>       <o>  \o    o/     \o/  \o/  \         /       \o    o/\o    o/   \         /  \o/        \o/  \      \o/        
  |         |    v\  /v __o   |    |    o       o         v\  /v  v\  /v     o       o    |          |    o      |     o   
 / \       / \    <\/> __/>  / \  / \   <\__ __/>          <\/>    <\/>      <\__ __/>   / \        / \   <\__  / \  _<|>_ ");
                #endregion

            }

            return signalRMessages.AddAsync(
                            new SignalRMessage
                            {
                                Target = "report-processing",
                                Arguments = new[] { new { reportName = name, output = outputFileName, completed = DateTime.UtcNow } }
                            });
        }
    }
}
