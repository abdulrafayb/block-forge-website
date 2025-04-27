export const FeaturesCardsSection = () => {
  return (
    <section className='py-24'>
      <div className='container text-center'>
        <h2 className='text-4xl font-heading font-black'>
          Discover the future of blockchain with Blockforge.
        </h2>
        <div>
          <div>
            <img src='/assets/images/pill.png' alt='Pill Image' />
            <h3>ABCD</h3>
            <p>ABCD</p>
            <div className='flex'>
              <button>Learn More</button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='bg-zinc-950 p-2.5 inline-flex gap-4 rounded-full'>
            {[...new Array(4)].fill(0).map((_, index) => (
              <div
                key={index}
                className='bg-zinc-500 size-2.5 cursor-pointer rounded-full'
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
