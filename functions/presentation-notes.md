# Back story
 - USB stick that had to be manually removed to update
 - Data had to be emailed to support to be updated
 - Updates are needed multiple times a day

# Success Criteria
 - Quickly update without interrupting service
 - Easy, spreadsheet like data entry
 - Secure enough
 - Cheap / free to host
 - Low administrative overhead (I'm lazy)
 - Learn some new stuff

# Solution (v1)
> http://dbb-hosting.s3-website.us-east-2.amazonaws.com/
 - Angular UI
 - Data is retrieved via AWS Lambda (serverless)
 - Angular polls for updates
 - Google sheets as the data entry mechanism
 - Google authentication to protect the sheet
 - Raspberry PI connects to the flat screen and is controlled via AWS IoT
 - Big red button for remote reboots

> demo:  show v1 in devtools and edit a beer

> demo: look at AWS IoT

> demo: show code for angular and lambda


# Solution (v2)
> Mostly the same, but moved from polling to google firebase
http://dutchs.board.jesstedder.net
- Data is loaded into firebase via AWS Lamba whenever sheet changes
- UI subscribes to Google Firebase for real time updates
- AWS Route 53 configured to route traffic to V1 or V2 without needing access to the IoT device.
- AWS devops tools automate build and deploy of updates

> demo:  show v2 with devtools and edit a beer

> demo: show code for angular and firebase

> demo: show Route 53 and static hosting


# Result
 - Data entry happens via familiar interface (Google Sheets)
 - Using builtin auth mechanism of google provides security
 - Updates happen in real time
 - Static hosting, serverless functions, and firebase cost pennies per month
 - AWS IoT, Route 53, and devops usage result in only needing to touch the device on premise when the wifi password changes or it gets dropped in a beer.
 - New stuff learned:  AWS Lambda, NodeJS, AWS IoT, Raspberry Pi

# How I would do it with Azure
 > At the time there were no good options for serverless real time data and cheap hosting
 - Azure serverless SignalR
 - Azure static hosting
 - Azure functions with proxy support

# Lets write some code :fist:



















## Notes for me
Initialize the function app locally
```
#in the folder
func init

#create a new function
func new

#start the function app
func start


#clean out th published "reports"
az storage blob delete-batch --account-name demoserverlessstorage --source reports
```