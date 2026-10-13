import { emailIcon, linkedinIcon, telegramIcon } from '@/assets/icons/index.js'

export const ContactsSection = () => {
    return (
        <section id='contacts' className='flex flex-col justify-center px-6 py-20 relative'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#57b8ff]/5 to-transparent opacity-30 z-0'></div>

            <div className='max-w-4xl mx-auto w-full relative z-10'>
                <h2 className='section-title text-shadow-purple scroll-animation'>Контакты</h2>

                <div className='card p-8 scroll-animation delay-200'>
                    <h3 className='text-xl font-bold text-white mb-6'>Свяжитесь со мной</h3>

                    <div className='flex justify-between items-center flex-wrap gap-6'>
                        <div className='flex items-center scroll-animation delay-400'>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-[#3C50E0]/20 flex items-center justify-center mr-4'>
                                <img src={emailIcon} className='h-5 w-5 text-white' alt='Email' />
                            </div>
                            <div>
                                <a href='mailto:dasihub02@gmail.com' className='text-gray-400 hover:text-white transition-colors'>
                                    dasihub02@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className='flex items-center scroll-animation delay-500'>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-[#57b8ff]/20 flex items-center justify-center mr-4'>
                                <img src={telegramIcon} className='h-5 w-5 text-white' alt='Telegram' />
                            </div>
                            <div>
                                <a
                                    href='https://t.me/query_limba'
                                    target='_blank'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    @query_limba
                                </a>
                            </div>
                        </div>

                        <div className='flex items-center scroll-animation delay-600'>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-[#3C50E0]/20 flex items-center justify-center mr-4'>
                                <img src={linkedinIcon} className='h-5 w-5 text-white' alt='LinkedIn' />
                            </div>
                            <div>
                                <a
                                    href='https://www.linkedin.com/in/dastan-nurbekov'
                                    target='_blank'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    Dastan Nurbekov
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
