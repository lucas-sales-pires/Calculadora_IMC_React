import { useState } from "react";
import Compform from "@/components/Compform";
import Tabelaimc from "@/components/Tabelaimc";

export default function Calcimc() {
    const [peso, setPeso] = useState<string>('');
    const [altura, setAltura] = useState<string>('');
    const [imc, setImc] = useState<string>('');

    function calcular() {
        const alt = Number(altura);
        const pes = Number(peso);
        const res = pes / (alt * alt);
        
        setImc(res.toFixed(2));
        
    }i

  return (
    <div>
      <p>Cálculo do IMC</p>
        <Compform label = "peso" state={peso} funcState={setPeso}/>
        <Compform label = "altura" state={altura} funcState={setAltura}/>
        <button onClick={calcular}>Calcular</button>
        <p>Resultado {imc}</p>
        <Tabelaimc />
    </div>
  );
}
