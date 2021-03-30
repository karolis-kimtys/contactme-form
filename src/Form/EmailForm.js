import React from "react";
import emailjs from "emailjs-com";
import styles from "./EmailForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EmailForm() {
  const success = () =>
    toast.dark("Sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  const errorPop = () =>
    toast.dark("Error.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d07urrd",
        "mygmailID",
        e.target,
        "user_AL1JEdnHyTfi8RdDP4CaU"
      )
      .then(
        (result) => {
          success();
        },
        (error) => {
          errorPop();
        },
        e.target.reset()
      );
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <div className={styles.Form}>
        <div className={styles.Inputs}>
          <input type='hidden' name='contact_number' />
          <div className={styles.Name}>
            <input
              className={styles.NameInput}
              type='text'
              name='from_name'
              required
              placeholder=' '
            />
            <label className={styles.NameLabel}>Name</label>
          </div>

          <div className={styles.Name}>
            <input
              className={styles.NameInput}
              type='email'
              name='reply_to'
              required
              placeholder=' '
            />
            <label className={styles.NameLabel}>E-Mail</label>
          </div>

          <div className={styles.Name}>
            <textarea className={styles.NameInput} name='message' required />
            <label className={styles.NameLabel}>Message</label>
          </div>
        </div>
      </div>
      <div className={styles.Button}>
        <ToastContainer
          bodyClassName='toastBody'
          className={styles.Toast}
          style={{
            width: "200px",
            fontSize: "14px",
            padding: "30px",
          }}
        />
        <input type='submit' value='Send' />
      </div>
    </form>
  );
}
