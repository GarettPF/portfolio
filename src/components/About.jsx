// import AboutImg from "../images/about-img.webp";
// import RoundedText from "../images/text2.svg";
// import WorkingEmoji from "../images/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              {/* <img src={WorkingEmoji} alt="emoji" className="work-emoji" /> */}
              {/* <img src={AboutImg} alt="mee" className="img-side__main-img" /> */}
              <span>
                {/* <img src={RoundedText} alt="text" /> */}
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A Passionate Software Developer <br /> based in Honolulu, Hawaii, USA
                📍
              </h4>
              <p>
              "As a passionate software developer with 6 years of
               coding experience and a recent college graduate, I bring a relentless 
               curiosity and a drive to transform ideas into reality. 
               With a foundation in various programming languages and a deep 
               understanding of software development principles, I thrive on 
               tackling challenges and finding elegant solutions. My commitment 
               to continuous learning, combined with my creativity and attention 
               to detail, fuels my ambition to craft innovative and user-centric 
               applications that make a meaningful impact."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
