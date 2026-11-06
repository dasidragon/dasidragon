import { useEffect, useRef, useState } from 'react'

export const CustomCursor = () => {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const mouse = useRef({ x: 0, y: 0 })
    const ring = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const onMove = e => {
            mouse.current = { x: e.clientX, y: e.clientY }
            if (dotRef.current) {
                dotRef.current.style.left = e.clientX + 'px'
                dotRef.current.style.top = e.clientY + 'px'
            }
        }

        const onEnter = () => ringRef.current?.classList.add('hovered')
        const onLeave = () => ringRef.current?.classList.remove('hovered')

        let raf
        const animate = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.12
            ring.current.y += (mouse.current.y - ring.current.y) * 0.12
            if (ringRef.current) {
                ringRef.current.style.left = ring.current.x + 'px'
                ringRef.current.style.top = ring.current.y + 'px'
            }
            raf = requestAnimationFrame(animate)
        }
        raf = requestAnimationFrame(animate)

        window.addEventListener('mousemove', onMove)
        document.querySelectorAll('a,button').forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('mousemove', onMove)
        }
    }, [])

    return (
        <>
            <div ref={dotRef} className='cursor-dot' />
            <div ref={ringRef} className='cursor-ring' />
        </>
    )
}

export const ScrollProgress = () => {
    const barRef = useRef(null)

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY
            const total = document.documentElement.scrollHeight - window.innerHeight
            const pct = total > 0 ? scrolled / total : 0
            if (barRef.current) {
                barRef.current.style.width = (pct * 100) + '%'
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return <div ref={barRef} className='scroll-progress' style={{ width: 0 }} />
}

export const NoiseOverlay = () => <div className='noise-overlay' aria-hidden='true' />
