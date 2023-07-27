var val = new URLSearchParams(window.location.search);
var valor = val.get('valor');
document.getElementById("valref").textContent = 'You selected ' + valor + ' out of 5';