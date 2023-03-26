let haslo = 'Jacek';      

function test(params) {
    let name = document.getElementById('input-name').value;
    let haslo_inp = document.getElementById('input-password').value;
    if (name == haslo && haslo_inp == 1234){
        window.open('main.html')
    }
    else{
        alert('NIEPRAWIDLOWE HASLO!!!')
    }
}