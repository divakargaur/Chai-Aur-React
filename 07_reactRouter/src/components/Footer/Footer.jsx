import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGithub, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <hr className='border-orange-500' />
      <div className='flex flex-row items-center justify-between'>
        <div>
          <Link to='/' className='m-8 p-4 text-3xl font-bold text-orange-500'>icon</Link>
        </div>
        <div className='flex flex-row items-center justify-between m-16 text-center'>
          <ul className='px-12'>
            <li className='text-xl font-bold pb-2'>RESOURCES</li>
            <li>Home</li>
            <li>About</li>
          </ul>
          <ul className='px-12'>
            <li className='text-xl font-bold pb-2'>FOLLOW US</li>
            <li>Github</li>
            <li>Discord</li>
          </ul>
          <ul className='px-12'>
            <li className='text-xl font-bold pb-2'>LEGAL</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <hr className='border-orange-500' />
      <div className='flex flex-row items-center justify-between'>
        <div className='m-4'>
          &copy;2023 divakargaur ALL RIGHTS RESERVED
        </div>
        <div className='m-4'>
          <FontAwesomeIcon icon={faFacebook} className='h-6 px-4' />
          <FontAwesomeIcon icon={faGithub} className='h-6 px-4' />
          <FontAwesomeIcon icon={faYoutube} className='h-6 px-4' />
          <FontAwesomeIcon icon={faTwitter} className='h-6 px-4' />
          <FontAwesomeIcon icon={faDiscord} className='h-6 px-4' />
        </div>
      </div>
    </footer>
  )
}

export default Footer