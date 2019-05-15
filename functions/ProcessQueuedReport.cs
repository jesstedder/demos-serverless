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
        public static void Run([QueueTrigger("report-generation", Connection = "QueueConnection")]string myQueueItem, ILogger log
        )
        {
            //[Blob("reports/{name}.txt", System.IO.FileAccess.Write, Connection="StorageConnection")] TextWriter reportData
            log.LogInformation($"C# Queue trigger function processed: {myQueueItem}");
            //reportData.Write("hello hello");
        }
    }
}
