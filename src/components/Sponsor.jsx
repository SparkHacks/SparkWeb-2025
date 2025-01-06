import { motion  } from 'framer-motion';

const sponsors = [
  {
    name: "CME Group",
    image: "../sponsorLogo/cmegroup.svg",
  },
  {
    name: "UIC CS Department",
    image: "../sponsorLogo/uicengineering.svg",
  },
  {
    name: "John Deere",
    image: "../sponsorLogo/johndeere.svg",
  },
  {
    name: "Grainger",
    image: "../sponsorLogo/grainger.svg",
  },
  {
    name: "Fulcrum",
    image: "../sponsorLogo/fulcrum.svg",
  },
]

const sponsorLength = sponsors.length
const logoWidth = 250
const logoGap = 30

const maequeeSponsor = {
  animate: {
    x: [0, -sponsorLength * (logoWidth + logoGap)],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      }
    }
  }
}

export default function Sponsor(){
  return(
    <section className="w-full flex flex-col overflow-x-hidden" id="sponsor">
      <motion.div
      variants={maequeeSponsor}
      animate="animate"
      className="flex flex-row w-full gap-[30px] mt-10 items-center">
          {sponsors.map((sponsor) => 
          <div key={sponsor.name}  className='group relative flex justify-center items-center min-h-[160px]'>
            <span className=' shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#CDA5C7] backdrop-blur-[19.5px]  absolute opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100  w-[70%] text-center text-[white] font-poppin '>{sponsor.name}</span>
            <img src={sponsor.image} width="250" height="250" className="object-contain min-w-[250px]"></img>
            
            </div>
          )}
          {sponsors.map((sponsor) => 
          <div key={sponsor.name}  className='group relative flex justify-center items-center min-h-[160px]'>
            <span className=' shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#CDA5C7] backdrop-blur-[19.5px]  absolute opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100  w-[70%] text-center text-[white] font-poppin '>{sponsor.name}</span>
            <img src={sponsor.image} width="250" height="250" className="object-contain min-w-[250px]"></img>
            
            </div>
          )}
      
      </motion.div>
      {/* <div className='w-full h-full'>
        <div className='absolute overflow-x-hidden w-full h-[250px]'>
          <motion.img 
          initial={{ x: 0 }}
          whileInView={{  x: -4000 }}
          transition={{ duration: 20 }}
          viewport={{ once: true }}
          src="/airplane.png" alt="" className="absolute w-[200px] opacity-60 -right-[190px]"/>

          <motion.img 
          initial={{ x: 0 }}
          whileInView={{  x: 4000 }}
          transition={{ duration: 20, delay: 1 }}
          viewport={{ once: true }}
          src="/helicopter.png" alt="" className="absolute w-[150px] -bottom-0 opacity-60 -left-[150px]"/>
        </div>
      </div> */}
    </section>
  )
}