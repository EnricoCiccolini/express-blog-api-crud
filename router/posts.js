const express = require('express')
const router = express.Router()
const controllerPost = require('../controllers/controller')
// const posts = require('../posts')




router.get('/', controllerPost.index)

router.get('/:id', controllerPost.show)

router.delete('/:id', controllerPost.destroy)

router.post('/', controllerPost.store)

router.put('/:id',controllerPost.update )

router.patch('/:id',controllerPost.modify)




// router.get('/:id', function (req, res) {
//    // res.send('dettagli del dolce n' + req.params.id)
//   const param = req.params.id
  
//   const result = posts.find(({ id }) => parseInt(id) === parseInt(param));
//   result ? res.json(result) : res.status(404).json('dolce non trovato')
// })
  


// router.post('/', function (req, res) {
//     res.send('creazione di un nuovo dolce')
// })
 
// router.put('/:id', function (req, res) {
//     res.send('modifica tutto il dolce n' + req.params.id)
// })

// router.patch('/:id', function (req, res) {
//     res.send('modnifica in parte il dolce n ' + req.params.id)
// })



module.exports = router;