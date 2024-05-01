"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from "framer-motion";
import Autoplay from 'embla-carousel-autoplay'



export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <motion.main>
     <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
    </motion.main>
  );
}
