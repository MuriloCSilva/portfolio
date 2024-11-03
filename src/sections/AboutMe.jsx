import { notebook } from "../assets/images"

const AboutMe = () => {
  return (
    <div className="px-9 md:px-48 flex flex-col justify-between items-center xl:flex-row">
      <div className="text-white col-md-6 z-50 " data-aos="fade-right">
        <h2 className="text-4xl lg:text-7xl font-semibold">Hello! I'm<br/><span className="text-gradient">Murilo Câmara</span></h2>
        <h3 className="texlt-2xl lg:text-2xl">Full Stack Developer</h3>
        <p className="font-normal text-sm md:text-base text-gray-300 mt-2 w-[300px] md:w-[700px]">I'm 20 years old. This is my portfolio. Here you’ll find my projects, professional experiences, and contact information. Throughout my journey in development area, I’ve been developing skills and creating solutions that I’m excited to share with you. Feel free to explore and learn more about my work!</p>
      </div>
      <div className="items-center mt-10 md:mt-0" data-aos="fade-up">
        <img 
          src={notebook} 
          alt="notebook" 
          className="lg:w-[500px]"
        />
      </div>

      <div className="z-0">
        <div className="z-[0] absolute w-[20%] h-[7%] top-60 left-40 blue_gradient" />
      </div>
    </div>
    
    
  )
}

export default AboutMe