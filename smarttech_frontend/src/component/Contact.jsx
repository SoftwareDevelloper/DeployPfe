import { motion } from "framer-motion";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { toast, ToastContainer, Zoom } from "react-toastify";
import hero from '../assest/contact_new.png';
import '../i18n';
import './css/contact.css';
const Contact = () => {
  const{t,i18n} = useTranslation()
  const [formData,setFormData]= useState({
    subject:"",
    senderEmail:"",
    message:""
  });
  const changeHandler = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value});
  } 
  const contactUs = async () => {
    if (!formData.subject || !formData.senderEmail || !formData.message) {
      toast.error("All fields are required!!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.senderEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
    try {
      const mailStructure = {
        subject: formData.subject,
        message: formData.message,
        senderEmail: formData.senderEmail,
      };
  
      const response = await fetch(`http://localhost:9000/contact/send/${encodeURIComponent(formData.senderEmail)}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailStructure),
      });
  
      if (response.ok) {
        toast.success("Message sent! We'll respond to you soon.");
      } else {
        const responseData = await response.json();
        toast.error(responseData.errors || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
          <>      
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
          />
          <motion.div
                initial={{ opacity: 0, y: 100 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: true, amount: 0.5 }} 
                className="contact-section"
              >
              <div className='contact' id='contact'>
                <form className='contact_form' onSubmit={(e) => { e.preventDefault(); contactUs(); }}>
                <h1 className='contactUs'> {t('contact')} </h1>
                <hr />
                  <input type="text" name="subject" value={formData.subject} onChange={changeHandler}  placeholder={t('subjectPlaceholder')}/><br />
                  <input type="email" name="senderEmail" placeholder={t('EmailPlaceholder')} value={formData.senderEmail} onChange={changeHandler}/><br />
                  <textarea name="message" placeholder={t('MsgPlaceholder')} value={formData.message} onChange={changeHandler}></textarea>
                  <button className='submit'> {t('sendbtn')} </button>
                </form>
                <motion.div
                animate={{ y: [0, -50, 0] }} 
                initial={{ opacity: 0, x: -100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration:1.2, ease: "easeIn", }} 
                viewport={{ once: true, amount: 0.5 }} 
                className="bannerContact">
                <img src={hero} alt=""/>
              </motion.div>  
              </div>
              
              </motion.div>
              </>
  )
}

export default Contact
