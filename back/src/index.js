const app = require('./app');
app.listen(app.get('port'), () => {
    console.log("servidor escuchando en ele puerto", app.get('port'));
}); 