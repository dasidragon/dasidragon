export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const sections = [
        { id: 'header', label: 'Главная' },
        { id: 'tech', label: 'Технологии' },
        { id: 'experience', label: 'Опыт' },
        { id: 'projects', label: 'Проекты' },
        { id: 'education', label: 'Образование' },
        { id: 'contacts', label: 'Контакты' },
    ]

    const scrollToSection = id => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMenuOpen(false)
        }
    }

    return (
        <>
            <div
                className={`fixed inset-0 glass z-40 transform transition-transform md:hidden
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Добавляем кнопку закрытия (крестик) */}
                <button
                    className='absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800/80 transition-colors'
                    onClick={() => setMenuOpen(false)}
                >
                    <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>

                <nav className='flex h-full items-center justify-center'>
                    <ul className='flex flex-col gap-8 text-center'>
                        {sections.map(section => (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className='text-xl text-white hover:text-gray-200 transition-colors'
                                >
                                    {section.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
