import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='h-20 w-full my-1 flex flex-row items-center justify-between'>
        <Link to='/' className='m-8 p-4 text-3xl font-bold text-orange-500'>icon</Link>
        <div className=''>
          <ul className='flex flex-row items-center'>
            <li>
              <NavLink to='/' className={({isActive}) => `mx-4 px-4 py-2 border border-orange-500 rounded-3xl text-xl font-bold hover:bg-orange-500 ${isActive ? 'bg-orange-500' : ''}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => `mx-4 px-4 py-2 border border-orange-500 rounded-3xl text-xl font-bold hover:bg-orange-500 ${isActive ? 'bg-orange-500' : ''}`}>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({isActive}) => `mx-4 px-4 py-2 border border-orange-500 rounded-3xl text-xl font-bold hover:bg-orange-500 ${isActive ? 'bg-orange-500' : ''}`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to='github' className={({isActive}) => `mx-4 px-4 py-2 border border-orange-500 rounded-3xl text-xl font-bold hover:bg-orange-500 ${isActive ? 'bg-orange-500' : ''}`}>GitHub</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button>
            <Link to='#' className='m-4 p-4 bg-transparent border border-orange-500 rounded-lg font-bold'>LogIn</Link>
          </button>
          <button>
            <Link to='#' className='m-4 p-4 bg-orange-500 border border-orange-500 rounded-lg font-bold'>Get Started</Link>
          </button>
        </div>
      </nav>
      <hr className='border-orange-500' />
    </header>
  )
}

export default Header