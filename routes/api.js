const request = require('request');

module.exports = {
    getNiftyPrediction: (inc_request,inc_response) => {
        request('https://www.asqisys.com/backend/api/getNiftyPrediction', {json: true}, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            let data = processData(body);
            inc_response.render('index', data);
        });

        function processData(body) {
            var day = 60 * 60 * 24 * 1000;
            let data = body;
            data['indexValue']=(data['predictedValue']-data['difference']).toFixed(0)
            data['predictedChange'] = data['predictedChange'].toFixed(1);
            data['predictedValue'] = data['predictedValue'].toFixed(0);
            data['difference'] = data['difference'].toFixed(0);
            if (data['predictedChange'] < 0)
                data.color = '#d93025'
            else
                data.color = '#34a853'
            let currentDate=new Date(data['createdDateTime'])
            let previousDate= new Date(currentDate.getTime()-(day*1))
            currentDate.setMonth(currentDate.getMonth()+1)
            data['createdDateTime'] = (new Date(data['createdDateTime'])).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }).split(' ').join(' ');
            data['previousDateTime'] = (previousDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }).split(' ').join(' ');
            data['futureDateTime'] = (currentDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }).split(' ').join(' ');
            console.log(data)
            return data;
        }
    }
}