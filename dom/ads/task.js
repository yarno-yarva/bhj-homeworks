let rotator = document.getElementsByClassName('rotator').item(0)

let cases = Array.from(rotator.children);

let x = 0;

function change(){
 rotor(cases.indexOf(document.getElementsByClassName('rotator__case_active').item(0)) + 1)
}

function rotor(i) {
       if (i > cases.length - 1) {
       	i = 0;
       }
       document.getElementsByClassName('rotator__case_active').item(0).classList.toggle('rotator__case_active');
       cases[i].classList.add('rotator__case_active');
       cases[i].style.color = cases[i].getAttribute('data-color')
       return cases[i].getAttribute('data-speed');
  }

setInterval (change, rotor(x));