const jobController = require('../controllers').job;
const userController = require('../controllers').user;
 
module.exports = (app) => {
 
    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "ToDo list V1"
        })
    })
 
    app.get('/api/jobs', jobController.findAll);
    app.post('/api/create-job', jobController.create);
    app.delete('/api/delete-job/:id',jobController.delete);

    app.get('/api/users', userController.findAll);
    app.post('/api/create-user', userController.create);
}