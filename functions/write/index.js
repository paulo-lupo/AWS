console.log('Starting functions');

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
 
console.log('reached here');

exports.handler = function(e, ctx, callback) {
console.log('reached here');
    
    let scanningParams = {
        TableName: 'FirstTest',
        Key: {
            LastName: 'Lupo',
            message: 'hi'
        },
        Limit: 10
        
    };
    
    docClient.scan(scanningParams, function(err, data){
        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
    
    /* var params = {
        TableName: 'FirstTest',
        Key: {
            LastName: 'Paco'
        }
    }
    
    docClient.get(params, function(err, data){
        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    }); */
}