const dummy = (blogs) => {
  return 1;
}
const totalLikes = (blogsList) => {
 return blogsList[0].likes
}

const favoriteBlog = (blogList) => {
 let favorite = blogList[0]

 blogList.forEach(blog => {
  if (blog.likes > favorite.likes){
   favorite = blog
  }
 })
 return favorite;
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}