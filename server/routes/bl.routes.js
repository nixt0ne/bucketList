// const { authenticate } = require('../config/jwt.config')
const bucketlistController = require ('../controllers/bl.controllers')

module.exports = (app) => {
    app.get('/api/homeProfile', bucketlistController.getItems) 
    // app.get('/api/allUsers',bucketlistController.getItemUsers)
    app.get('/api/oneItem/:id', bucketlistController.getOneItem) 
    app.post('/api/createItem', bucketlistController.addItem)
    app.put('/api/updateItem/:id',  bucketlistController.updateItem)
    app.delete('/api/deleteItem/:id',  bucketlistController.deleteItem)
    
}


//this is for when we add in user login and reg because it has authenticate associated with it.
// module.exports = (app) => {
//     app.get('/api/homeProfile',authenticate, bucketlistController.getItems) 
//     app.get('/api/allUsers',authenticate, bucketlistController.getItemUsers)
//     app.get('/api/oneItem/:id', authenticate, bucketlistController.getOneItem) 
//     app.post('/api/createItem', authenticate, bucketlistController.addItem)
//     app.put('/api/updateItem/:id', authenticate, bucketlistController.updateItem)
//     app.delete('/api/deleteItem/:id', authenticate, bucketlistController.deleteItem)
    
// }