// self invoking funcion
(function() {

    const article = document.querySelector('article');
    const articles = document.querySelectorAll('article');
    // console.log(article);

    // article.addEventListener('click', changeBg);

    // function changeBg() {
    //     article.style.background = 'tomato';
    // }

    for (let i = 0; i < articles.length; i++) {
        articles[i].addEventListener('click', function() {
            articles[i].style.background = 'tomato';
        });
    }
})();