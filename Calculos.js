var $select1 = document.getElementById("Opc1");
console.log($select1);
$select1.addEventListener("change", opcionCambiada);

var $select2 = document.getElementById("Opc2");
console.log($select2);
$select2.addEventListener("change", opcionCambiada2);

var $select3 = document.getElementById("Opc3");
console.log($select3);
$select3.addEventListener("change", opcionCambiada3);

var $select4 = document.getElementById("Opc4");
console.log($select4);
$select4.addEventListener("change", opcionCambiada4);

var $select5 = document.getElementById("Opc5");
console.log($select5);
$select5.addEventListener("change", opcionCambiada5);

var $select6 = document.getElementById("Opc6");
console.log($select6);
$select6.addEventListener("change", opcionCambiada6);

var $select7 = document.getElementById('Opc7');
console.log($select7)
$select7.addEventListener("change", opcionCambiada7);

var $select8 = document.getElementById('Opc8');
console.log($select8)
$select8.addEventListener("change", opcionCambiada8);

var B = 0;

function opcionCambiada() {
  var calculo = $select1.selectedIndex;
  var IB = document.getElementById("PF-IB");
  var IC = document.getElementById("PF-IC");
  var VC = document.getElementById("PF-VC");
  var VB = document.getElementById("PF-VB");
  var VCE = document.getElementById("PF-VCE");
  var VCC = document.getElementById("PF-VCC");
  var RC = document.getElementById("PF-RB");
  var RB = document.getElementById("PF-RC");

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
        VCC.disabled = false;
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

// Apartado de Polarizacion de Emisor

function opcionCambiada3() {
  var calculo = $select3.selectedIndex;
  var IB = document.getElementById("PE-IB");
  var IC = document.getElementById("PE-IC");
  var IE = document.getElementById("PE-IE");
  var VC = document.getElementById("PE-VC");
  var VE = document.getElementById("PE-VE");
  var VB = document.getElementById("PE-VB");
  var VCE = document.getElementById("PE-VCE");
  var VCC = document.getElementById("PE-VCC");
  var RC = document.getElementById("PE-RB");
  var RB = document.getElementById("PE-RC");
  var RE = document.getElementById("PE-RE");

  if (calculo == 1) {
    IB.disabled = true;
    IC.disabled = true;
    IE.disabled = true;
    VC.disabled = true;
    VE.disabled = true;
    VB.disabled = true;
    VCE.disabled = true;
    VCC.disabled = false;
    RC.disabled = false;
    RB.disabled = false;
    RE.disabled = false;
  } else {
    IB.disabled = false;
    IC.disabled = false;
    IE.disabled = false;
    VC.disabled = false;
    VE.disabled = false;
    VB.disabled = false;
    VCE.disabled = false;
    VCC.disabled = false;
    RC.disabled = true;
    RB.disabled = true;
    RE.disabled = true;
  }
}

function opcionCambiada4() {
  var transistor = $select4.selectedIndex;
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

// Fin apartado de Polarizacion de Emisor

//Apartado de Polarizacion por divisor de voltaje

function opcionCambiada5() {
  var calculo = $select5.selectedIndex;
  var IB = document.getElementById("PDV-IB");
  var IC = document.getElementById("PDV-IC");
  var VC = document.getElementById("PDV-VC");
  var VE = document.getElementById("PDV-VE");
  var VB = document.getElementById("PDV-VB");
  var VCE = document.getElementById("PDV-VCE");
  var VCC = document.getElementById("PDV-VCC");
  var R1 = document.getElementById("PDV-R1");
  var R2 = document.getElementById("PDV-R2");
  var RC = document.getElementById("PDV-RC");
  var RE = document.getElementById("PDV-RE");
  var IE = document.getElementById("PDV-IE");

  if (calculo == 1) {
    IB.disabled = true;
    IE.disabled = true;
    IC.disabled = true;
    VC.disabled = true;
    VE.disabled = true;
    VB.disabled = true;
    VCE.disabled = true;
    VCC.disabled = false;
    RC.disabled = false;
    RE.disabled = false;
    R1.disabled = false;
    R2.disabled = false;
  } else {
    IB.disabled = false;
    IE.disabled = false;
    IC.disabled = false;
    VC.disabled = false;
    VE.disabled = false;
    VB.disabled = false;
    VCE.disabled = false;
    VCC.disabled = false;
    RC.disabled = true;
    RE.disabled = true;
    R1.disabled = true;
    R2.disabled = true;
  }
}

function opcionCambiada6() {
  var transistor = $select6.selectedIndex;
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
//Fin del apartado de Polarizacion por divisor de voltaje

// Apartado Realimentacion del Colector


function opcionCambiada7() {
    var calculo = $select7.selectedIndex;
    var IB = document.getElementById('PRC-IB');
    var IC = document.getElementById('PRC-IC');
    var IE = document.getElementById('PRC-IE');
    var VC = document.getElementById('PRC-VC');
    var VB = document.getElementById('PRC-VB');
    var VE = document.getElementById('PRC-VE');
    var VCE = document.getElementById('PRC-VCE');
    var VCC = document.getElementById('PRC-VCC');
    var RC = document.getElementById('PRC-RB');
    var RB = document.getElementById('PRC-RC');
    var RE = document.getElementById('PRC-RE');

    if (calculo == 1) {
        IB.disabled = true;
        IC.disabled = true;
        IE.disabled = true;
        VC.disabled = true;
        VB.disabled = true;
        VE.disabled = true;
        VCE.disabled = true;
        VCC.disabled = false;
        RC.disabled = false;
        RB.disabled = false;
        RE.disabled = false;
    } else {
        VCC.disabled = false;
        RC.disabled = true;
        RB.disabled = true;
        RE.disabled = true;
        IB.disabled = false;
        IC.disabled = false;
        IE.disabled = false;
        VC.disabled = false;
        VB.disabled = false;
        VE.disabled = false;
        VCE.disabled = false;
    }
};


function opcionCambiada8() {
    var transistor = $select8.selectedIndex;
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


// Fin Apartado Realimentacion del Colector


function PolarizacionFija() {
    var calculo = $select1.selectedIndex;
    if (calculo == 1) {
    var Vbe = 0.7;
    var Vcc = Number(document.getElementById('PF-VCC').value);
    var Rb = Number(document.getElementById('PF-RB').value);
    var Rc = Number(document.getElementById('PF-RC').value);

  // Obtener IB
  var Ib = (Vcc - Vbe) / Rb;
  document.getElementById("PF-IB").value = Ib;

  // Obtener IC
  var Ic = Ib * B;
  document.getElementById("PF-IC").value = Ic;

  // Obtener Vrc
  var Vrc = Ic * Rc;

  // Obtener VCE
  var Vce = Vcc - Vrc;
  document.getElementById("PF-VCE").value = Vce;

  // Obtener VC
  var Vc = Vcc - Vrc;
  document.getElementById("PF-VC").value = Vc;

    // Obtener VB
    document.getElementById('PF-VB').value = Vbe;
    } else {

    var Vbe = 0.7;
    var Vcc = Number(document.getElementById('PF-VCC').value);
    var Ib = Number(document.getElementById('PF-IB  ').value);
    var Vc = Number(document.getElementById('PF-VC').value);
    var Vb = Number(document.getElementById('PF-VB').value);
    var Vce = Number(document.getElementById('PF-VCE').value);
    var Ic = Number(document.getElementById('PF-Ic').value);

    // Obtener RB
    var Rb = (Vcc - Vbe)/Ib
    document.getElementById('PF-RB').value = Rb;

    // Obtener RC
    var Rc = (Vcc - Vc)/Ic
    document.getElementById('PF-RB').value = Rb;


    }
}

function PolarizacionEmisor() {
  var calculo = $select3.selectedIndex;
  if (calculo == 1) {
    console.log("Corrientes y voltajes!");
    var Vbe = 0.7;
    var Vcc = Number(document.getElementById("PE-VCC").value);
    var Rb = Number(document.getElementById("PE-RB").value);
    var Rc = Number(document.getElementById("PE-RC").value);
    var Re = Number(document.getElementById("PE-RE").value);

    // Obtener IB
    var Ib = (Vcc - Vbe) / (Rb + (B + 1) * Re);
    document.getElementById("PE-IB").value = Ib;

    // Obtener IC
    var Ic = Ib * B;
    document.getElementById("PE-IC").value = Ic;

    // Obtener IE
    var Ie = Ib + Ic;
    document.getElementById("PE-IE").value = Ie;

    // Obtener Vrc
    var Vrc = Ic * Rc;

    // Obtener VE
    var Ve = Re * Ie;
    document.getElementById("PE-VE").value = Ve;

    // Obtener VCE
    var VCE = Vcc - Vrc - Ve;
    document.getElementById("PE-VCE").value = VCE;

    //Obtener Vc
    var Vc = VCE + Ve;
    document.getElementById("PE-VC").value = Vc;

    console.log(Vbe);
    console.log(Ve);
    //Obtener Vb
    var Vb = Vbe + Ve;
    document.getElementById("PE-VB").value = Vb;
  } else {
    console.log("Resistencias!");
    var Vbe = 0.7;
    var Vcc = Number(document.getElementById("PE-VCC").value);
    var Ib = Number(document.getElementById("PE-IB").value);
    var Ic = Number(document.getElementById("PE-IC").value);
    var Ie = Number(document.getElementById("PE-IE").value);
    var Vc = Number(document.getElementById("PE-VC").value);
    var Vb = Number(document.getElementById("PE-VB").value);
    var Ve = Number(document.getElementById("PE-VE").value);
    var Vce = Number(document.getElementById("PE-VCE").value);

    // Obtener RE
    var Re = Ve / Ie;
    document.getElementById("PE-RE").value = Re;

    // Obtener RC
    var Vrc = Vcc - Ve - Vce;
    var Rc = Vrc / Ic;
    document.getElementById("PE-RC").value = Rc;

    //Obtener RB
    var Rb = (Vcc - Vbe - Ib * (B + 1) * Re) / Ib;
    document.getElementById("PE-RB").value = Rb;
  }
}

function RealimentacionColector() {
    var calculo = $select7.selectedIndex;
    if (calculo == 1) {
    var Vbe = 0.7;
    var Vcc = Number(document.getElementById('PRC-VCC').value);
    var Rb = Number(document.getElementById('PRC-RB').value);
    var Rc = Number(document.getElementById('PRC-RC').value);
    var Re = Number(document.getElementById('PRC-RE').value);

  // Obtener IB
  var Ib = (Vcc - Vbe) / (Rb + B * (Rc + Re));
  document.getElementById("PRC-IB").value = Ib;

  // Obtener IC
  var Ic = Ib * B;
  document.getElementById("PRC-IC").value = Ic;

  // Obtener VCE
  var Vce = Vcc - Ic * (Rc + Re);
  document.getElementById("PRC-VCE").value = Vce;

    // Obtener IE
    var Ie = Ib + Ic;
    document.getElementById('PRC-IE').value = Ie

    // Obtener VCE
    var Vce = Vcc - Ic * (Rc + Re);
    document.getElementById('PRC-VCE').value = Vce

    // Obtener Vrc
    var Vrc = Ic * Rc;

    // Obtener Vc
    var Vc = Vcc - Vrc
    document.getElementById('PRC-VC').value = Vc

    // Obtener Vb
    var Vb = Vc - (Ib * Rb);
    document.getElementById('PRC-VB').value = Vb
    
    // Obtener Ve
    var Ve = Ie * Re;
    document.getElementById('PRC-VE').value = Ve

    
    }else{

    var Vbe = 0.7;
    var Vcc = Number(document.getElementById('PRC-VCC').value);
    var Ib = Number(document.getElementById('PRC-IB').value);
    var Vc = Number(document.getElementById('PRC-VC').value);
    var Vb = Number(document.getElementById('PRC-VB').value);
    var Ve = Number(document.getElementById('PRC-VE').value);
    var Vce = Number(document.getElementById('PRC-VCE').value);
    var Ic = Number(document.getElementById('PRC-IC').value);
    var Ie = Number(document.getElementById('PRC-IE').value);

    // Obtener Re
    var Re = Ve / Ie;
    document.getElementById('PRC-RE').value = Re

    // Obtener Rc
    var Vrc = Vcc - Vc; 

    var Rc = Vrc / Ic;
    document.getElementById('PRC-RC').value = Rc

    // Obtener Rb
    var Rb = (Vcc - Vbe - Ib*(B*(Rc + Re)))/Ib
    document.getElementById('PRC-RB').value = Rb



    }

}

function PolarizacionDiv() {
  var calculo = $select5.selectedIndex;
  if (calculo == 1) {
    var Vbe = 0.7;
    var Re = Number(document.getElementById("PDV-RE").value);
    var Vcc = Number(document.getElementById("PDV-VCC").value);
    var Rc = Number(document.getElementById("PDV-RC").value);
    var R1 = Number(document.getElementById("PDV-R1").value);
    var R2 = Number(document.getElementById("PDV-R2").value);

    var Vth = (Vcc * R2) / (R1 + R2);
    var Rth = (R1 * R2) / (R1 + R2);

    //Obtener Ib
    var Ib = (Vth - Vbe) / (Rth + (B + 1) * Re);
    document.getElementById("PDV-IB").value = Ib;

    //obteber Ic
    var Ic = B * Ib;
    document.getElementById("PDV-IC").value = Ic;

    var Ie = Ib + Ic;
    var Vre = Ie * Re;
    var Vrc = Ic * Rc;

    //Obtener Vce
    var Vce = Vcc - Vrc - Vre;
    document.getElementById("PDV-VCE").value = Vce;

    //Obtener Ve
    document.getElementById("PDV-VE").value = Vre;

    //Obtener Vc
    var Vc = Vce + Vre;
    document.getElementById("PDV-VC").value = Vc;

    //Obtener Vb
    var Vb = Vbe + Vre;
    document.getElementById("PDV-VB").value = Vb;

    //Obtener Ie
    var Ie = Ib + Ic;
    document.getElementById("PDV-IE").value = Ie;
  } else {
    var Vcc = Number(document.getElementById("PDV-VCC").value);
    var Ic = Number(document.getElementById("PDV-IC").value);
    var Ib = Number(document.getElementById("PDV-IB").value);
    var Vc = Number(document.getElementById("PDV-VC").value);
    var Vb = Number(document.getElementById("PDV-VB").value);
    var Vce = Number(document.getElementById("PDV-VCE").value);
    var Ve = Number(document.getElementById("PDV-VE").value);
    var Ie = Number(document.getElementById("PDV-IE").value);

    var Rc = (Vcc - Vc)/Ic;
    document.getElementById("PDV-RC").value = Rc;

    var Re = Ve / Ie;
    document.getElementById("PDV-RE").value = Re;

    var R2 = (B*Re)/10;
    document.getElementById("PDV-R2").value = R2;

    var R1 = (R2 * Vcc) - (Vb * R2)/Vb;
    document.getElementById("PDV-R1").value = R1;


  }
}
