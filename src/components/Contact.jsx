import { FaMapMarkedAlt, FaEnvelopeOpenText, FaDiscord } from 'react-icons/fa';

function Contact() {
    return (
      <>
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact__content">
              <div className="contact__title">
                <p>contact</p>
                <h3>Reach out & connect with me! 👇</h3>
              </div>
              <div className="contact__icons">

                <div className="contact__icon-box">
                  <span>
                    <FaMapMarkedAlt/>
                  </span>
                  <div className="contact__info">
                    <h3>Location</h3>
                    <p>Honolulu, Hawaii, USA</p>
                  </div>
                </div>
  
                <div className="contact__icon-box">
                  <span>
                    <FaEnvelopeOpenText/>
                  </span>
                  <div className="contact__info">
                    <h3>Mail</h3>
                    <a href="mailto:garettpfolster677@gmail.com">
                      garettpfolster677@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact__icon-box">
                  <span>
                    <FaDiscord/>
                  </span>
                  <div className="contact__info">
                    <h3>Discord</h3>
                    <p>TrueMO0#2408</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Contact;
  