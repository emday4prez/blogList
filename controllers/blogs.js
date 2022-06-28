const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {
  const blogs =  await Blog.find({})
  response.json(blogs)
  
})

blogRouter.get('/:id', async (request, response, next) => {
    const blog = Blog.findById(request.params.id)
    if(blog){
      response.json(blog)
    }else{
      response.status(404).end()
    }
})

blogRouter.post('/', async (request, response, next) => {
  const body = request.body
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  })
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog) 
})

blogRouter.delete('/:id', async (request, response, next) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

 const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
  response.status(206).json(updatedBlog) 
 // .then(updatedBlog => {
  //   response.json(updatedBlog)
  // })
  // .catch(error => next(error))

})

module.exports = blogRouter