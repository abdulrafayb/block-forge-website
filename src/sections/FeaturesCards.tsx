import { Card } from "../components/Card";

import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.",
    color: "fuschia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Decentarlized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

export const FeaturesCardsSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) =>
        curr === cardData.length - 1 ? 0 : curr + 1
      );
    }, 3000);

    return () => clearTimeout(timeout);
  }, [selectedCardIndex, isHovered]);

  return (
    <section className="py-24 md:-mt-28 overflow-x-clip">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center">
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className="flex mt-36 lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }) => (
              <div
                key={title}
                className="inline-flex transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
              >
                <Card className="max-w-xs md:max-w-md" color={color}>
                  <div className="flex justify-center -mt-28">
                    <div className="relative inline-flex">
                      <div className="absolute bg-zinc-950/70 w-full h-4 top-[calc(100%+16px)] [mask-image:radial-gradient(closest-side,black,transparent)] rounded-[100%] group-hover:bg-zinc-950/30 transition duration-300"></div>
                      <img
                        src={image}
                        alt="Pill Image"
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-heading font-black mt-12">
                    {title}
                  </h3>
                  <p className="text-zinc-400 text-lg mt-4">{description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 p-2.5 inline-flex gap-4 rounded-full">
            {cardData.map(({ title }, cardIndex) => (
              <div
                key={title}
                className={twMerge(
                  "bg-zinc-500 size-2.5 cursor-pointer rounded-full",
                  cardIndex === selectedCardIndex && "bg-zinc-300"
                )}
                onClick={() => setSelectedCardIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
