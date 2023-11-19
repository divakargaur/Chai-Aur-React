import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <main className='flex flex-row items-center justify-between mx-40 my-12'>
      <div className='bg-neutral-600 flex flex-col text-center p-12 rounded-3xl'>
        <h1 className='text-3xl font-bold pb-4'>Get in touch:</h1>
        <p className='pb-1'>Fill in the form to start a conversation</p>
        <p><FontAwesomeIcon icon={faLocationDot} /> Acme Inc. Street, State, Postal Code</p>
        <p><FontAwesomeIcon icon={faPhone} /> +44 1234567890</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> info@acme.org</p>
      </div>
      <div>
        <form className='flex flex-col items-center'>
          <input type='text' placeholder='Full Name' className='text-2xl h-16 w-96 m-2 p-2 rounded-lg text-black' />
          <input type='number' placeholder='Telephone Number' className='text-2xl h-16 w-96 m-2 p-2 rounded-lg text-black' />
          <input type='email' placeholder='Email' className='text-2xl h-16 w-96 m-2 p-2 rounded-lg text-black' />
          <button className='bg-orange-500 w-64 p-2 rounded-lg text-xl font-bold'>Submit</button>
        </form>
      </div>
    </main>
  )
}

export default Contact