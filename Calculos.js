function PolarizacionFija(){

var Vbe = 0.7;

var B = 80;

var Vcc = Number(document.getElementById('PF-VCC').value);

var Rb = Number(document.getElementById('PF-RB').value);

var Rc = Number(document.getElementById('PF-RC').value);


// Obtener IB


var Ib = (Vcc - Vbe) / Rb;

document.getElementById('PF-IB').value = Ib


// Obtener IB


// Obtener IC


var Ic = Ib * B;

document.getElementById('PF-IC').value = Ic


// Obtener IC

var Vrc = Ic * Rc;


console.log(Ic)
console.log(Rc)
console.log(Vrc)
console.log(Vcc)


// Obtener VCE


var Vce = Vcc - Vrc;

document.getElementById('PF-VCE').value = Vce


// Obtener VCE


// Obtener VC


var Vc = Vcc - Vrc;

document.getElementById('PF-VC').value = Vc;


// Obtener VC

// Obtener VB


document.getElementById('PF-VB').value = Vbe;


// Obtener VB




}



