let ObjectID = require('mongodb').ObjectID
module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send(item)
      }
    })
  })

  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' })
      } else {
        res.send(result.ops[0])
      }
    })
  })

  //addOnePost
  app.post('/post', (req, res) => {
    console.log(req)
    const post = req.body
    db.collection('posts').insertOne(post, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' })
      } else {
        res.send({ status: 'success' })
      }
    })
  })

  //get all posts
  app.get('/posts', (req, res) => {
    db.collection('posts').find().toArray((err, items) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send(items)
      }
    })
  })

  //get post
  app.get('/post/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('posts').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send(item)
      }
    })
  })

  // delete post
  app.delete('/post/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('posts').findOneAndDelete(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send('Post ' + id + ' deleted!')
      }
    })
  })

  //update
  app.put ('/post/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    const post = req.body
    db.collection('posts').update(details, {
      $set: {
        title: post.title,
        description: post.description,
        comments: post.comments,
        images: post.images
      }
      }, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send({ status: 'success' })
      }
    })
  })
}
