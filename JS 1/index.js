var input = document.getElementById('text-input');
document.querySelector('form').addEventListener('submit', function(e) {
console.log(input.value)
});

var button = document.getElementsByClassName('button')[0],
    link = document.getElementsByClassName('link')[0];

button.onclick = link.onclick = function(e) {
    e.preventDefault();

    alert("Привет");
};

