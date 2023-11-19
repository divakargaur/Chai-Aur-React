const Home = () => {
  return (
    <main className='flex flex-col m-12'>
      <div className='flex flex-row items-center justify-around'>
        <img src='https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='h-96 rounded-3xl' />
        <div>
          <h1 className='text-7xl font-bold'>Download Now</h1>
          <h2 className='text-4xl'>Lorem Ipsum</h2>
          <button className='bg-orange-500 text-2xl font-bold my-4 p-4 rounded-xl'>Download Now</button>
        </div>
      </div>
      <div className='flex justify-center'>
        <img src='https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800' className='m-12 rounded-3xl' />
      </div>
    </main>
  )
}

export default Home