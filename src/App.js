import "./styles.css";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dl54ugo",
        "template_gtnk03c",
        form.current,
        "myW_exMrmnw4SGeeX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleShow = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <div className="main-flex">
        <div className="small-container">
          <img src="./img/charmander.png" className="logo" alt="logo" />
          <div className="title">
            <h2>(SECRET) $1 Off/Gallon</h2>
            <span>Price: FREE</span>
            <button className="button-7" onClick={handleShow}>
              {!showForm ? "REQUEST" : "CLOSE"}
            </button>
          </div>
        </div>
      </div>
      {showForm && !isSubmitted && (
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-container">
            <label htmlFor="name">Name</label>
            <input type="text" className="input" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" className="input" id="email" name="email" />
            <label htmlFor="accessCode">Access Code</label>
            <input
              type="accessCode"
              className="input"
              id="accessCode"
              name="accessCode"
            />
          </div>
          <button className="button-7" type="submit">
            SUBMIT
          </button>
          <span>
            *Please use your real email address when submitting the form
          </span>
        </form>
      )}
      {isSubmitted && <p>Congratulations! Your form has been submitted.</p>}
    </div>
  );
};

export default App;
