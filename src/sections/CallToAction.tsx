import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Hexagon size={1100} reverse duration={50} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Circle className="absolute -top-[400px] left-0" animate>
              <motion.img
                src="/assets/images/cuboid.png"
                alt="Cuboid 3D Image"
                className="size-[140px]"
                style={{ rotate }}
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Circle className="absolute -top-[70px] -left-[600px]" animate>
              <motion.img
                src="/assets/images/cylinder.png"
                alt="Cylinder 3D Image"
                className="size-[140px]"
                style={{ rotate }}
              />
            </Circle>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center">
            Ready to <span className="block">get started</span>
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl text-center max-w-sm mx-auto mt-8">
            Start building using blockchain technology, with Blockforge.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
