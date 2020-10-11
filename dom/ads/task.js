let rotator = document.getElementsByClassName('rotator').item(0)

let cases = Array.from(rotator.children);

let i = 0;

setTimeout(function change() {
     
    i = i + 1;
    if (i > cases.length - 1) {
       	i = 0;
       }
    document.getElementsByClassName('rotator__case_active')[0].classList.remove('rotator__case_active');
    cases[i].classList.add('rotator__case_active');
    cases[i].style.color = cases[i].getAttribute('data-color')
     
    setTimeout(change, (cases[i].getAttribute('data-speed')));

}, 2000);


