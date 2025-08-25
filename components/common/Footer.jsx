import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col md:flex-row  justify-between items-center gap-6 max-w-[1192px] mx-auto py-10 px-4 md:px-8'>
        <div className='text-primary'>
            Made with ❤️ and 🥑
        </div>
        <div className='flex gap-6'>
            <a href="#">
                <img src="/images/icons/icon-instagram.svg" alt="instagram" />
            </a>
             <a href="#">
                <img src="/images/icons/icon-bluesky.svg" alt="bluesky" />
            </a>
             <a href="#">
                <img src="/images/icons/icon-tiktok.svg" alt="tiktok" />
            </a>
        </div>
    </footer>
  )
}

export default Footer