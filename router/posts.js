const express = require('express')
const router = express.Router()


const posts = require('../posts')



router.get('/', function (req, res) {
    // res.send(' lista dei post')
    res.json(posts)
})


router.get('/:id', function (req, res) {
   // res.send('dettagli del dolce n' + req.params.id)
  const param = req.params.id
  
  const result = posts.find(({ id }) => parseInt(id) === parseInt(param));
  result ? res.json(result) : res.status(404).json('dolce non trovato')
})
  


router.post('/', function (req, res) {
    res.send('creazione di un nuovo dolce')
})
 
router.put('/:id', function (req, res) {
    res.send('modifica tutto il dolce n' + req.params.id)
})

router.patch('/:id', function (req, res) {
    res.send('modnifica in parte il dolce n ' + req.params.id)
})

router.delete('/:id', function (req, res) {
    const id = parseInt(req.params.id)
    const itemToDelete = posts.find(itemToDelete =>  itemToDelete.id === id)
    if(!itemToDelete){
        res.status(404).json({ message: ' pizza non trovata'})
    }
    posts.splice(posts.indexOf(itemToDelete),1)
    res.status(204).json()
    console.log(posts)
})

module.exports = router;