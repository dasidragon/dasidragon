import { useEffect, useRef } from 'react'

const range = 30
const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1)

const DevCard = () => (
    <svg viewBox='0 0 175 250' xmlns='http://www.w3.org/2000/svg' style={{ width: '100%', height: '100%' }}>
        <defs>
            <linearGradient id='cardGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='' />
                <stop offset='100%' stopColor='#0a0c18' />
            </linearGradient>
            <linearGradient id='accentGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#3c50e0' />
                <stop offset='100%' stopColor='#3c50e0' />
            </linearGradient>
            <linearGradient id='avatarGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#1e2040' />
                <stop offset='100%' stopColor='#0f1128' />
            </linearGradient>
            <filter id='glow'>
                <feGaussianBlur stdDeviation='2' result='coloredBlur'/>
                <feMerge><feMergeNode in='coloredBlur'/><feMergeNode in='SourceGraphic'/></feMerge>
            </filter>
        </defs>

        <rect width='175' height='250' fill='url(#cardGrad)' rx='16' />

        {[0,1,2,3,4,5,6].map(i => (
            <line key={`h${i}`} x1='0' y1={i*40} x2='175' y2={i*40} stroke='rgba(99,102,241,0.06)' strokeWidth='1'/>
        ))}
        {[0,1,2,3,4].map(i => (
            <line key={`v${i}`} x1={i*44} y1='0' x2={i*44} y2='250' stroke='rgba(99,102,241,0.06)' strokeWidth='1'/>
        ))}

        <rect x='0' y='0' width='175' height='3' rx='0' fill='url(#accentGrad)' />

        <circle cx='87.5' cy='75' r='38' fill='url(#avatarGrad)' />
        <circle cx='87.5' cy='75' r='38' fill='none' stroke='url(#accentGrad)' strokeWidth='1.5' strokeDasharray='4 3' />

        <circle cx='87.5' cy='65' r='14' fill='#3c50e0' />
        <ellipse cx='87.5' cy='96' rx='22' ry='13' fill='#3c50e0' />

        <text x='87.5' y='70' textAnchor='middle' dominantBaseline='middle'
              fill='white' fontFamily='system-ui, sans-serif' fontSize='16' fontWeight='800' letterSpacing='-0.5'>
            DN
        </text>

        <text x='87.5' y='128' textAnchor='middle'
              fill='white' fontFamily='system-ui, sans-serif' fontSize='11' fontWeight='700'>
            Дастан Нурбеков
        </text>

        <rect x='27' y='138' width='121' height='18' rx='9' fill='rgba(99,102,241,0.2)' />
        <rect x='27' y='138' width='121' height='18' rx='9' fill='none' stroke='rgba(99,102,241,0.4)' strokeWidth='0.8' />
        <text x='87.5' y='150' textAnchor='middle' dominantBaseline='middle'
              fill='#6366f1' fontFamily='system-ui, sans-serif' fontSize='8' fontWeight='600' letterSpacing='1'>
            FRONTEND DEVELOPER
        </text>

        <rect x='20' y='168' width='135' height='1' rx='0.5' fill='rgba(255,255,255,0.05)' />
        <rect x='20' y='176' width='60' height='5' rx='2.5' fill='rgba(99,102,241,0.3)' />
        <rect x='86' y='176' width='40' height='5' rx='2.5' fill='rgba(6,182,212,0.25)' />
        <rect x='20' y='187' width='80' height='5' rx='2.5' fill='rgba(255,255,255,0.06)' />
        <rect x='106' y='187' width='30' height='5' rx='2.5' fill='rgba(168,85,247,0.25)' />
        <rect x='20' y='198' width='50' height='5' rx='2.5' fill='rgba(6,182,212,0.2)' />
        <rect x='76' y='198' width='70' height='5' rx='2.5' fill='rgba(255,255,255,0.05)' />

        {['#6366f1','#06b6d4','#a855f7','#f59e0b','#10b981'].map((color, i) => (
            <circle key={i} cx={35 + i * 26} cy='222' r='6' fill={`${color}22`} stroke={color} strokeWidth='1.2' filter='url(#glow)' />
        ))}

        <circle cx='158' cy='20' r='4' fill='rgba(6,182,212,0.6)' filter='url(#glow)' />
        <circle cx='158' cy='20' r='2' fill='#06b6d4' />
    </svg>
)

export const Parallax = () => {
    const cardRef = useRef(null)
    const wrapRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = ({ x, y }) => {
            if (!cardRef.current) return
            const yValue = calcValue(y, window.innerHeight)
            const xValue = calcValue(x, window.innerWidth)
            cardRef.current.style.transform = `perspective(1000px) rotateX(${yValue}deg) rotateY(${xValue}deg)`
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div ref={wrapRef} style={{ perspective: '1000px', flexShrink: 0 }}>
            <div
                ref={cardRef}
                style={{
                    width: 175,
                    height: 250,
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 40px rgba(99,102,241,0.2)',
                    transition: 'transform 0.15s ease-out',
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateX(8deg) rotateY(14deg)',
                }}
            >
                <DevCard />
            </div>
        </div>
    )
}
