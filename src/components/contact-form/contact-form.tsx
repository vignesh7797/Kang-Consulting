import { useState } from 'react';
import './contact-form.css';

type ContactForm = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC = () => {

  const [values, setValues] = useState<ContactForm>({
    firstname :"",
    lastname:"",
    phone:"",
    email:"",
    subject:"",
    message:""
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValues({...values, [event.target.name] : event.target.value})
  }

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setValues({...values, [event.target.name] : event.target.value})
  }

  const onSubmit = (event : React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log(values)
  }
  return (
    <div className="contact-form">
      <div className="form-banner"></div>
      <div className="form-panel">
        <p className="title-sm text-sec-light">Business Consult</p>
        <p className="title-lg text-secondary">Get in touch</p>

        <form onSubmit={onSubmit}>
          <div className="grid grid:cols-1 md:grid-cols-2 gap-4">
            
            <div className="input-grp">
              <label className="input-label" htmlFor="firstname">
                First Name
              </label>
              <input
                className="input-box"
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={onChange}
              />
            </div>

            <div className="input-grp">
              <label className="input-label" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="input-box"
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={onChange}
              />
            </div>

            <div className="input-grp">
              <label className="input-label" htmlFor="phone">
                Your Phone
              </label>
              <input
                className="input-box"
                type="text"
                name="phone"
                placeholder="Your Phone"
                onChange={onChange}
              />
            </div>

            <div className="input-grp">
              <label className="input-label" htmlFor="email">
                Your Email
              </label>
              <input
                className="input-box"
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={onChange}
              />
            </div>

            <div className="input-grp md:col-span-2">
              <label className="input-label" htmlFor="subject">
                Subject
              </label>
              <input
                className="input-box"
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={onChange}
              />
            </div>

            <div className="input-grp md:col-span-2">
              <label className="input-label" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="input-area"
                name="message"
                placeholder="Your Message"
                onChange={onChangeTextArea}
              ></textarea>
            </div>

          </div>

          <button className="prim-btn mt-8" type={"submit"}>Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
