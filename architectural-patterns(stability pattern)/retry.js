/* 
The retry pattern is not one of the three main types of design patterns (creational, structural, 
or behavioral), but rather a type of stability pattern that deals with how to handle transient 
failures in distributed systems (dzone.com). Stability patterns are a subset of architectural 
patterns that focus on improving the reliability and resilience of software applications (apiumhub.com). 
The retry pattern belongs to this category because it aims to increase the chance of success by repeating 
an operation that has failed due to temporary or intermittent issues (dzone.com).
they strategy includes
don't retry: their certain failure where it does not sense to retry do operation again like auth service istead focus failure immedialty
retry immedialtly: their are cases where retry must be immediate like when download a package you have to retry immediatly it more likely that downloads start
retry after delay: may be helpful in cases where retry after delay is more likely better way like when a server is busy
                   and you want to try after some time past or by exponential delay
*/
/*
    Retry Design Pattern -> https://www.youtube.com/watch?v=fYZfFdbr8mc
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

async function retryOperation()
{
    let currentTry = 0;

    while(true)
    {
        try {
            externalServiceCall();
            console.log("Succeeded!");
            break;
        } catch (error) {
            currentTry++;
            console.log(`Failed attempt ${currentTry}`);

            if(currentTry >= 10)
            {
                console.log("Retry maximum reached. Exiting");
                break;
            }
        }
        await sleep(3000);
    }  
}     

function externalServiceCall()
{
    // return true
    // throw 'error'
    console.log("Calling external service...");
    const shouldPass = Math.random() < 0.4;
    if(shouldPass)
        return true;
    else
        throw "Failure";
}

async function sleep(ms)
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms);
    });
}

retryOperation();