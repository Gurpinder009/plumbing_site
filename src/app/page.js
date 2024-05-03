"use client";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";

const options = {
  delay: 3000,
};

export default function Home() {
  return (
    <motion.main>
      <Slider />
    </motion.main>
  );
}

function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(options)]);

  return (
    <motion.div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <Slide path={"/get1.jpg"} />
          <Slide path={"/get1.jpg"} />
        </div>
      </div>
    </motion.div>
  );
}

function Slide({path}) {
  return (
    <div className="embla__slide">
      <Image src={path}  fill={true} alt="This is not working"></Image>
    </div>
  );
}
