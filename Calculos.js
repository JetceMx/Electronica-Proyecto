var $select1 = document.getElementById('Opc1');
$select1.addEventListener("change", opcionCambiada);

var $select2 = document.getElementById('Opc2');
$select2.addEventListener("change", opcionCambiada2);
var B = 0;

function opcionCambiada() {
    var calculo = $select1.selectedIndex;
    var IB = document.getElementById('PF-IB');
    var IC = document.getElementById('PF-IC');
    var VC = document.getElementById('PF-VC');
    var VB = document.getElementById('PF-VB');
    var VCE = document.getElementById('PF-VCE');
    var VCC = document.getElementById('PF-VCC');
    var RC = document.getElementById('PF-RB');
    var RB = document.getElementById('PF-RC');

    if (calculo == 1) {
        IB.disabled = true;
        IC.disabled = true;
        VC.disabled = true;
        VB.disabled = true;
        VCE.disabled = true;
        VCC.disabled = false;
        RC.disabled = false;
        RB.disabled = false;
    } else {
        VCC.disabled = true;
        RC.disabled = true;
        RB.disabled = true;
        IB.disabled = false;
        IC.disabled = false;
        VC.disabled = false;
        VB.disabled = false;
        VCE.disabled = false;
    }
};

function opcionCambiada2() {
    var transistor = $select2.selectedIndex;
    if (transistor == 1) {
        B = 80;
        console.log(B);
    } else if (transistor == 2) {
        B = 90;
        console.log(B);
    } else {
        B = 100;
        console.log(B);
    }
}

function PolarizacionFija() {

    var Vbe = 0.7;
    var Vcc = Number(document.getElementById('PF-VCC').value);
    var Rb = Number(document.getElementById('PF-RB').value);
    var Rc = Number(document.getElementById('PF-RC').value);

    // Obtener IB
    var Ib = (Vcc - Vbe) / Rb;
    document.getElementById('PF-IB').value = Ib

    // Obtener IC
    var Ic = Ib * B;
    document.getElementById('PF-IC').value = Ic

    // Obtener Vrc
    var Vrc = Ic * Rc;

    // Obtener VCE
    var Vce = Vcc - Vrc;
    document.getElementById('PF-VCE').value = Vce

    // Obtener VC
    var Vc = Vcc - Vrc;
    document.getElementById('PF-VC').value = Vc;

    // Obtener VB
    document.getElementById('PF-VB').value = Vbe;
}

function RealimentacionColector(){

    var B = 80;

    var Vbe = 0.7;
    var Vcc = Number(document.getElementById('PRC-VCC').value);
    var Rb = Number(document.getElementById('PRC-RB').value);
    var Rc = Number(document.getElementById('PRC-RC').value);
    var Re = Number(document.getElementById('PRC-RE').value);
    
     // Obtener IB
     var Ib = (Vcc - Vbe) / (Rb + B * (Rc + Re));
     document.getElementById('PRC-IB').value = Ib

     // Obtener IC
     var Ic = Ib * B;
     document.getElementById('PRC-IC').value = Ic

    // Obtener VCE
    var Vce = Vcc - Ic*(Rc+Re);
    document.getElementById('PRC-VCE').value = Vce

    // Obtener Vrc
    var Vrc = Ic * Rc;

    // Obtener Vc
    var Vc = Vcc - Vrc
    document.getElementById('PRC-VC').value = Vc



}



function PolarizacionDiv(){
    var Vbe = 0.7;
    var Re = Number(document.getElementById('PDV-RE').value);
    var Vcc = Number(document.getElementById('PDV-VCC').value);
    var Rc = Number(document.getElementById('PDV-RC').value);
    var R1 = Number(document.getElementById('PDV-R1').value);
    var R2 = Number(document.getElementById('PDV-R2').value);

    var Vth = (Vcc * R2)/(R1 + R2);
    var Rth = (R1 * R2)/(R1 + R2);
    
    

    //Obtener Ib
    var Ib = (Vth - Vbe)/(Rth + (80+1)*Re);
    document.getElementById('PDV-IB').value = Ib;
    
    //obteber Ic
    var Ic = 80 * Ib;
    document.getElementById('PDV-IC').value = Ic;

    var Ie = Ib + Ic;
    var Vre = Ie * Re;
    var Vrc = Ic * Rc;

    //Obtener Vce
    var Vce = Vcc-Vrc-Vre;
    document.getElementById('PDV-VCE').value = Vce;

    //Obtener Ve
    document.getElementById('PDV-VE').value = Vre;

    //Obtener Vc
    var Vc = Vce + Vre;
    document.getElementById('PDV-VC').value = Vc;

    //Obtener Vb
    var Vb = Vbe + Vre;
    document.getElementById('PDV-VB').value = Vb;
    
}