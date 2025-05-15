const sections = [
    { id: 'header', label: 'Главная' },
    { id: 'tech', label: 'Технологии' },
    { id: 'experience', label: 'Опыт' },
    { id: 'projects', label: 'Проекты' },
    { id: 'education', label: 'Образование' },
    { id: 'contacts', label: 'Контакты' },
]

export const VerticalStepper = ({ activeSection }) => {
    const scrollToSection = (id, index) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className='fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block'>
            <ul className='flex flex-col gap-6'>
                {sections.map((section, index) => (
                    <li key={section.id}>
                        <button onClick={() => scrollToSection(section.id, index)} className='relative group' aria-label={section.label}>
                            <div
                                className={`w-3 h-3 rounded-full transition-all duration-300 
              group-hover:shadow-glow group-hover:bg-[#57b8ff] 
              ${activeSection === index ? 'bg-[#57b8ff] shadow-glow scale-150' : 'bg-gray-600'}`}
                            />

                            <span
                                className={`absolute right-6 top-1/2 transform -translate-y-1/2 whitespace-nowrap 
              group-hover:opacity-100 transition-all duration-300 text-white text-sm px-2 py-1 rounded
              ${activeSection === index ? 'opacity-100 bg-gray-900/80 text-[#57b8ff]' : 'opacity-0'}`}
                            >
                                {section.label}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
