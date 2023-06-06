import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footerc">
              <h3>
                Copyright © {new Date().getFullYear()}. All rights are reserved | Powered by React.js
              </h3>
              <div className="footerc__socials">
                <a
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/garettpf/"
                >
                  <FaGithub className='footerc__icons'/>
                </a>
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/GarettPF"
                >
                  <FaLinkedin className='footerc__icons'/>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  