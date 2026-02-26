import Link from 'next/link'
import LogoutLink from './LogoutLink'

const MainFooter = () => {
  return (
    <footer className='bg-zinc-950 text-white px-5 py-3 w-full mt-10'>
      <div className='mx-auto flex flex-col justify-between items-center gap-5 py-3 max-w-200 mb-5'>
        <p className='text-2xl font-bold'>The Wisdom Room</p>

        <div className='w-full flex justify-around items-start gap-5 px-3'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg'>About</p>
            <div className='flex flex-col justify-between items-center gap-1'>
              <Link href="/">About Us</Link>
              <Link href="/">Our APIs</Link>
              <Link href="/">Mission</Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg'>Reach Out</p>
            <div className='flex flex-col justify-between items-start gap-1'>
              <Link href="/">Reach us via E-mail</Link>
              <Link href="/">Ask a Question</Link>
              <Link href="/">View Comments</Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg'>Our App Sections</p>
            <div className='flex flex-col justify-between items-start gap-1'>
              <Link href="/">Teachings</Link>
              <Link href="/">View Popular Questions</Link>
              <LogoutLink />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter