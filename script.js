
class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = parseFloat(nota1);
        this.nota2 = parseFloat(nota2);
        this.nota3 = parseFloat(nota3);
        this.nota4 = parseFloat(nota4);
    }

   
    promedio() {
        const PROM = this.nota1 * 0.15 + this.nota2 * 0.2 + this.nota3 * 0.25 + this.nota4 * 0.4;
        return PROM.toFixed(2); 
    }

   
    condicion() {
        const promedioFinal = this.promedio();
        if (promedioFinal >= 12) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }

 
    obsequio() {
        const promedioFinal = this.promedio();
        if (promedioFinal > 17) {
            return "Mochila";
        } else {
            return "Ningún obsequio";
        }
    }
}


const form = document.getElementById('alumnoForm');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;

  
    const alumno = new Alumno(codigo, nombre, nota1, nota2, nota3, nota4);


    const resultado = `
        <h3>Resultado:</h3>
        <p><strong>Código:</strong> ${alumno.codigo}</p>
        <p><strong>Nombre:</strong> ${alumno.nombre}</p>
        <p><strong>Promedio:</strong> ${alumno.promedio()}</p>
        <p><strong>Condición:</strong> ${alumno.condicion()}</p>
        <p><strong>Obsequio:</strong> ${alumno.obsequio()}</p>
    `;

    
    document.getElementById('resultado').innerHTML = resultado;
});