

const Text = ({title, subtitle}) => {
  return (
    <div className='mt-10 flex flex-col items-start'>
     <h2 className="text-purple text-2xl md:text-4xl font-bold">{title}</h2>
     <p className="text-gray mt-1">{subtitle}</p>
    </div>
  )
}

export default Text;
