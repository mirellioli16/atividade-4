var signo = prompt("digite seu signo")
switch (signo) {
case 'aries' :
    console.log ('de 21 março a 20 abril');
    break;

case ' touro':
    console.log (' de 21 abril a 20 maio');
    break;


case 'gemeos':
    console.log (' de 21 maio a 20 junho');
    break;


case 'cancer':
    console.log (' de 21 junho a 22 julho');
    break;

case 'leao':
    console.log ('de 23 julho a 22 agosto');
    break;

case ' virgem':
    console.log(' de 23 agosto a 22 setembro');
    break;

default: 'caso não tenha signo';
    console.log('signo não registrado');

}