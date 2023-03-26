function standart() {
    let width = +document.getElementById('entry-width').value;
    let height = +document.getElementById('entry-height').value;
    document.getElementById('dot').innerText = 'Docisk';
    document.getElementById('typ').innerText = 'OKUCIE - TYP: STANDART'
    select_plecy(height);
    select_docisk(height)
    //dol
    if (width < 801) {
        document.getElementById('dol').innerText = 'niema nic';
        document.getElementById('gora').innerText = 'niema nic';
    }
    if (width >= 801 && width <= 1200) {
        document.getElementById('dol').innerText = 400;
    }
    if (width > 1200 && width <= 1400) {
        document.getElementById('dol').innerText = 600;
    }
    if (width > 1400 && width <= 1600) {
        alert('UWAGA: DODATKOWA NOZYCA: Rysunek №4')
        document.getElementById('dol').innerText = '600   400';
    }
    else if (width > 1600) {
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW - SZEROKOSC')
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = ''
    }
    //gora

    if (width > 800 && width <= 1000) {
        document.getElementById('gora').innerText = 'AX-600'
    }
    if (width > 1000 && width <= 1600) {
        document.getElementById('gora').innerText = 'AX-750'
    }
}

function erc_one() {
    let width = +document.getElementById('entry-width').value;
    let height = +document.getElementById('entry-height').value;
    document.getElementById('typ').innerText = 'TYP: ER-1: rys №1'
    select_plecy(height)
    document.getElementById('dot').innerText = 'Plecy';
    
    //plecy2
    if (height < 800) {
        document.getElementById('zas3').innerText = '';
        document.getElementById('zas2').innerText = 'niema nic';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    if (height > 800 && height <= 1200) {
        document.getElementById('zas3').innerText = 400;
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    if (height > 1200 && height <= 1600) {
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    if (height > 1600 && height <= 2000) {
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 400;
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    if (height > 2000 && height <= 2400) {
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    if (height > 2400 && height <= 2600) {
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = 400;
        document.getElementById('nsp').innerText = '';
    }
    if (height > 2600 && height <= 2800) {
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = 600;
        document.getElementById('nsp').innerText = '';
    }
    else if (height > 2800) {
        alert('UWAGA: NIEMA TAKICH ZAKRESOW -->WYSOKOSC')
        document.getElementById('zas3').innerText = '';
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    
    //dol
    if (width<400){
        document.getElementById('dol').innerText = 'niema nic';    
    }
    if (width >= 400 && width <= 600) {
        document.getElementById('dol').innerText = 200;
    }
    else if (width > 600 && width <= 800) {
        document.getElementById('dol').innerText = 400;
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('dol').innerText = 600;
    }
    else if (width > 1000 && width <= 1200) {
        document.getElementById('dol').innerText = '600   200';
    }
    else if (width > 1200 && width <= 1400) {
        alert('UWAGA:  DODATKOWA NOZYCA: RYSUNEK №4')
        document.getElementById('dol').innerText = '600   400';
    }
    //gora
    if (width <= 800) {
        document.getElementById('gora').innerText = '';
        
    }
    else if (width > 800 && width <= 1000) {
        document.getElementById('gora').innerText = 'AX-600';
    }
    else if (width > 1000 && width <= 1400) {
        document.getElementById('gora').innerText = 'AX-750';
    }
    else if (width > 1400) {
        alert('NIEMA TAKICH ZAKRESOW - SZEROKOSC')
        document.getElementById('gora').innerText = '';
        document.getElementById('dol').innerText = '';
    }
}

function erc_two() {
    let width = +document.getElementById('entry-width').value;
    let height = +document.getElementById('entry-height').value;
    document.getElementById('typ').innerText = 'TYP: ER-2: rys №2';
    document.getElementById('dot').innerText = 'Plecy';
    //plecy
    if (height<490){
        document.getElementById('pl1').innerText = '';
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = '';
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>=490 && height<=800){
        document.getElementById('pl1').innerText = 200;
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 200;
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>800 && height<=1000){
        document.getElementById('pl1').innerText = 400;
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 400;
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>1000 && height<=1200){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>1200 && height<=1400){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 200;
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 200;
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>1400 && height<=1600){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 400;
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 400;
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>1600 && height<=1800){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>1800 && height<=2000){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = 200;
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = 200;
        document.getElementById('nsp').innerText = '';
    }
    else if (height>2000 && height<=2200){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = 400;
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = 400;
        document.getElementById('nsp').innerText = '';
    }
    else if (height>2200 && height<=2400){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = 600;
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = 600;
        document.getElementById('nsp').innerText = '';
    }
    else if (height>2401 && height<=2600){
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = 600;
        document.getElementById('pl4').innerText = 200;
        document.getElementById('zas3').innerText = 600;
        document.getElementById('zas2').innerText = 600;
        document.getElementById('zas1').innerText = 600;
        document.getElementById('nsp').innerText = 200;
    }
    else if (height>2600){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW -> WYSOKOSC')
        document.getElementById('pl1').innerText = '';
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
        document.getElementById('zas3').innerText = '';
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas1').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    //dol
    if(width<490){
        document.getElementById('dol').innerText = 'niema nic';
    }
    if (width>=490 && width<=690){
        document.getElementById('dol').innerText = 200;
    }
    else if (width>690 && width<=890){
        document.getElementById('dol').innerText = 400;
    }
    else if (width>890 && width<=1090){
        document.getElementById('dol').innerText = 600;
    }
    else if (width>1090 && width<=1290){
        document.getElementById('dol').innerText = '600   200';
    }
    else if (width>1290 && width<=1400){
        document.getElementById('dol').innerText = '600   400';
    }
    else if (width>1400){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW -->szerokosc');
        document.getElementById('dol').innerText = '';
        document.getElementById('gora').innerText = '';
    }
    //gora
    if (width>800 && width<=1000){
        document.getElementById('gora').innerText = 600;
    }
    if (width>1000 && width<=1600){
        document.getElementById('gora') = '600'
    }
    if (width>1600){
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW -->szerokosc');
        document.getElementById('gora').innerText = '';
        document.getElementById('dol').innerText = '';
    }
}

function select_plecy(height) {
    if (height < 800) {
        document.getElementById('pl1').innerText = '';
        document.getElementById('pl2').innerText = 'niema nic';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
    }
    if (height > 800 && height <= 1200) {
        document.getElementById('pl1').innerText = 400;
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
    }
    if (height > 1200 && height <= 1600) {
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
    }
    if (height > 1600 && height <= 2000) {
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 400;
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
    }
    if (height > 2000 && height <= 2400) {
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = '';
    }
    if (height > 2400 && height <= 2600) {
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = 400;
        document.getElementById('pl4').innerText = '';
    }
    if (height > 2600 && height <= 2800) {
        document.getElementById('pl1').innerText = 600;
        document.getElementById('pl2').innerText = 600;
        document.getElementById('pl3').innerText = 600;
        document.getElementById('pl4').innerText = '';
    }
    else if (height > 2800) {
        alert('UWAGA: NIEMA TAKICH ZAKRESOW -->WYSOKOSC')
        document.getElementById('pl1').innerText = '';
        document.getElementById('pl2').innerText = '';
        document.getElementById('pl3').innerText = '';
        document.getElementById('pl4').innerText = '';
    }
}
function select_docisk(height) {
    if (height<801) {
        document.getElementById('zas1').innerText = '';
        document.getElementById('zas2').innerText = 'niema nic';
        document.getElementById('zas3').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>=801 && height<1600){
        document.getElementById('zas2').innerText = 1;
        document.getElementById('zas1').innerText = '';
        document.getElementById('zas3').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    else if (height>1600 && height<=2600){
        document.getElementById('zas2').innerText = 2;
        document.getElementById('zas1').innerText = '';
        document.getElementById('zas3').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
    if (height>2600) {
        alert('UWAGA: NIE MAMY TAKICH ZAKRESOW!!!')
        document.getElementById('zas1').innerText = '';
        document.getElementById('zas2').innerText = '';
        document.getElementById('zas3').innerText = '';
        document.getElementById('nsp').innerText = '';
    }
}
