const getArticles = () => {
    const articles = [
         {
            id: 1,
           'title' : 'My New Post bro, this is amazing',
           'time' : '3',
           'img' : 'https://www.adslzone.net/app/uploads-adslzone.net/2020/12/imagenes.jpg'
        },
         {
            id: 2,
           'title' : 'Learning React while listening Alvarito',
           'time' : '2'  ,
           'img' : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        },
         { id: 3,
           'title' : 'Con ese brillo deja ciego a cualquiera',
           'time' : '5',
           'img' : 'https://wellaggio.com/wp-content/uploads/2015/09/la-importancia-de-las-imagenes-en-el-dise%C3%B1o-web1.jpg'
        },
    ]

    return articles;
}


export default getArticles();