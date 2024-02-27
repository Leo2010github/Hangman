var ImagenesEF = ["O1.png", "O2.png", "O3.png", "O4.png", "O5.png", "O6.png", "O7.png", "O8.png", "O9.png", "O10.png", "O11.png"];
var ImagenesF = ["O1.png", "O2.png", "O3.png", "O4.png", "O5.png", "O6.png", "O7.png", "O8.png", "O9.png", "O10.png", "O11.png"];
var ImagenesN = ["O1.png", "O2.png", "O3.png", "O4.png", "O5.png", "O6.png", "O7.png"];
var ImagenesD = ["O1.png", "O2.png", "O3.png", "O4.png", "O5.png", "O6.png", "O7.png"];
var ImagenesED = ["O1.png", "O2.png", "O3.png", "O4.png", "O5.png", "O6.png", "O7.png"];
var StickMan = 0;
var ListaDeImagenes = [ImagenesEF, ImagenesF, ImagenesN, ImagenesD, ImagenesED];
var ImagenesOcupadasNum_s = localStorage.getItem("Imagenes");
var ImagenesOcupadas = ListaDeImagenes[ImagenesOcupadasNum_s];

var ListaDePalabrasEF = ["CASA", "GATO", "PERRO", "CARRO", "ARBOL", "AVION", "NUBE", "FLOR", "TREN", "ROJO", "AZUL", "CAFE", "DULCE", "CAJA"];
var ListaDePalabrasF = ["CASA", "GATO", "PERRO", "CARRO", "ARBOL", "AVION", "NUBE", "FLOR", "TREN", "ROJO", "AZUL", "CAFE", "DULCE", "CAJA"];
var ListaDePalabrasN = ["IGUANA", "IMAN", "GANCHO", "HUEVO", "CABLE", "ESCOBA", "CUADERNO", "LIBRETA", "ESCRITORIO", "PELUCHE", "JUGETE", "SUDADERA", "BICICLETA"];
var ListaDePalabrasD = ["SACAPUNTAS", "PRESENTE", "PROGRAMA", "GOBIERNO", "HISTORIA", "ADELANTE", "AMBIENTE", "PERSONAS", "HACIENDO", "BASTANTE", "MILLONES", "ETIQUETA", "NACIONAL", "PROYECTO", "PREGUNTA", "PRIMEROS", "ESTRELLA", "ANIMALES", "JUSTICIA", "RECIENTE"];
var ListaDePalabrasED = ["TRANSUSTANCIACION", "CLAVICEMBALO", "HIPOPOTOMONSTROSESQUIPEDALIOFOBIA", "OVOVIVIPARO", "ARTERIOSCLEROSIS", "PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS", "CALEIDOSCOPIO", "ESTERNOCLEIDOMASTOIDEO", "DESOXIRRIBONUCLEICO", "OTORRINOLARINGOLOGO", "PARANGARICUTIRIMICUARO", "DELICUESCENTE", "DIMETILNITROSAMINA", "PARALELEPIPEDO", "HEXAKOSIOIHEXEKONTAHEXAFOBIA", "DIHIDROXIFENILALANINA", "ELECTROENCEFALOGRAFISTA"];
var ListaDeListas = [ListaDePalabrasEF, ListaDePalabrasF, ListaDePalabrasN, ListaDePalabrasD, ListaDePalabrasED];
var ListaOcuadaNum_s = localStorage.getItem("Lista");
var ListaOcuada = ListaDeListas[ListaOcuadaNum_s];

var Vocales = ["A", "E", "I", "O", "U"];
var Consonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var Activada = localStorage.getItem("Activada");
var Juntadas = 0;
var Menos = localStorage.getItem("Menos");
var Turnos = localStorage.getItem("Turnos");    
var LetrasUsadasTotales = ["-"];
var LetrasCompletadas = 0;
var ConsonantesCompletadas = 0;
var VocalesTotales = 0;
var ConsonantesTotales = 0;
var Desactivar = localStorage.getItem("Desactivar");

var LetrasUsadasTotales_L = LetrasUsadasTotales.length;
var Vocales_L = Vocales.length;
var Consonantes_L = Consonantes.length;

var Pista = localStorage.getItem("Pista");
var ListaPista = ["Lugar donde vive alguien", "Mascota que le gusta gugar con el estambre", "El mejor amigo del hombre", "Vehiculo", "Ser vivo que se alimenta de la fotosintesis", "Transporte aereo", "Decora el cielo", "planta que desprende olor", "Transpote en vias", "Color de la sangre", "Color del cielo", "Se toma en las mañanas", "La gusta a los niños", "Empaque de carton"];


var NoPasar = 0;
var PuntosV_Dar = parseInt(localStorage.getItem("PuntosV_Dar"));
var PuntosV_Quitar = parseInt(localStorage.getItem("PuntosV_Quitar"));
var PuntosV = parseInt(localStorage.getItem("PuntosV"));

