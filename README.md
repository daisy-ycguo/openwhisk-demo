# openwhisk-demo

## Alarm trigger
```
wsk action create handler actions/handler.js
wsk action invoke -b -r handler
wsk trigger create every-20 --feed /whisk.system/alarms/alarm --param cron "*/20 * * * * *"
wsk rule create invoke-handler every-20 handler
wsk activation poll
```

## Cloudant package
```
wsk package bind /whisk.system/cloudant myCloudant \
  --param username "57b7-0167-4eb5-916de5-bluemix" \
  --param password "24b84123bd42b1d3e48558af72576984" \
  --param host "f24a57b916de5-bluemix.cloudant.com"
wsk trigger create data-update-trigger  --feed myCloudant/changes  --param dbname "cats"
wsk action create process-change actions/process-change.js
wsk action create mysequence --sequence myCloudant/read,process-change
wsk rule create change-rule data-update-trigger mysequence
```
