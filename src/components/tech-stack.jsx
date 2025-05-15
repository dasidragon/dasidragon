import { frontendIcon, backendIcon, devopsIcon, mobileIcon, methodologiesIcon } from '../assets/icons'

const technologies = {
    frontend: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Redux',
        'Redux-toolkit',
        'Jotai',
        'Mobx',
        'HTML',
        'CSS',
        'Sass',
        'Less',
        'Tailwind',
        'AntDesign',
        'Shadcn UI',
        'React-query',
        'Webpack',
        'Vite',
        'Babel',
        'FSD',
        'React-leaflet',
        'i18next',
        'Styled-components',
        'KISS',
        'DRY',
        'FSD',
        'WebSocket',
        'Vue',
        'Electron.js',
        'React-Spring',
        'Chart.js',
    ],
    backend: [
        'Node.js',
        'Express',
        'Nest.js',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Redis',
        'GraphQL',
        'JWT',
        'REST API',
        'TypeORM',
        'Sequelize',
        'Prisma',
        'Socket.IO',
        'Swagger',
        'Fastify',
        'MVC',
        'Microservices',
        'Docker',
        'RabbitMQ',
        'SOLID',
    ],
    mobile: ['React-Native (Expo / CLI)'],
    devops: ['Git', 'GitLab', 'CI/CD', 'Docker', 'Nginx', 'Precommit', 'Husky', 'Lint-stage', 'commitlint'],
    methodologies: ['Waterfall', 'Agile', 'Scrum', 'Kanban'],
}

const icons = {
    frontend: <img src={frontendIcon} alt='Frontend' className='h-6 w-6' />,
    backend: <img src={backendIcon} alt='Backend' className='h-6 w-6' />,
    mobile: <img src={mobileIcon} alt='Mobile' className='h-6 w-6' />,
    devops: <img src={devopsIcon} alt='DevOps' className='h-6 w-6' />,
    methodologies: <img src={methodologiesIcon} alt='Methodologies' className='h-6 w-6' />,
}

export const TechStack = () => {
    const renderTechItem = (tech, index) => (
        <span
            key={index}
            className='tech-badge text-xs bg-white/20 text-white px-2 py-1 rounded-full transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-glow cursor-default'
        >
            {tech}
        </span>
    )

    return (
        <section id='tech' className='min-h-screen flex flex-col justify-center px-6 py-20 relative'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#57b8ff]/5 to-transparent opacity-30 z-0'></div>

            <div className='max-w-4xl mx-auto w-full relative z-10'>
                <h2 className='section-title text-shadow-indigo scroll-animation'>Стек технологий</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='card p-6 scroll-animation delay-100 group hover:border-[#57b8ff]/50 transition-all duration-500 hover:shadow-glow'>
                        <div className='flex items-center mb-4'>
                            <span className='mr-3'>{icons.frontend}</span>
                            <h3 className='text-xl font-semibold text-white'>Frontend</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>{technologies.frontend.map(renderTechItem)}</div>
                    </div>

                    <div className='card p-6 scroll-animation delay-200 group hover:border-[#3C50E0]/50 transition-all duration-500 hover:shadow-glow'>
                        <div className='flex items-center mb-4'>
                            <span className='mr-3'>{icons.backend}</span>
                            <h3 className='text-xl font-semibold text-white'>Backend</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>{technologies.backend.map(renderTechItem)}</div>
                    </div>

                    <div className='card p-6 scroll-animation delay-300 group hover:border-[#3C50E0]/50 transition-all duration-500 hover:shadow-glow'>
                        <div className='flex items-center mb-4'>
                            <span className='mr-3'>{icons.mobile}</span>
                            <h3 className='text-xl font-semibold text-white'>Мобильная разработка</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>{technologies.mobile.map(renderTechItem)}</div>
                    </div>

                    <div className='card p-6 scroll-animation delay-400 group hover:border-[#57b8ff]/50 transition-all duration-500 hover:shadow-glow'>
                        <div className='flex items-center mb-4'>
                            <span className='mr-3'>{icons.devops}</span>
                            <h3 className='text-xl font-semibold text-white'>DevOps-friendly разработка</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>{technologies.devops.map(renderTechItem)}</div>
                    </div>

                    <div className='card p-6 md:col-span-2 scroll-animation delay-500 group hover:border-[#3C50E0]/50 transition-all duration-500 hover:shadow-glow'>
                        <div className='flex items-center mb-4'>
                            <span className='mr-3'>{icons.methodologies}</span>
                            <h3 className='text-xl font-semibold text-white'>Методологии разработки</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>{technologies.methodologies.map(renderTechItem)}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
