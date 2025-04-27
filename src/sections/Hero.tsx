import { Circle } from '../components/Circle';
import { CutCornerButton } from '../components/CutCornerButton';
import { Hexagon } from '../components/Hexagon';

export const HeroSection = () => {
  return (
    <section className='py-24 md:py-52 overflow-x-clip'>
      <div className='container text-center'>
        <p className='text-zinc-500 font-extrabold uppercase tracking-wider'>
          Introducing Blockforge
        </p>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-heading font-black max-w-3xl mx-auto mt-4'>
          The Future of Blockchain is Here.
        </h1>
        <p className='text-zinc-400 text-xl md:text-2xl max-w-xl mx-auto mt-6'>
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className='flex justify-center mt-10'>
          <CutCornerButton>Get Started</CutCornerButton>
        </div>

        <div className='flex justify-center mt-24'>
          <div className='relative inline-block z-0'>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <Hexagon className='size-[1100px]' />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <Hexagon className='size-[1800px]' />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <Circle className='absolute -top-[900px] left-[200px]'>
                <img
                  src='/assets/images/cube.png'
                  alt='Cube 3D Image'
                  className='size-[140px]'
                />
              </Circle>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <Circle className='absolute top-[270px] left-[200px]'>
                <img
                  src='/assets/images/cuboid.png'
                  alt='Cuboid 3D Image'
                  className='size-[140px]'
                />
              </Circle>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <Circle className='absolute -top-[80px] -left-[600px]'>
                <img
                  src='/assets/images/torus.png'
                  alt='Torus 3D Image'
                  className='size-[140px]'
                />
              </Circle>
            </div>
            <img
              src='/assets/images/icosahedron.png'
              alt=''
              className='absolute max-w-none w-[calc(100%+100px)] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg] -z-10'
            />
            <img
              src='/assets/images/icosahedron.png'
              alt='Icosahedron 3D Hero Image'
            />
          </div>
        </div>

        <div className='flex flex-col gap-4 items-center justify-center mt-40 md:mt-80'>
          <div className='inline-flex justify-center pt-2 w-5 h-10 outline outline-[6px] outline-fuchsia-500/10 rounded-full'>
            <div className='w-1 h-3 bg-fuchsia-500 rounded-full'></div>
          </div>
          <p className='text-zinc-500 font-extrabold uppercase tracking-wider'>
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
