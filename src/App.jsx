import { useState, useEffect } from 'react'
import {
    frontendIcon,
    backendIcon,
    emailIcon,
    arrowDownIcon,
    devopsIcon,
    githubIcon,
    mobileIcon,
    linkedinIcon,
    telegramIcon,
    locationIcon,
    arrowRightIcon,
    methodologiesIcon,
} from './assets/icons'
import { HeroSection } from '@/components/hero-section.jsx'
import { TechStack } from '@/components/tech-stack.jsx'
import { ExperienceSection } from '@/components/experience-section.jsx'
import { Header } from '@/components/header.jsx'
import { MobileMenu } from '@/components/mobile-menu.jsx'
import { ProjectsSection } from '@/components/projects-section.jsx'
import { EducationSection } from '@/components/education-section.jsx'
import { ContactsSection } from '@/components/contacts-section.jsx'
import { Footer } from '@/components/footer.jsx'
import { VerticalStepper } from '@/components/vertical-stepper.jsx'

const App = () => {
    const [activeSection, setActiveSection] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const options = {
            threshold: 0.4,
            rootMargin: '-80px 0px -80px 0px',
        }

        const headerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -90% 0px',
        }

        const sectionCallback = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id
                    switch (id) {
                        case 'header':
                            setActiveSection(0)
                            break
                        case 'tech':
                            setActiveSection(1)
                            break
                        case 'experience':
                            setActiveSection(2)
                            break
                        case 'projects':
                            setActiveSection(3)
                            break
                        case 'education':
                            setActiveSection(4)
                            break
                        case 'contacts':
                            setActiveSection(5)
                            break
                    }
                }
            })
        }

        const headerCallback = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                    setActiveSection(0)
                }
            })
        }

        const observer = new IntersectionObserver(sectionCallback, options)
        const headerObserver = new IntersectionObserver(headerCallback, headerOptions)

        setTimeout(() => {
            const headerElement = document.getElementById('header')
            if (headerElement) {
                headerObserver.observe(headerElement)
            }

            const sections = ['tech', 'experience', 'projects', 'education', 'contacts']
            sections.forEach(id => {
                const element = document.getElementById(id)
                if (element) {
                    observer.observe(element)
                }
            })
        }, 500)

        return () => {
            observer.disconnect()
            headerObserver.disconnect()
        }
    }, [])

    useEffect(() => {
        const highlightSection = () => {
            const sections = ['header', 'tech', 'experience', 'projects', 'education', 'contacts']
            const currentSectionId = sections[activeSection]

            if (currentSectionId) {
                const currentElement = document.getElementById(currentSectionId)

                if (currentElement) {
                    currentElement.classList.add('active-section')

                    sections.forEach(id => {
                        if (id !== currentSectionId) {
                            const element = document.getElementById(id)
                            if (element) {
                                element.classList.remove('active-section')
                            }
                        }
                    })
                }
            }
        }

        highlightSection()
    }, [activeSection])

    useEffect(() => {
        const scrollAnimationElements = document.querySelectorAll('.scroll-animation')

        const scrollAnimationObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate')
                    }
                })
            },
            { threshold: 0.1 },
        )

        scrollAnimationElements.forEach(element => {
            scrollAnimationObserver.observe(element)
        })

        return () => {
            scrollAnimationElements.forEach(element => {
                scrollAnimationObserver.unobserve(element)
            })
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection(0)
            }

            const sections = ['header', 'tech', 'experience', 'projects', 'education', 'contacts']
            const viewportHeight = window.innerHeight
            const viewportCenter = window.scrollY + viewportHeight / 2

            let closestSection = 0
            let minDistance = Infinity

            sections.forEach((id, index) => {
                const element = document.getElementById(id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const sectionCenter = window.scrollY + rect.top + rect.height / 2
                    const distance = Math.abs(viewportCenter - sectionCenter)

                    if (distance < minDistance) {
                        minDistance = distance
                        closestSection = index
                    }
                }
            })

            if (closestSection !== activeSection) {
                setActiveSection(closestSection)
            }
        }

        let timeout
        const throttledScroll = () => {
            if (!timeout) {
                timeout = setTimeout(() => {
                    handleScroll()
                    timeout = null
                }, 200)
            }
        }

        window.addEventListener('scroll', throttledScroll)
        return () => window.removeEventListener('scroll', throttledScroll)
    }, [activeSection])

    return (
        <div className='bg-[#000000] text-white min-h-screen animated-bg'>
            <Header menuOpen={menuOpen} />

            <VerticalStepper activeSection={activeSection} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <HeroSection />
            <TechStack />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactsSection />
            <Footer />
        </div>
    )
}

export default App
