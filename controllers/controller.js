const posts = require('../posts');



function index(req, res) {

    const check = req.query.tags;
    
    if (check) {
        let tagsPost = posts.filter(post => post.tags.length && post.tags.includes(check));

        return res.json(tagsPost);
        
    }

    res.json(posts);
}


function show(req, res) {

    const param = req.params.id
    const result = posts.find(({ id }) => parseInt(id) === parseInt(param));
    result ? res.json(result) : res.status(404).json('dolce non trovato')
}

function destroy(req, res) {
    const id = parseInt(req.params.id)
    const itemToDelete = posts.find(itemToDelete => itemToDelete.id === id)
    if (!itemToDelete) {
        return res.status(404).json({ message: ' dolce  non trovato' })
    }
    posts.splice(posts.indexOf(itemToDelete), 1)
    res.status(204).json()
    console.log(posts, 'sono dopo il json' )
}


function store(req,res){
    console.log(req.body)

    const idNew = posts[posts.length -1].id +1
    const dolceNew = {
        id : idNew,
        title : req.body.title,
       content : req.body.name,
        image : req.body.image,
        tags : req.body.tags
    }

    posts.push(dolceNew)
    res.status(201).json(dolceNew)
}

function update( req , res ){
    const id = parseInt(req.params.id)
    let itemToModify = posts.find(itemToModify => itemToModify.id === id)
    itemToModify ?? res.status(404).json('dolce non trovato')
   

    itemToModify.title =req.body.title
    itemToModify.content =req.body.content
    itemToModify.image =req.body.image
    itemToModify.tags =req.body.tags

console.log(posts)
res.json(itemToModify)

}

function modify( req , res ){
    const id = parseInt(req.params.id)
    let itemToModify = posts.find(itemToModify => itemToModify.id === id)
    itemToModify ?? res.status(404).json('dolce non trovato')
   

    
    if (!itemToModify) {
        return res.status(404).json('dolce non trovato');
    }

    if (req.body.title ) {
        itemToModify.title = req.body.title;
    }

    if (req.body.content ) {
        itemToModify.content = req.body.content;
    }

    if (req.body.image ) {
        itemToModify.image = req.body.image;
    }

    if (req.body.tags ) {
        itemToModify.tags = req.body.tags;
    }

console.log(posts)
res.json(itemToModify)

}






module.exports = { index, show, destroy ,store ,update, modify }