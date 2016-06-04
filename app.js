var app = require('express')();
var months = [ 'January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
'December'];

app.get('/', function(req, res) {
    res.send('Timestamp Microservice');
});

app.get('/:timestamp', function(req, res) {
    res.json(processTimestamp(req.params.timestamp));
});

function formatDate(d) {
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function processTimestamp(t) {
    var data = { unix: null, natural: null };
    var d = new Date(/^\d+$/.test(t) ? t*1000:t); 
    
    if (d.getTime()) {
        data.unix    = d.getTime() / 1000;
        data.natural = formatDate(d);
    }
    
    return data;
}

app.listen(process.env.PORT, function() {
    console.log('Listening on port', process.env.PORT);
});