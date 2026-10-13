const experiences = [
    {
        company: 'BI Innovations',
        position: 'Full-Stack Developer',
        period: 'Сентябрь 2024 - настоящее время',
        type: 'Продуктовая компания',
        location: 'Казахстан, Астана (Remote)',
        projects: 'CRM Sales',
        description:
            'CRM Sales — платформа для автоматизации продаж, управления клиентской базой, сделками и внутренними бизнес-процессами. Полный цикл: клиентская часть, серверная логика и интеграции.\n• Разрабатывал и выпускал функциональность CRM от реализации бизнес-требований до готового решения, интегрированного в рабочие процессы компании.\n• Разрабатывал клиентскую часть CRM на React и TypeScript: интерфейсы для работы с клиентами, сделками и задачами, управление состоянием, интеграция с API.\n• Разрабатывал серверную часть на Node.js, C# и .NET: бизнес-логику, API и интеграции, на которых строится работа клиентского приложения.\n• Реализовал интеграцию с 1С для автоматической загрузки и синхронизации задач, устранив необходимость ручного переноса данных менеджерами.\n• Разработал механизм уведомлений в реальном времени, позволяющий сотрудникам оперативно получать информацию о новых задачах и быстрее их обрабатывать.\n• Проектировал контракты между клиентской и серверной частями, обеспечивая согласованную работу интерфейса и внешних сервисов.\n• Оптимизировал производительность и улучшил UX/UI, что повысило удобство работы сотрудников с системой.\n• Улучшил архитектуру и внедрил лучшие практики кодирования, что повысило стабильность и поддерживаемость кода.\n• Участвовал в техническом планировании, оценке задач и code review, уделяя внимание качеству реализации, поддерживаемости кода и соблюдению стандартов разработки.\n• Доводил реализованную функциональность до состояния, готового к использованию в рабочей среде, учитывая корректность интеграций и стабильность пользовательских сценариев.',
    },
    {
        company: 'G&GTeam',
        position: 'Front-end Developer',
        period: 'Октябрь 2024 - Февраль 2025',
        type: 'Аутсорсинговая компания',
        location: 'Россия, Москва (Part-Time Remote)',
        projects: 'CRM Locali, Главный сайт, Мобильное приложение Локали',
        description:
            'Основные обязанности:\n• Поддержка существующих админ веб-приложений для автоматизации процессов в сфере ресторанов и кафе, включая обеспечение стабильности и производительности.\n• Оптимизация пользовательских интерфейсов для улучшения взаимодействия с клиентами и персоналом.\n• Работа с React-Leaflet для поддержки карт и геолокационных сервисов в веб-приложениях.\n• Настройка конфигурации Vite для сборки и оптимизации приложений, что повысило производительность и ускорило процесс разработки.\n• Внедрение новых технологий, таких как React-query, React-Hook-Form и Chartjs, для улучшения функциональности и интерфейса проекта.\n• Поддержка лендинг сайта, обеспечение его стабильной работы и оптимизации для улучшения производительности и конверсии.',
    },
    {
        company: 'Cloud Soft',
        position: 'Front-end Developer',
        period: 'Октябрь 2023 - Июль 2024',
        type: 'Продуктовая компания',
        location: 'Кыргызстан, Бишкек (Full-time)',
        projects: 'CRM, Главный сайт, UBR, Лендинг сайт BSMART',
        description:
            'Разработка продуктов для розничной торговли и автоматизации бизнес-процессов: CRM-системы, кассовые решения, сервис электронной подписи UBR, интеграция государственных сервисов.\n• Разрабатывал клиентскую часть CRM-систем на React для автоматизации покупок и продаж: от проработки требований и декомпозиции задач до релиза в production.\n• Реализовал интеграцию с государственным сервисом ГНС и сервисом электронной подписи UBR, обеспечив соответствие требованиям законодательства и корректную работу критичных для бизнеса сценариев.\n• Создал кассовые решения и десктопные приложения на Electron.js для автоматизации торговых процессов клиентов.\n• Разработал лендинги и веб-приложения на Next.js с упором на SEO и скорость загрузки страниц.\n• Оптимизировал производительность приложений и участвовал во внедрении ключевых функциональных элементов продуктов.\n• Выстраивал взаимодействие интерфейса с серверной частью по REST API, согласовывал контракты и обрабатывал граничные случаи.\n• Выпускал проекты в срок и в соответствии со стандартами качества, уделяя внимание поддерживаемости кода.',
    },
    {
        company: 'AVN',
        position: 'Junior Front-end Developer',
        period: 'Март 2022 - Октябрь 2023',
        type: 'Аутсорсинговая компания',
        location: 'Кыргызстан, Бишкек (Full-time)',
        projects: 'Портал для приема в вузы, Главный сайт AVN, Онлайн поступления в лицей',
        description:
            'Разработка веб-приложений и ПО для образовательных учреждений и государственных заказчиков.\n• Разработал с нуля клиентскую часть портала для приёма в вузы Кыргызской Республики граждан зарубежных стран: подача заявок полностью автоматизирована, поступление иностранных абитуриентов стало проще.\n• Провёл несколько проектов полного цикла — от нуля до релиза в срок, с высоким качеством исполнения.\n• Определил подход к оптимизации интерфейсов и функциональности приложений, повысив их эффективность и удобство использования.\n• Проектировал структуру приложений и переиспользуемые компоненты, чтобы упростить дальнейшую поддержку и развитие продуктов.\n• Работал с государственными и образовательными заказчиками: уточнял требования и согласовывал результат на каждом этапе.\n• Отвечал за поддержку выпущенных веб-приложений: исправлял дефекты и дорабатывал функциональность по запросам заказчиков.',
    },
]