function Valores(){
    NumeroAleatorio = Math.floor(Math.random() * ListaOcuada.length);
    PalabraAleatoria = ListaOcuada[parseInt(NumeroAleatorio)];
    PalabraAleatoria_L = PalabraAleatoria.length;
    PalabraAleatoria_G = PalabraAleatoria;
    PalabraAleatoria_L = PalabraAleatoria.length;
    PalabraAcumulada = "";
    LetrasErroneas = [];
    if (Pista == 1) {
        document.getElementById("Pista").innerHTML = "Pista: " + ListaPista[NumeroAleatorio];
    }
    for (let i = 0; i < PalabraAleatoria_L; i++) {
        PalabraAleatoria_C = PalabraAleatoria.charAt(i);
        PalabraAleatoria_G = PalabraAleatoria_G.replace(PalabraAleatoria_C, " _ ");
        PalabraAcumulada = PalabraAcumulada + "<span id='" + i + "' class='HEJEt'> _ </span>";
        document.getElementById("EtiquetaPalabraAdivinar").innerHTML = PalabraAcumulada;
    } 
    for (i2 = 0; i2 < PalabraAleatoria_L; i2++) {
        PalabraAleatoria_Comparar = PalabraAleatoria.charAt(i2);
        if (PalabraAleatoria_Comparar == " ") {
            LetrasCompletadas = LetrasCompletadas + 1;
            document.getElementById(i2).innerHTML = " ";
        }
    }
    for (let v = 0; v < Vocales_L; v++) {
        Vocales_C = Vocales[v];
        for (let v2 = 0; v2 < PalabraAleatoria_L; v2++) {
            PalabraAleatoria_Comparar = PalabraAleatoria.charAt(v2);
            if (Vocales_C == PalabraAleatoria_Comparar) {
                VocalesTotales = VocalesTotales + 1;
            }
        }
    }
    for (let c = 0; c < Consonantes_L; c++) {
        Consonantes_C = Consonantes[c];
        for (let c2 = 0; c2 < PalabraAleatoria_L; c2++) {
            PalabraAleatoria_Comparar = PalabraAleatoria.charAt(c2);
            if (Consonantes_C == PalabraAleatoria_Comparar) {
                ConsonantesTotales = ConsonantesTotales + 1;
            }
        }
    }
    if (ConsonantesTotales == 0) {
        Activada = 0;
        if (Desactivar == 0) {
            document.getElementById("Pista").innerHTML = "Vocales Habilitadas";
        }
    }
    document.getElementById("Puntos").innerHTML = "Puntos: " + PuntosV;
}
function Letra(LetraABC){
    Esta = 0;
    Veces = 0;
    Repetida = 0;
    Vocal = 0;
    LetrasUsadasTotales_L = LetrasUsadasTotales.length;
    Vocales_L = Vocales.length;
    Consonantes_L = Consonantes.length;
    for (let ice = 0; ice < LetrasUsadasTotales_L; ice++) {
        LetrasUsadasTotales_C = LetrasUsadasTotales[ice];
        if (LetrasUsadasTotales_C == LetraABC || NoPasar == 1) {
            Repetida = 1;
        }
        else if (ice == LetrasUsadasTotales_L - 1 && Repetida == 0) {
            for (let i3 = 0; i3 < Vocales_L; i3++) {
                Vocales_C = Vocales[i3];
                if (Vocales_C == LetraABC && Activada == 1 && Juntadas == 0) {
                    Vocal = 1;
                    document.getElementById("Pista").innerHTML = "⚠️Vocales Deshabilitadas, Adivina Una Consonante⚠️";
                }
                else if (i3 == Vocales_L - 1 && Vocal == 0) {
                    for (ic = 0; ic < PalabraAleatoria_L; ic++) {
                        PalabraAleatoria_Comparar = PalabraAleatoria.charAt(ic);
                        if (PalabraAleatoria_Comparar == LetraABC) {
                            Esta = 1;
                            Veces = Veces + 1;
                            for (let i4 = 0; i4 < Vocales_L; i4++) {
                                Vocales_C = Vocales[i4];
                                if (Vocales_C == LetraABC && Veces == 1) {
                                    Vocal = 1;
                                    Juntadas = Juntadas - 1;
                                }
                                else if (i4 == Vocales_L - 1 && Vocal == 0 && Veces == 1) {
                                    Juntadas = Juntadas + 1;
                                    if (Desactivar == 0) {
                                        document.getElementById("Pista").innerHTML = "Vocales Habilitadas";
                                    }
                                    if (Menos == 1 && Veces == 1) {
                                        if (Turnos > 0) {
                                            Turnos = Turnos - 1
                                            if (Turnos == 0) {
                                                Activada = 0;
                                                if (Desactivar == 0) {
                                                    document.getElementById("Pista").innerHTML = "Vocales Habilitadas";
                                                }
                                            }
                                        }                         
                                    }
                                }
                            }
                            for (let i5 = 0; i5 < Consonantes_L; i5++) {
                                Consonantes_C = Consonantes[i5];
                                if (Consonantes_C == LetraABC) {
                                    ConsonantesCompletadas = ConsonantesCompletadas + 1;
                                    if (ConsonantesCompletadas == ConsonantesTotales) {
                                        Activada = 0;
                                        if (Desactivar == 0) {
                                            document.getElementById("Pista").innerHTML = "Vocales Habilitadas";
                                        }
                                    }
                                }
                            }
                            document.getElementById(ic).innerHTML = LetraABC;
                            LetrasCompletadas = LetrasCompletadas + 1;
                            if (LetrasCompletadas == PalabraAleatoria_L) {
                                document.getElementById("StickManAhorcado").src = "Y.png";
                                NoPasar = 1;
                                PuntosV = PuntosV + PuntosV_Dar;
                                document.getElementById("Puntos").innerHTML = "Puntos: " + PuntosV;
                                localStorage.setItem("PuntosV", PuntosV);
                                document.getElementById("Continuar").innerHTML = "<button onclick='Cont()' class='Continuar'>Continuar</button>";
                            }
                            document.getElementById(LetraABC).style.backgroundColor = "rgb(36, 36, 156, 0.641)";
                        }
                        else if (ic == PalabraAleatoria_L - 1 && Esta == 0) {
                            Veces = Veces + 1;
                            for (let i6 = 0; i6 < Vocales_L; i6++) {
                                Vocales_C = Vocales[i6];
                                if (Vocales_C == LetraABC && Veces == 1) {
                                    Vocal = 1;
                                    Juntadas = Juntadas - 1;
                                }
                            }
                            LetrasErroneas.push(" " + LetraABC);
                            document.getElementById("EtiquetaLetrasUsadas").innerHTML = LetrasErroneas;
                            document.getElementById(LetraABC).style.backgroundColor = "rgb(165, 38, 38, 0.641)";
                            if (StickMan < ImagenesOcupadas.length) {
                                StickMan = StickMan + 1;
                                document.getElementById("StickManAhorcado").src = ImagenesOcupadas[StickMan];
                                if (StickMan == ImagenesOcupadas.length) {
                                    if (StickMan == 11) {
                                        document.getElementById("StickManAhorcado").src = "XX2.png"
                                        NoPasar = 1;
                                        PuntosV = PuntosV - PuntosV_Quitar;
                                        document.getElementById("Puntos").innerHTML = "Puntos: " + PuntosV;
                                        localStorage.setItem("PuntosV", PuntosV);
                                        document.getElementById("Continuar").innerHTML = "<button onclick='Cont()' class='Continuar'>Continuar</button>";
                                        document.getElementById("Pista").innerHTML = "La Palabra Era: " + PalabraAleatoria;
                                    }
                                    else{
                                        document.getElementById("StickManAhorcado").src = "XX.png"; 
                                        NoPasar = 1;          
                                        PuntosV = PuntosV - PuntosV_Quitar;
                                        document.getElementById("Puntos").innerHTML = "Puntos: " + PuntosV;
                                        localStorage.setItem("PuntosV", PuntosV);
                                        document.getElementById("Continuar").innerHTML = "<button onclick='Cont()' class='Continuar'>Continuar</button>";
                                        document.getElementById("Pista").innerHTML = "La Palabra Era: " + PalabraAleatoria;
                                    }
                                }
                            }
                        }
                    }
                    LetrasUsadasTotales.push(LetraABC);
                }
            }
        }
    }
}
function Cont() {
    window.location = "index2.html";
}
//PalabraAleatoria_GSinEspacio = PalabraAleatoria;
//for (ise = 0; ise < PalabraAleatoria_L; ise++) {
//    PalabraAleatoria_C2 = PalabraAleatoria.charAt(ise);
//   PalabraAleatoria_GSinEspacio = PalabraAleatoria_GSinEspacio.replace(PalabraAleatoria_C2, "_");
//}
//PalabraAleatoria_SinLetras = PalabraAleatoria_GSinEspacio;
//Guion_Especifico = PalabraAleatoria_SinLetras.charAt(ic);
//console.log(ic);
//console.log(Guion_Especifico);
//PalabraAleatoria_SinLetras = PalabraAleatoria_SinLetras.replace(Guion_Especifico, LetraABC);
//console.log(PalabraAleatoria_SinLetras);
//document.getElementById("A").style.backgroundColor = "rgb(255, 81, 0)";
//document.getElementById("A").style.backgroundColor = "rgb(94, 255, 0)";