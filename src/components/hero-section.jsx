import { emailIcon, arrowDownIcon, githubIcon, linkedinIcon, telegramIcon, locationIcon } from '../assets/icons'

export const HeroSection = () => {
    return (
        <div id='header' className='min-h-screen flex flex-col justify-center px-6 py-20 relative overflow-hidden'>
            <div className='absolute inset-0 z-0 opacity-30'>
                <div className='absolute top-10 left-10 w-72 h-72 bg-[#57b8ff]/20 rounded-full filter blur-3xl animate-blob'></div>
                <div className='absolute bottom-10 right-10 w-72 h-72 bg-[#3C50E0]/20 rounded-full filter blur-3xl animate-blob animation-delay-2000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#04C8C8]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000'></div>
            </div>

            <div className='max-w-4xl mx-auto w-full relative z-10'>
                <div className='animate-fadeIn'>
                    <span className='text-sm font-medium text-gray-400 mb-2 block tracking-wider'>Привет, меня зовут</span>
                    <h1 className='text-5xl md:text-6xl font-bold mb-4 text-white'>Дастан Нурбеков</h1>
                    <h2 className='text-2xl md:text-3xl font-medium mb-6 text-white'>Middle Front-end Engineer</h2>

                    <div className='flex items-center mb-6 text-gray-400'>
                        <img src={locationIcon} className='w-5 h-5 mr-2 text-[#57b8ff]' alt='Location' />
                        <span>Кыргызстан, Бишкек (готов к релокации)</span>
                    </div>

                    <p className='text-gray-400 max-w-lg mb-8 leading-relaxed'>
                        Разработчик с более чем 3-летним опытом в создании современных веб-приложений с использованием передовых технологий.
                        Сфокусирован на разработке решений, которые приносят реальную ценность и прибыль бизнесу.
                    </p>

                    <div className='flex flex-wrap gap-4'>
                        <a href='#experience' className='btn shimmer-effect'>
                            Мой опыт
                        </a>
                        <a href='#tech' className='group relative px-4 py-2 rounded-md overflow-hidden'>
                            <span className='absolute inset-0 w-full h-full bg-[#57b8ff]/10 group-hover:bg-[#57b8ff]/20 transition-all duration-300'></span>
                            <span className='absolute inset-0 w-0 bg-[#57b8ff]/20 group-hover:w-full transition-all duration-700'></span>
                            <span className='relative text-white'>Технологии</span>
                        </a>
                        <a href='#projects' className='group relative px-4 py-2 rounded-md overflow-hidden'>
                            <span className='absolute inset-0 w-full h-full bg-[#3C50E0]/10 group-hover:bg-[#3C50E0]/20 transition-all duration-300'></span>
                            <span className='absolute inset-0 w-0 bg-[#3C50E0]/20 group-hover:w-full transition-all duration-700'></span>
                            <span className='relative text-white'>Проекты</span>
                        </a>
                        <a href='#contacts' className='group relative px-4 py-2 rounded-md overflow-hidden'>
                            <span className='absolute inset-0 w-full h-full bg-[#04C8C8]/10 group-hover:bg-[#04C8C8]/20 transition-all duration-300'></span>
                            <span className='absolute inset-0 w-0 bg-[#04C8C8]/20 group-hover:w-full transition-all duration-700'></span>
                            <span className='relative text-white'>Контакты</span>
                        </a>
                    </div>

                    <div className='mt-12 flex gap-6'>
                        <a
                            href='https://t.me/query_limba'
                            target='_blank'
                            className='text-gray-400 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-300 relative group'
                        >
                            <div className='absolute -inset-2 bg-[#57b8ff]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <img src={telegramIcon} className='h-6 w-6 relative z-10' alt='Telegram' />
                        </a>
                        <a
                            href='mailto:dasihub02@gmail.com'
                            className='text-gray-400 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-300 relative group'
                        >
                            <div className='absolute -inset-2 bg-[#3C50E0]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <img src={emailIcon} className='h-6 w-6 relative z-10' alt='Email' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/dastan-nurbekov'
                            target='_blank'
                            className='text-gray-400 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-300 relative group'
                        >
                            <div className='absolute -inset-2 bg-[#57b8ff]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <img src={linkedinIcon} className='h-6 w-6 relative z-10' alt='LinkedIn' />
                        </a>
                        <a
                            href='https://github.com/Dasihub'
                            target='_blank'
                            className='text-gray-400 hover:text-white transition-colors transform hover:scale-110 transition-transform duration-300 relative group'
                        >
                            <div className='absolute -inset-2 bg-[#04C8C8]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <img src={githubIcon} className='h-6 w-6 relative z-10' alt='GitHub' />
                        </a>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce z-10'>
                <a href='#tech' className='text-gray-400 hover:text-white transition-colors'>
                    <img src={arrowDownIcon} className='h-6 w-6' alt='Scroll Down' />
                </a>
            </div>
        </div>
    )
}
