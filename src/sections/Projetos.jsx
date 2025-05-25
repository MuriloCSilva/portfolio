import { projetos } from "../constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projetos = () => {
  return (
    <div className="px-9 md:px-48 z-50 w-full overflow">
      
      <h2 className="text-2xl lg:text-3xl font-semibold">Projetos</h2>
      <div className="flex flex-row flex-wrap justify-between mt-12">
        <Carousel className="w-full flex items-center">
          <CarouselContent className="w-full">
            {projetos.map((projeto) => (
              <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3 flex items-center justify-center" key={projeto.titulo}              >
                <div 
                  className="bg-smoky-black-lighter p-5 rounded-2xl w-full max-w-[300px] hover:cursor-pointer hover:bg-smoky-black transition duration-200"
                  onClick={() => window.open(projeto.urlGitHub, "_blank")}
                >
                  <div className="relative w-full h-[200px]">
                    <img
                      src={projeto.imageURL}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-bold text-[24px]">{projeto.titulo}</h3>
                    <p className="text-slate-300 h-[60px] overflow-hidden">{projeto.descricao}</p>
                  </div>
                  <div className="flex gap-4 mt-3">
                    {projeto.tags.map((tags) => (
                      <span
                        className={`${tags.cor} px-4 py-2 object-contain text-[14px] rounded-full`}
                        key={tags.tagName}
                      >
                        {tags.tagName}
                      </span>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-slate-400"/>
          <CarouselNext className="text-slate-600"/>
        </Carousel>
      </div>
    </div>
  );
};

export default Projetos;
