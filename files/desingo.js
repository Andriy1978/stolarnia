function result(){
    let width = document.getElementById('entry').value;
    if (width<330){
        alert('NIE MAMY TAKICH ZAKRESOW');
    }
    else if (width>=330 && width<=600){
        document.getElementById('res').innerText = 'nozyca 250';
    }
    else if (width>600 && width<=800){
        document.getElementById('res').innerText = 'nozyca 350';
    }
    else if (width>800 && width<=1000){
        document.getElementById('res').innerText = 'nozyca 500';
    }
    else if (width>1000 && width<=1200){
        document.getElementById('res').innerText = 'nozyca 500 specjalna';   
    }
    else if (width>1200 && width<=1400){
        alert('UWAGA:  DODATKOWA NOZYCA!!!');
        document.getElementById('res').innerText = 'nozyca 500 specjalna';
    }
    else if (width>1400){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW!!!')
        document.getElementById('res').innerText = '';
    }
}
