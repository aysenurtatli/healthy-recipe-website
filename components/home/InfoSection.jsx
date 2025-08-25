


const InfoSection = ({ title, description, imageSrc, badge }) => {
  return (
    <section className='grid lg:grid-cols-2 gap-12 items-center py-24'>
        <div>
          {badge && (
           <span className="bg-accent text-primary rounded-md p-1.5 font-bold text-xl mb-6 inline-block">Our mission</span>
          )}
            <h2 className='text-primary text-[40px] lg:text-5xl font-extrabold mb-5'>{title}</h2>
            <div className='text-secondary text-xl'>
                 {description}
            </div>
        </div>
        <img src={imageSrc} alt="home real life image" className='rounded-2xl' />
    </section>
  )
}

export default InfoSection