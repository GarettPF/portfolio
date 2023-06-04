import ProBox from "./ProBox";
import Espresso from '../images/espresso.webp';
import TrafficSim from '../images/trafficsim.webp';
import Science from '../images/sciencear.webp';
import Cairrier from '../images/cairrier.webp';

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Every project represents a distinct and bespoke development endeavor 🧑‍💻</h3>
            <div className="projects-grid">
              <ProBox
                title="Espresso"
                img={Espresso}
                description="Espresso is a very basic programming language and the Compiler is written in java. The Compiler output can be executed using a JVM."
                techno1="Java"
                techno2="Jasmin"
                code="https://github.com/GarettPF/Espresso-Language"
                demo="https://youtu.be/lcm88kNYWRo"
                scrollY="-30%"
                icon="☕"
              />

              <ProBox
                title="Traffic Simulation"
                img={TrafficSim}
                description="Python-powered traffic simulation app for modeling and analyzing traffic flow dynamics."
                techno1="Python"
                code="https://github.com/GarettPF/Traffic-Simulation"
                demo="https://coindom-crypto-search.vercel.app/"
                scrollY="0%"
                icon="🚗"
                cName="reversed-proj"
              />

              <ProBox
                title="Science.AR"
                img={Science}
                description="Web app leveraging augmented reality to provide interactive science education. Designed exclusively for mobile."
                techno1="JavaScript"
                techno2="Bootstrap"
                code="https://github.com/GarettPF/Science.AR"
                demo="https://garettpf.github.io/Science.AR/"
                scrollY="-60%"
                icon="🏋️"
              />

              <ProBox
                title="cAIrrier"
                img={Cairrier}
                description="A HIPAA compliant semi-automated two way messaging system designed for healthcare providers and powered by artificial intelligence"
                techno1="JavaScript"
                techno2="Bootstrap"
                code="https://github.com/GarettPF/cAIrrier"
                demo="https://cairrier.web.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
