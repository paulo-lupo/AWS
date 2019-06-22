console.log('Starting functions');

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
 
console.log('reached here');

exports.handler = function(e, ctx, callback) {
console.log('reached here');
    var params = {
        Item: {
            LastName:'Pancho',
            message: e.message
        },
        TableName: 'FirstTest'
    }; 
    console.log('reached here');
    docClient.put(params, function(err, data){
        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}
