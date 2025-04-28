import { twMerge } from 'tailwind-merge';

const cardData = [
  {
    image: '/assets/images/pill.png',
    title: 'Revolutionary Blockchain API',
    description:
      'Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.',
    color: 'fuschia',
  },
  {
    image: '/assets/images/cuboid.png',
    title: 'Decentarlized Data Solutions',
    description:
      'Empower your applications with decentralized data solutions, ensuring security and transparency at every step.',
    color: 'lime',
  },
  {
    image: '/assets/images/cone.png',
    title: 'Next-Gen Smart Contracts',
    description:
      'Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.',
    color: 'cyan',
  },
  {
    image: '/assets/images/icosahedron.png',
    title: 'Seamless Blockchain Integration',
    description:
      'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.',
    color: 'violet',
  },
];

export const FeaturesCardsSection = () => {
  return (
    <section className='py-24 md:-mt-28 overflow-x-clip'>
      <div className='container'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-heading font-black text-center'>
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className='flex mt-36 lg:mt-48'>
          <div className='flex flex-none gap-8'>
            {cardData.map(({ image, title, description, color }) => (
              <div
                key={title}
                className='group relative p-8 md:p-10 max-w-xs md:max-w-md z-0'
              >
                <div
                  className={twMerge(
                    'absolute bg-fuchsia-500 size-16 top-1.5 right-1.5 rounded-xl blur-lg opacity-0 -z-10 group-hover:opacity-100 transition duration-300',
                    color === 'lime' && 'bg-lime-500',
                    color === 'cyan' && 'bg-cyan-500',
                    color === 'violet' && 'bg-violet-500'
                  )}
                ></div>
                <div
                  className={twMerge(
                    'absolute bg-fuchsia-500 size-16 top-1.5 right-1.5 rounded-xl -z-10 group-hover:bg-fuchsia-400 transition duration-300',
                    color === 'lime' && 'bg-lime-500 group-hover:bg-lime-400',
                    color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-400',
                    color === 'violet' &&
                      'bg-violet-500 group-hover:bg-violet-400'
                  )}
                ></div>
                <div className='absolute inset-0 bg-zinc-800 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)] -z-10'></div>
                <div className='flex justify-center -mt-28'>
                  <div className='relative inline-flex'>
                    <div className='absolute bg-zinc-950/70 w-full h-4 top-[calc(100%+16px)] [mask-image:radial-gradient(closest-side,black,transparent)] rounded-[100%] group-hover:bg-zinc-950/30 transition duration-300'></div>
                    <img
                      src={image}
                      alt='Pill Image'
                      className='size-40 group-hover:-translate-y-6 transition duration-300'
                    />
                  </div>
                </div>
                <h3 className='text-3xl font-heading font-black mt-12'>
                  {title}
                </h3>
                <p className='text-zinc-400 text-lg mt-4'>{description}</p>
                <div className='flex justify-between mt-12'>
                  <button
                    className={twMerge(
                      'text-fuchsia-500 text-sm font-heading font-extrabold uppercase tracking-wider',
                      color === 'lime' && 'text-lime-500',
                      color === 'cyan' && 'text-cyan-500',
                      color === 'violet' && 'text-violet-500'
                    )}
                  >
                    Learn More
                  </button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='size-8 text-zinc-500 -translate-x-2 group-hover:text-zinc-300 group-hover:translate-x-0 transition duration-300'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <div className='bg-zinc-950 p-2.5 inline-flex gap-4 rounded-full'>
            {cardData.map(({ title }) => (
              <div
                key={title}
                className='bg-zinc-500 size-2.5 cursor-pointer rounded-full'
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
