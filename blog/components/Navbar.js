import Link from 'next/link';

export default function NavBar() {
    return (
        <div className='w-screen grid grid-cols-2 p-2'>
           <div className='text-pink-600 font-extrabold'>Efficient Efffective programming</div> 
           <div className='ml-auto'>
               <ul className='grid grid-cols-3 text-center'>
                   <li>
                       <Link href='/'>
                           <a>Home</a>
                       </Link>
                   </li>
                   <li>
                       <Link href='/projects'>
                           <a>My Work</a>
                       </Link>
                   </li>
                   <li>
                       <Link href='/blog'>
                           <a>Blog</a>
                       </Link>
                   </li>
               </ul>
           </div>
        </div>
    )
}