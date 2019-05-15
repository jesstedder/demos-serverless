using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using System.IO;

namespace functions
{
    public static class ProcessQueuedReport
    {
        [FunctionName("ProcessQueuedReport")]
        public static void Run([QueueTrigger("report-generation", Connection = "QueueConnection")]string name, Binder binder, ILogger log
        )
        {
            //[Blob("reports/{name}.txt", System.IO.FileAccess.Write, Connection="StorageConnection")] TextWriter reportData
            log.LogInformation($"C# Queue trigger function processed: {name}");
            var attribute =   new BlobAttribute($"reports/{name}-{DateTime.UtcNow.ToString("yyyMMddhhmmssfff")}.txt");

            using (var writer = binder.Bind<TextWriter>(attribute)){
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
        }
    }
}
