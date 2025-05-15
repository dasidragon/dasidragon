import { useState } from 'react'
import { ProjectCard } from '@/components/project-card.jsx'

const projects = [
    {
        title: 'Bi Sales',
        description:
            'CRM Sales — CRM-система для автоматизации продаж, управления клиентами, сделками и отчеты. Позволяет оптимизировать рабочие процессы, повысить эффективность продаж и улучшить взаимодействие с клиентами.',
        technologies: ['React', 'Antd', 'Redux-toolkit', 'TypeScript', 'i18next', 'Docker', 'Nginx'],
        image: '',
        link: '',
    },
    {
        title: 'CRM BSmart',
        description:
            'CRM BSmart — это современная CRM-система, разработанная для эффективного управления процессами покупки и продажи. Она обеспечивает полный контроль над сделками, позволяет вести учет клиентов и товаров, а также поддерживает интеграцию с ГНС для быстрой и безопасной авторизации операций.',
        technologies: ['React', 'React-query', 'Antd', 'React-router', 'Chart.js', 'Docker', 'Nginx', 'FSD', 'TypeScript', 'i18next'],
        image: '/bsmart.webp',
        link: 'https://apps.bsmart.kg',
    },
    {
        title: 'Лендинг сайт BSmart',
        description: 'Главная страница компании BSmart.',
        technologies: ['Next.js'],
        image: '/bsmart_site.webp',
        link: 'https://bsmart.kg/',
    },
    {
        title: 'UBR',
        description: 'UBR — специализированная система для продажи и управления электронными цифровыми подписями (ЭЦП).',
        technologies: ['Next.js', 'React', 'Axios', 'React-query', 'Redux', 'TypeScript'],
        image: '/ubr.webp',
        link: 'https://ubr.kg/p',
    },
    {
        title: 'Locali',
        description:
            'Locali — это универсальное решение, сочетающее в себе агрегатор доставки еды для пользователей и CRM-систему для управления процессами ресторанов, кафе и служб доставки. Платформа автоматизирует прием заказов, отслеживание доставок, управление меню и коммуникацию с клиентами.',
        technologies: ['React', 'React-query', 'Tailwindcss', 'Redux', 'React-leaflet', 'TypeScript'],
        image: '/locali.webp',
        link: 'https://loca-li.com/',
    },
    {
        title: 'Локали - Доставка еды',
        description: 'Мобильное приложение Локали - Доставка еды для Android и IOS',
        technologies: ['React-native', 'TypeScript'],
        image: '/locali_app.webp',
        link: 'https://apps.apple.com/kg/app/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D0%B8-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B5%D0%B4%D1%8B/id1625790808',
    },
    {
        title: 'Сайт G&GApp',
        description: 'G&GGApp - главный сайт компании G&GTeam.',
        technologies: ['Vanilla js'],
        image: '/ggapp.webp',
        link: 'https://ggapp.pro/',
    },
    {
        title: 'BeEasy',
        description:
            'BeEasy- это программное решение, предназначенное для удобного взаимодействия с сотрудниками, заказчиком и эффективного сотрудничества. Мы предоставляем широкий набор инструментов, включая возможность проведения проектирования на заданную проектную среду, группы, функции управления задачами, аналитику и управление проектами, а также связь в режиме реального времени.',
        technologies: ['React', 'Redux', 'React-router', 'Nodejs', 'Express.js', 'Nginx', 'Postgresql', 'Emotion', 'TypeScript'],
        image: '/beeasy.webp',
        link: '/https://beeasy.kg/',
    },
    {
        title: 'Сайт AVN',
        description: 'Главный сайт компании AVN.',
        technologies: ['React', 'Redux', 'Nodejs'],
        image: '/avn.webp',
        link: 'https://avn.kg/',
    },
    {
        title: 'битуриент Online',
        description: 'Портал для приема в вузы Кыргызской Республики граждан зарубежных стран.',
        technologies: ['React', 'Redux', 'Nodejs', 'Express.js', 'Postgresql'],
        image: '/applicant.webp',
        link: 'https://edugate.edu.gov.kg/',
    },
    {
        title: 'Umut',
        description: 'Система Umut',
        technologies: ['React', 'React-router-dom'],
        image: '/umut.webp',
        link: 'https://umut.edu.gov.kg/',
    },
]

export const ProjectsSection = () => {
    const [isMoreShow, setIsMoreShow] = useState(false)

    return (
        <section id='projects' className='min-h-screen flex flex-col justify-center px-6 py-20 relative'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#000036]/10 to-transparent opacity-30 z-0'></div>
            <div className='max-w-4xl mx-auto w-full relative z-10'>
                <h2 className='section-title text-shadow-accent scroll-animation'>Проекты</h2>

                <div
                    className='grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden pt-2'
                    style={{ maxHeight: isMoreShow ? '100%' : '1000px' }}
                >
                    {projects.map((project, index) => (
                        // <div key={index} className={`scroll-animation delay-${(index + 1) * 100}`}>
                        <ProjectCard {...project} key={index} />
                        // </div>
                    ))}
                </div>

                <button
                    onClick={() => setIsMoreShow(!isMoreShow)}
                    className='group relative px-4 py-2 rounded-md overflow-hidden m-auto block border-2 cursor-pointer mt-6'
                >
                    <span className='absolute inset-0 w-full h-full bg-[#04C8C8]/10 group-hover:bg-[#04C8C8]/20 transition-all duration-300'></span>
                    <span className='absolute inset-0 w-0 bg-[#04C8C8]/20 group-hover:w-full transition-all duration-700'></span>
                    <span className='relative text-white'>{isMoreShow ? 'Скрыть' : 'Показать еще'}</span>
                </button>
            </div>
        </section>
    )
}
