// self invoking funcion
(function() {


    // const articles = document.querySelectorAll('article');
    // const links = document.querySelectorAll('a');
    // console.log(article);

    // article.addEventListener('click', changeBg);

    // function changeBg() {
    //     article.style.background = 'tomato';
    // }

    // for (let i = 0; i < links.length; i++) {
    //     // 
    //     {
    //         links[i].href = 'http://www.kitm.lt';
    //     }
    // }

    const article = document.querySelector('article h3');





    // function changeTitle() {
    //     // article.textContent = userInput.value;  //neleidzia html
    //     article.innerHTML = userInput.value; //leidzia html
    // }
    const list = document.querySelector('ul');
    const btn = document.querySelector('button');
    const userInput = document.querySelector('input')

    btn.addEventListener('click', addTask);

    function addTask() {
        let task = document.createElement('ul'); //sukuriau list;
        task.textContent = userInput.value; // i li  idejau turini
        list.appendChild(task); // li idejau i ul vidu
    }

})();