import { arrowRightIcon } from '@/assets/icons/index.js'

export const ProjectCard = ({ title, description, technologies, image, link }) => {
    return (
        <div className='card overflow-hidden hover:border-[#3C50E0]/50'>
            <div className='relative overflow-hidden group'>
                {!!image.length ? (
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110'
                    />
                ) : (
                    <div className='w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-110' />
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-[#000036]/90 to-transparent opacity-80'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                    <h3 className='text-xl font-bold text-white mb-1'>{title}</h3>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-gray-400 mb-4'>{description}</p>

                <div className='flex flex-wrap gap-2 mb-5'>
                    {technologies.map((tech, index) => (
                        <span key={index} className='text-xs bg-[#57b8ff]/10 text-white px-2 py-1 rounded-full border border-[#57b8ff]/20'>
                            {tech}
                        </span>
                    ))}
                </div>

                {!!link.length ? (
                    <a
                        href={link || '#'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center text-white hover:text-white hover:underline transition-colors'
                    >
                        Посмотреть проект
                        <img src={arrowRightIcon} className='w-4 h-4 ml-1' alt='Arrow Right' />
                    </a>
                ) : (
                    <div className={'inline-flex items-center text-white hover:text-white transition-colors'}>
                        К сожалению, не могу предоставить ссылку на проект в связи с подписанным соглашением о неразглашении (NDA)
                    </div>
                )}
            </div>
        </div>
    )
}