export const ExperienceSection = () => {
    const formatDescription = text => {
        if (!text) return null

        return text.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('•')) {
                return (
                    <li key={index} className='ml-5 pl-2 mb-2 text-gray-400'>
                        {paragraph}
                    </li>
                )
            }
            return (
                <p key={index} className='text-gray-400 mb-3'>
                    {paragraph}
                </p>
            )
        })
    }

    return (
        <section id='experience' className='min-h-screen flex flex-col justify-center px-6 py-20'>
            <div className='max-w-4xl mx-auto w-full'>
                <h2 className='section-title text-shadow-purple scroll-animation'>Опыт работы</h2>

                <div className='relative'>
                    <div className='absolute top-0 bottom-0 left-8 w-0.5 bg-[#57b8ff]/30 hidden md:block'></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative md:pl-16 mb-12 scroll-animation delay-${(index + 1) * 100}`}>
                            <div className='absolute left-0 top-0 w-16 h-16 flex items-center justify-center hidden md:flex'>
                                {/* Изменяем точки на иконки согласно компании */}
                                {exp.company === 'BI Innovations' && (
                                    <div className='w-10 h-10 rounded-full bg-[#57b8ff]/20 flex items-center justify-center z-10 shadow-glow'>
                                        <svg
                                            className='h-5 w-5 text-[#3C50E0]'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2zm-6 0h-4V4h4v2z' />
                                        </svg>
                                    </div>
                                )}
                                {exp.company === 'G&GTeam' && (
                                    <div className='w-10 h-10 rounded-full bg-[#3C50E0]/20 flex items-center justify-center z-10 shadow-glow'>
                                        <svg
                                            className='h-5 w-5 text-[#3C50E0]'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z' />
                                        </svg>
                                    </div>
                                )}
                                {exp.company === 'BSmart' && (
                                    <div className='w-10 h-10 rounded-full bg-[#57b8ff]/20 flex items-center justify-center z-10 shadow-glow'>
                                        <svg
                                            className='h-5 w-5 text-[#3C50E0]'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z' />
                                        </svg>
                                    </div>
                                )}
                                {exp.company === 'AVN' && (
                                    <div className='w-10 h-10 rounded-full bg-[#3C50E0]/20 flex items-center justify-center z-10 shadow-glow'>
                                        <svg
                                            className='h-5 w-5 text-[#3C50E0]'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M12 3L1 9l11 6l9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z' />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className='card p-6 hover:shadow-glow transition-all duration-500 hover:border-[#57b8ff]/50'>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-start'>
                                    <div>
                                        <h3 className='text-xl font-bold text-white'>{exp.company}</h3>
                                        <p className='text-white font-medium'>{exp.position}</p>
                                    </div>
                                    <p className='text-gray-400 md:text-right mt-2 md:mt-0'>{exp.period}</p>
                                </div>

                                <div className='flex flex-wrap gap-2 my-3'>
                                    <span className='text-xs bg-white/20 text-white px-2 py-1 rounded-full'>{exp.type}</span>
                                    <span className='text-xs bg-white/20 text-white px-2 py-1 rounded-full'>{exp.location}</span>
                                </div>

                                <div className='mb-4'>
                                    <h4 className='text-lg font-medium text-white mb-2'>Проекты:</h4>
                                    <p className='text-gray-400'>{exp.projects}</p>
                                </div>

                                <div>
                                    <h4 className='text-lg font-medium text-white mb-2'>Описание:</h4>
                                    <ul className='list-none'>{formatDescription(exp.description)}</ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
