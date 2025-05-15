export const EducationSection = () => {
    return (
        <section id='education' className='flex flex-col justify-center px-6 py-20 mt-[-6rem] relative'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#000036]/10 to-transparent opacity-30 z-0'></div>
            <div className='max-w-4xl mx-auto w-full relative z-10'>
                <h2 className='section-title text-shadow-indigo scroll-animation'>Образование</h2>

                <div className='card p-6 scroll-animation delay-200'>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                        <div>
                            <h3 className='text-xl font-bold text-white'>КГЮА IT-колледж</h3>
                            <p className='text-white'>Специализация в области разработки ПО</p>
                        </div>
                        <p className='text-gray-400 md:text-right mt-2 md:mt-0'>2018 - 2021</p>
                    </div>

                    <p className='text-gray-400'>
                        Специализация в области разработки программного обеспечения. Изучение языков программирования, алгоритмов, структур
                        данных и основ веб-разработки. Участие в студенческих проектах и хакатонах для развития практических навыков.
                    </p>
                </div>
            </div>
        </section>
    )
}
