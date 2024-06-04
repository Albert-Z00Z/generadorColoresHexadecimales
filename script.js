const coloresOscuros = [
    "#543556", "#3a135d", "#120400", "#4a1b64", "#56424b",
    "#310d59", "#5b1f51", "#196064", "#1e633a", "#091352",
    "#5c1553", "#0a0937", "#0d0f19", "#5a404f", "#502b36",
    "#261f27", "#27230a", "#175f16", "#29282a", "#225025",
    "#41053f", "#0d0d0c", "#1d545f", "#540408", "#20512e",
    "#5f1814", "#590844", "#094c46", "#2f2545", "#14125d",
    "#311614", "#5a173d", "#391636", "#4d3b5e", "#02454b",
    "#06065a", "#5b1411", "#2e3342", "#330203", "#1a525d",
    "#382c23", "#12385d", "#565046", "#4c470b", "#266111",
    "#085a54", "#07065d", "#0c3e28", "#415a1c", "#1a484a",
    "#340e4b", "#365c4b", "#3a401d", "#5c1915", "#04351f",
    "#5d0e5b", "#103c38", "#491924", "#5b5104", "#5f3654",
    "#2c0137", "#2e1010", "#3b614d", "#354230", "#49331a",
    "#52241c", "#100c1c", "#43231b", "#1d4b5c", "#065a62",
    "#043531", "#411a4d", "#62162f", "#51031e", "#4b442f",
    "#535f2c", "#47642a", "#5b1801", "#4d4d0a", "#142c4c",
    "#1b5058", "#010c1c", "#2d4401", "#22151c", "#283d3a",
    "#141432", "#0e4451", "#442f43", "#5c601e", "#38283b",
    "#232131", "#3a5d45", "#092702", "#3b0d18", "#5a4510",
    "#212d53", "#23463e", "#1a6455", "#346107", "#32392d"
];

  function obtenerIndiceAleatorio() {
    const indiceAleatorio = Math.floor(coloresOscuros.length * Math.random());
    return indiceAleatorio;
  }
  
  const cuerpo = document.querySelector("body");
  const elementoSpanCodigoHex = document.querySelector("#bg-hex-code");
  
  function cambiarColorDeFondo() {
    const color = coloresOscuros[obtenerIndiceAleatorio()];
  
    elementoSpanCodigoHex.innerText = color;
    cuerpo.style.backgroundColor = color;
  }
  const boton = document.querySelector("#btn");
  boton.onclick = cambiarColorDeFondo;
  