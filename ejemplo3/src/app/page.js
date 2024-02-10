"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
const [numero1, setNumero1] = useState('');
const [numero2, setNumero2] = useState('');
const [resultado, setResultado] = useState(null);

const sumar = () => {
    if (!numero1 || !numero2) {
        setResultado("Por favor, completa ambos campos antes de realizar la operación.");
    } else {
        const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
        setResultado(`Resultado de la suma: ${resultadoSuma}`);
    }
};


const restar = () => {
    if (!numero1 || !numero2) {
        setResultado("Por favor, completa ambos campos antes de realizar la operación.");
      } else {
            const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
        setResultado(`Resultado de la resta: ${resultadoResta}`);
    }
};

const multiplicar = () =>{
    if (!numero1 || !numero2) {
        setResultado("Por favor, completa ambos campos antes de realizar la operación.");
      } else {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicacion: ${resultadoMultiplicacion}`)
    }
};

const potencia = ()=>{
    if (!numero1 || !numero2) {
        setResultado("Por favor, completa ambos campos antes de realizar la operación.");
      } else {
    const resultadopotencia = (Math.pow (numero1, numero2));
    setResultado(`Reultado de la potenciación del numero: ${resultadopotencia}`)
    }
};

const division = () => {
    if (!numero1 || !numero2) {
        setResultado("Por favor, completa ambos campos antes de realizar la operación.");
      } else {
    if (parseFloat(numero2) === 0) {
      setResultado("No se puede realizar división entre cero");
    } else {
      const resultadodivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadodivision}`);
    }
  }
};

const raiz = ()=>{
    if (!numero1 || !numero2) {
        setResultado("Por favor, completa ambos campos antes de realizar la operación.");
      } else {
    const resultadopotencia = (Math.sqrt (numero1, numero2));
    setResultado(`Reultado de la Raiz  del numero ${numero1} es: ${resultadopotencia}`)
    }
};

const reiniciar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
};

return (
<main className={styles.main}>
<div className={styles.calculadora}>
<div className={styles.numeros}>
<label className={styles.text}>Número 1:</label>
<input className={styles.inputnum} type="number"
value={numero1} onChange={(e) => setNumero1(e.target.value)} />
</div>
<div className={styles.numeros}>
<label className={styles.text} >Número 2:</label>
<input className={styles.inputnum} type="number"
value={numero2} onChange={(e) => setNumero2(e.target.value)} />
</div>
<div>
<button className={styles.button}
onClick={sumar}>Sumar</button>
<button className={styles.button}
onClick={restar}>Restar</button>
<button className={styles.button}
onClick={multiplicar}>multiplicación</button>
<button className={styles.button}
onClick={division}>división</button>
<button className={styles.button}
onClick={potencia}>Potencia</button>
<button className={styles.button}
onClick={raiz}>Raiz</button>
<button className={styles.button} 
onClick={reiniciar}>Reiniciar</button>
</div>
{resultado && <div
className={styles.resultado}>{resultado}</div>}
</div>
</main>
);
}