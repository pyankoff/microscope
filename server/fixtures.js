if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Pidr on the walk',
    author: 'loh',
    url: 'http://google.com'
  });
  
  Posts.insert({
    title: 'Loh Lohovich',
    author: 'Mzfk',
    url: 'http://vk.com'
  });  
}