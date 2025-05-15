const renderStars = () => {
    const stars = []
    for (let i = 0; i < 40; i++) {
        const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.8 + 0.2,
        }
        stars.push(<div key={i} className='star' style={style} />)
    }
    return stars
}

export const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            {renderStars()}
            <div className='absolute top-20 right-20 w-64 h-64 bg-[#57b8ff]/5 rounded-full filter blur-3xl animate-blob float'></div>
            <div className='absolute bottom-40 left-10 w-72 h-72 bg-[#3C50E0]/5 rounded-full filter blur-3xl animate-blob animation-delay-2000 float float-delay-1'></div>
            <div className='absolute top-1/2 left-1/3 w-56 h-56 bg-[#000036]/5 rounded-full filter blur-3xl animate-blob animation-delay-4000 float float-delay-2'></div>

            <div className='fixed top-0 left-0 right-0 p-4 z-40 flex justify-between items-center glass'>
                <a href='#header' className='text-white font-bold text-xl transition-transform hover:scale-110 duration-300'>
                    DN
                </a>

                <a
                    href={import.meta.env.BASE_URL + '/Дастан_Нурбеков_Frontend_developer.pdf'}
                    target='_blank'
                    className='flex items-center gap-2 bg-[#57b8ff] text-white px-3 py-1.5 rounded-md hover:bg-[#57b8ff]/80 transition-colors shadow-lg'
                    download>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                    </svg>
                    Скачать резюме
                </a>

                <button
                    className='p-2 rounded-full hover:bg-gray-800/80 transition-colors gap-3 md:hidden'
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-5 h-0.5 bg-white mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>
        </>
    )
}
