var url = 'http://api.icndb.com/jokes/random';

var btn = document.getElementById('get-joke');

btn.addEventListener('click',function(){
   getJoke(); 
});

var paragraph = document.getElementById('joke');

function getJoke () {
    
    var xhr = new XMLHttpRequest();
    xhr.open('get',url);
    xhr.addEventListener('load',function(){
       var response = JSON.parse(xhr.response);
        paragraph.innerText = response.joke;
    });
    xhr.send();
}