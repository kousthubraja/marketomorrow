const request = require('request');

module.exports = {
    getNiftyPrediction: (inc_request,inc_response) => {
        request('https://www.asqisys.com/backend/api/getNiftyPrediction', {json: true}, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            let data=body;
            data['predictedChange']=data['predictedChange'].toFixed(1);
            data['predictedValue']=data['predictedValue'].toFixed(1);
            data['difference']=data['difference'].toFixed(1);
            if(data['predictedChange']<0)
                data.color='#b41200'
            else
                data.color='#00b44c'
            // console.log(data)
            // return data;
            inc_response.render('index', data);
        });
    }
}