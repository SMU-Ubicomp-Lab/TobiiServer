
//RESTFUL API
var express = require('express');
var app = express();


app.post('/api/projects', function(req, res) {
	console.log("Creating new project");
    res.json({
    	pr_id:"73z7vtv"
    });
});

app.post('/api/participants', function(req, res) {
	console.log("Creating new participant");
	res.json({
		pa_id: "ymaagxo",
		pa_project: "73zyvtv",
	});
});

app.post('/api/calibrations', function(req, res) {
	console.log("Creating new calibration")
	res.json( {
		ca_id: "xsfsgsg"
	})
});

app.post('/api/calibrations/:id/start', function(req, res) {
	console.log("Start calibrations " + req.params.id);
	res.json({
		ca_state: "start"
	});
});

app.get('/api/calibrations/:id/status', function(req, res) {
	console.log("Check the status of calibrations " + req.params.id);
	res.json({
		ca_state: "calibrated"
	});
})

app.post('/api/recordings', function(req, res) {
	console.log("Creating new recording")
	res.json({
		rec_id: "aasgasg"
	})
});

app.post('/api/recordings/:id/start', function(req, res) {
	console.log("Start recording " + req.params.id);
	res.json({
		re_state: "start"
	});
});

app.post('/api/recordings/:id/stop', function(req, res) {
	console.log("Stop recording " + req.params.id);
	res.json({
		re_state: "stop"
	});
});

var server = app.listen(80, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port);

})

