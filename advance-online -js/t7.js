function doSomeDbActivities(nextActivity){
    console.log('db activities done');
    nextActivity();
}
function doSomeNetworkActivities(nextActivity){
    console.log('Network activities done');
    nextActivity();
}
function doSomeSmsGateWayActivities(nextActivity){
    console.log('SmsGateWay activities done');
    nextActivity();
}
function doSomePaymentGateWayActivities(nextActivity){
    console.log('SmsGateWay activities done');
    nextActivity();
}
doSomeDbActivities(() =>{
    doSomeNetworkActivities(()=>{
        doSomeSmsGateWayActivities(()=>{
            doSomePaymentGateWayActivities(() =>{
                console.log('all tasks finidhed');
            })
        })
    })

});