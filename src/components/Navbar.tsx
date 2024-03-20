import { navLists } from '../constants';
import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header className='flex w-full items-center justify-between px-5 pt-5 sm:px-10'>
      <nav className='screen-max-width flex w-full'>
        <img src={appleImg} alt='Apple' className='h-[18px] w-[14px]' />

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map(nav => (
            <div
              key={nav}
              className='cursor-pointer px-5 text-sm text-gray transition-all  hover:text-white'
            >
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end'>
          <img src={searchImg} alt='search' className='h-[18px] w-[18px]' />
          <img src={bagImg} alt='bag' className='h-[18px] w-[18px]' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
