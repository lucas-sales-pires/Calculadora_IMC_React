import { useRouter } from "next/router"
import { useState,useEffect } from "react";


export default function Dadosimc() {
    const [peso, setPeso] = useState<any>("");
    const [altura, setAltura] = useState<any>("");
    const [imc, setImc] = useState<any>("");
    const [nome, setNome] = useState<any>("");
    const [data, setData] = useState<any>("");

    const router = useRouter();

    const { p_peso, p_altura, p_imc } = router.query;

    useEffect(()=>{
        setPeso(p_peso),
        setAltura(p_altura),
        setImc(p_imc)
        setData(new Date().toLocaleDateString())
    },[])

    return ( 
        <div>
        <div>
            <div className="flex flex-col mx-2">
                <label>Nome</label> 
                <input className="border p-1 w-full rounded-lg" type="text" value={nome} onChange={(evt)=>setNome(evt.target.value)}/>
            </div>
            <div className="flex flex-col mx-2">
                <label>Peso</label>
                <input className="border p-1 w-full rounded-lg" type="text"value={peso} readOnly/>
            </div>
            <div className="flex flex-col mx-2">
                <label>Altura</label>
                <input className="border p-1 w-full rounded-lg" type="text" value={altura} readOnly/>
            </div>
            <div className="flex flex-col mx-2">
                <label>IMC</label>
                <input className="border p-1 w-full rounded-lg" type="text" value={imc} readOnly/>
            </div>
            <div className="flex flex-col mx-2">
                <label>Data</label>
                <input className="border p-1 w-full rounded-lg" type="text" value={data}/>
            </div>
            <div className="flex flex-col mx-2 mb-2">
                <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer">Gravar</button>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex w-full bg-zinc-800 text-white">
            <div className="w-[20%]">Nome</div>
            <div className="w-[20%]">Peso</div>
            <div className="w-[20%]">Altura</div>
            <div className="w-[20%]">IMC</div>
            <div className="w-[20%]">Data</div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex w-full flex-row">
            <div className="flex-row w-[20%]">Nome</div>
            <div className="flex-row w-[20%]">Peso</div>
            <div className="flex-row w-[20%]">Altura</div>
            <div className="flex-row w-[20%]">IMC</div>
            <div className="flex-row w-[20%]">Data</div>
            </div>
        </div>
        </div>
    )
}
