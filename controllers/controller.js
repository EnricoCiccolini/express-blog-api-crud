const posts = require('../posts')


function index (req ,res){
    res.json(posts)
}

function show (req ,res){
    const param = req.params.id
  
      const result = posts.find(({ id }) => parseInt(id) === parseInt(param));
      result ? res.json(result) : res.status(404).json('dolce non trovato')
    }


module.exports = {index , show}