import { formacao } from "../constants";

const Formacao = () => {
  return (
    <div className="px-9 md:px-48 z-[50]">
      <h2 className="text-2xl lg:text-3xl font-semibold">Formação Acadêmica</h2>
      <div className="flex flex-row flex-wrap justify-between mt-12 gap-4 md:gap-0">
        {formacao.map((item) => (
          <div 
            key={item.curso} 
            className="bg-smoky-black-lighter p-8 rounded-md flex flex-col justify-between lg:w-[400px] z-50 mb-4"
          >
            <h2 className="lg:text-xl">{item.curso}</h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base">
              {item.instituicao}
              <br/>
              {item.inicio} - {item.conclusao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formacao;
