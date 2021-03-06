var express = require('express'),
	device 	= require('../../lib/device.js'),
	app     = module.exports = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(device.capture());

device.enableDeviceHelpers(app);
device.enableViewRouting(app, {
	noPartials: true,
	fallbackDevice: 'desktop'
});

app.get('/', function(req, res, next) {
    res.render('index.ejs');
});