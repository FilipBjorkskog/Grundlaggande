let input = document.querySelector('input')

document.querySelector('#bf').addEventListener('click', function(){
    var fahrenheit = (input.value * 9 / 5) + 32;
    document.querySelector('#nsr').innerHTML = fahrenheit
})
document.querySelector('#bc').addEventListener('click', function(){
    var celsius = (input.value - 32) * 5 / 9;
    document.querySelector('#nsr').innerHTML = celsius
})