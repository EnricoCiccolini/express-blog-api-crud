const posts = require('../posts')


function index(req, res) {
    res.json(posts)
}

function show(req, res) {

    const param = req.params.id
    const result = posts.find(({ id }) => parseInt(id) === parseInt(param));
    result ? res.json(result) : res.status(404).json('dolce non trovato')
}

function destroy (req, res) {
    const id = parseInt(req.params.id)
    const itemToDelete = posts.find(itemToDelete => itemToDelete.id === id)
    if (!itemToDelete) {
        res.status(404).json({ message: ' dolce  non trovato' })
    }
    posts.splice(posts.indexOf(itemToDelete), 1)
    res.status(204).json()
    console.log(posts)
}





module.exports = { index, show , destroy}