import { Briefcase, Code } from "lucide-react";
import { User } from "lucide-react";


export const AboutSection = () => {
  return (
  <section id="About" className="py-24 px-4 relative">
    <div
     className="container mx-auto max-w-5xl">
      <h2
       className="text-3xl md:text-4xl font-bold mb-12 text-center">
      About <span className="text-primary">Me</span>
      </h2>

     <div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div
       className="space-y-6">
       <h3
        className="text-2xl font-semibold">
       Front-end Developer
       </h3>

       <p className="text-muted-foreground">
        I am a  Front-End Developer with a strong foundation in building responsive and interactive web applications. I love turning complex designs into pixel-perfect code using React, JavaScript, and Tailwind CSS. My focus is always on creating seamless user experiences and writing clean, maintainable code. I’m constantly learning new technologies and am excited to contribute my skills to a professional team where I can build impactful digital products.
       </p>

       <p className="text-muted-foreground">
        "I am a Front-End Developer who believes that a website should look as good as it functions. I specialize in building scalable web apps using React and Tailwind. I enjoy the challenge of solving layout problems and optimizing performance. Beyond coding, I am a lifelong learner dedicated to staying ahead of the curve in the ever-evolving world of web development
       </p>

       <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <a href="contact" className="cosmic-button">
         Get In Touch
        </a>

        <a
         href=""
          className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition duration-300"
          >
          Download CV
        </a>

       </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
             <Code className="h-6 w-6 text-primary"/>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">Web Development
               </h4>
              <p className="text-muted-foreground">
                Creating responsive websites and web application with modern frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className="gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
             <User className="h-6 w-6 text-primary"/>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">UI/UX Design
               </h4>
              <p className="text-muted-foreground">
                Designing intuitive user interfaces and seamless user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
             <Briefcase className="h-6 w-6 text-primary"/>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">Project Management
               </h4>
              <p className="text-muted-foreground">
                Leading project from conception to completion with agile methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  </section>
  );
};