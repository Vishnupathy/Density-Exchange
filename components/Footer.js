import Image from 'next/image'
import { motion } from 'framer-motion';
import AppleStore from './AppleStore'


const Footer = () => {
  return (
    <motion.section 
    initial={{ y: 40,opacity:0 }}
    transition={{
      delay: 0.5,
      duration: 0.6,
      type: "spring",
      stiffness: 50

    }}
    whileInView={{ y: 0,opacity:1 }}
    viewport={{ once: true }}
    className="mt-24  border-t-4 w-[99vw] flex justify-center items-center " >
      <div className="md:px-40 flex  md:mt-24 mt-12 font-[Montserrat] flex-col w-[80%] justify-center items-center gap-4"> 
      <Image
      src='/assets/logo.png'
      width={55}
      height={55}
      alt="Logo"
      style={{cursor:'pointer'}}
    />
   
    </motion.section>
  )
}

export default Footer
