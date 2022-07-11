const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: "Revisiting Algorithms with Khan Academy",
    author: "Amber Wilkie",
    url: "www.medium.com",
    likes: 5
  },
  {
   title: "JS-Challenges/recursion",
    author: "mybrainishuge",
    url: "https://github.com/JS-Challenges/recursion-prompts",
    likes: 2
  },
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon', likes: 9 })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb
}