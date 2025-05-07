import { motion } from "framer-motion";
import React from 'react';
import { useTranslation } from "react-i18next";
import icon1 from '../assest/24-hours-support.png';
import prix from '../assest/affordable.png';
import interview from '../assest/interview.png';
import whiteboard from '../assest/whiteboard.png';
import '../component/css/About.css';
import '../i18n';

const About = () => {
    const{t,i18n} = useTranslation()
  
  return (
      <div className="about-section" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"250px",backgroundColor:"rgb(255, 255, 255)",marginTop:"3%"}}>
      <section id='about' className=' py-16 px-6 md:px-12 lg:px-24' style={{marginTop:"5%"}}>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12'>
          
          <div id="allcards" className='w-full md:w-1/2 space-y-6'>
            <h2 id="titleh2" className='text-xl font-semibold  text-center tracking-wider ' style={{marginTop:"2%",color:"#fdc401",fontFamily:"Baloo 2,sans-serif"}}>{ t('aboutfirst') }</h2>
            <p id="cardsp" className='text-3xl text-center font-semibold' style={{color:"#03619f",fontFamily:"Montserrat,sans-serif",textTransform:"uppercase"}}>
            { t('aboutsecond') }
            </p>
            <div id="carddsss" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center " >
            <motion.div 
            animate={{ y: [0, -50, 0] }} 
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration:1.2, ease: "easeIn", }} 
              viewport={{ once: true, amount: 0.5 }} 
              id="card"
              className='bg-white p-6 rounded-lg shadow-lg card' style={{width:"300px",height:"180px",boxShadow:"10px 5px 6px rgb(234, 234, 234)"}}>
                <img src={interview} alt="" width={"25px"}/>
              <h4 className='text-md font-semibold  mb-4 ' style={{marginTop:"2%",color:"#02538AFF",fontFamily:"Montserrat,sans-serif" }}>{t('aboutfirstcard')}</h4>
              <div className='space-y-3 text-gray-500 text-sm'>
                <p className='flex items-center gap-2' style={{fontFamily:"Quicksand,sans-serif"}}>{t('cardp1')}</p>
              </div>
            </motion.div>
            <motion.div 
            animate={{ y: [0, -50, 0] }} 
              initial={{ opacity: 0, x: -75 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration:1.2, ease: "easeOut" }} 
              viewport={{ once: true, amount: 0.5 }} 
              id="card"
              className='bg-white p-6 rounded-lg shadow-lg' style={{width:"300px",height:"180px",boxShadow:"10px 5px 6px rgb(234, 234, 234)"}}>
                <img src={icon1} alt="" width={"25px"}/>
              <h4 className='text-md font-semibold  mb-4 ' style={{marginTop:"2%",color:"#02538AFF",fontFamily:"Montserrat,sans-serif" }}>{t('aboutsecondcard')}</h4>
              <div className='space-y-3 text-gray-500 text-sm'>
                <p className='flex items-center gap-2' style={{fontFamily:"Quicksand,sans-serif"}}>{t('cardp2')}</p>
              </div>
            </motion.div>
            <motion.div 
            animate={{ y: [0, -50, 0] }} 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1.2, ease: "easeInOut" }} 
              viewport={{ once: true, amount: 0.5 }} 
              id="card"
              className='bg-white p-6 rounded-lg shadow-lg' style={{width:"300px",height:"180px",boxShadow:"10px 5px 6px rgb(234, 234, 234)"}}>
                <img src={whiteboard} alt="" width={"25px"}/>
              <h4 className='text-md font-semibold  mb-4 ' style={{marginTop:"2%",color:"#02538AFF",fontFamily:"Montserrat,sans-serif" }}>{t('aboutthirdcard')}</h4>
              <div className='space-y-3 text-gray-500 text-sm'>
                <p className='flex items-center gap-2' style={{fontFamily:"Quicksand,sans-serif"}}>{t('cardp3')}</p>
              </div>
            </motion.div>
            <motion.div
            animate={{ y: [0, -50, 0] }} 
              initial={{ opacity: 0, x: -25 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1.2, ease: "easeIn" }} 
              viewport={{ once: true, amount: 0.5 }} 
              id="card"
              className='bg-white p-6 rounded-lg shadow-lg' style={{width:"300px",height:"180px",boxShadow:"10px 5px 6px rgb(234, 234, 234)"}}>
                <img src={prix} alt="" width={"25px"}/>
              <h4 className='text-md font-semibold  mb-4 ' style={{marginTop:"2%",color:"#02538AFF",fontFamily:"Montserrat,sans-serif" }}>{t('aboutfourthcard')}</h4>
              <div className='space-y-3 text-gray-500 text-sm'>
                <p className='flex items-center gap-2' style={{fontFamily:"Quicksand,sans-serif"}}>{t('cardp4')}</p>
              </div>
            </motion.div>

            </div>
            

          </div>
        </div>
      </section>
      </div>
  );
};

export default About
