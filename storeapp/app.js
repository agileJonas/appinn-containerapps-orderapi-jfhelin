const appInsights = require('applicationinsights');
try {
    appInsights.setup()
        .setAutoDependencyCorrelation(true)
        .setAutoCollectRequests(true)
        .setAutoCollectPerformance(true, true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .setAutoCollectConsole(true)
        .setUseDiskRetryCaching(true)
        .setSendLiveMetrics(true)
        .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
        .start();

} catch (e) {
    console.log("Application insights failed to start, continue without. Message: " + e.message)
}

const key = "AIzaSyAQfxPJiounkhOjODEO5ZieffeBv6yft2Q";
const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

var store = [

]

app.get('/store', (_req, res) => {
    res.json(store)
    console.log(`List of items in the store requested by ${_req.ip}`)
});

app.post('/store', (req, res) => {
    store.push(req.body)
    res.status(200).send("success")
    console.log(`Received new item from ${req.ip}, content: ${JSON.stringify(req.body)}`)
});

function addNumbers(x, y) {
  return x + y;
}

addNumbers(2, 3);

app.listen(port, () => console.log(`Node App listening on port ${port}!`));
