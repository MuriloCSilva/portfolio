import { experienciaProfissional } from "../constants";

const Experiencia = () => {
  return (
    <div className="px-9 md:px-48 font-semibold z-50"> 
        <h2 className="text-2xl lg:text-3xl">Experiência Profissional</h2>
        <div className="flex flex-row flex-wrap justify-between mt-4">
            {experienciaProfissional.map((item) => (
                <div 
                    key={item.empresa}
                    className="flex mt-8 gap-8"
                >
                    <h3 className="text-slate-300">{item.periodo}</h3>
                    <div className="flex flex-col gap-3 justify-start">
                        <h3 className="text-xl">{item.funcao} · {item.empresa}</h3>
                        <p className="text-slate-300 text-sm md:text-base">{item.experiencia}</p>
                        <div className="flex flex-wrap gap-4">{item.tecnologias.map((tecnologia) => (
                            <p 
                                key={tecnologia.nome}
                                className={`text-[14px] font-normal py-2 px-4 rounded-full ${tecnologia.cor}`}
                            >
                                    {tecnologia.nome}
                                  
                            </p>
                        ))}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiencia;