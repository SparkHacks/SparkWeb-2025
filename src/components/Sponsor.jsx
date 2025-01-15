import { motion  } from 'framer-motion';

const sponsors = [
  {
    name: "CME Group",
    image: "../sponsors/cmegroup.svg",
  },
  {
    name: "UIC CS Department",
    image: "../sponsors/uicengineering.svg",
  },
  {
    name: "John Deere",
    image: "../sponsors/johndeere.svg",
  },
  {
    name: "Grainger",
    image: "../sponsors/grainger.svg",
  },
  {
    name: "Fulcrum",
    image: "../sponsors/fulcrum.svg",
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
    <section className="w-full flex flex-col overflow-x-hidden bg-[white] ">
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
    </section>
  )
}