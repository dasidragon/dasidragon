import { useEffect, useId, useRef } from 'react'

const range = 40

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1)

export const Parallax = () => {
    const cardsRef = useRef(null)
    const imageRefs = useRef(null)
    const bgRefs = useRef(null)
    const imgId = useId()

    useEffect(() => {
        const handleMouseMove = ({ x, y }) => {
            if (!cardsRef.current) return
            const yValue = calcValue(y, window.innerHeight)
            const xValue = calcValue(x, window.innerWidth)

            cardsRef.current.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`

            imageRefs.current?.forEach((img) => {
                img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`
            })

            bgRefs.current?.forEach((bg) => {
                bg.style.backgroundPosition = `${Number(xValue) * 0.45}px ${-Number(yValue) * 0.45}px`
            })
        }

        const handleOrientation = (e) => {
            if (!cardsRef.current) return
            let beta = e.beta || 0
            let gamma = e.gamma || 0

            cardsRef.current.style.transform = `rotateX(${Math.floor(gamma)}deg) rotateY(${Math.floor(beta)}deg)`

            imageRefs.current?.forEach((img) => {
                img.style.transform = `translateX(${Math.floor(gamma)}px) translateY(${Math.floor(beta)}px)`
            })

            bgRefs.current?.forEach((bg) => {
                bg.style.backgroundPosition = `${Math.floor(gamma) * 45}px ${Math.floor(-beta) * 0.45}px`
            })
        }

        imageRefs.current = document.querySelectorAll(imgId)
        bgRefs.current = document.querySelectorAll('[style*="background-image"]')

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('deviceorientation', handleOrientation)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('deviceorientation', handleOrientation)
        }
    }, [])

    return (
        <div
            ref={cardsRef}
            className="hidden md:flex justify-center  rounded-[15px] shadow-[0_10px_20px_20px_rgba(0,0,0,0.17)] perspective-[1800px] text-left transform-style-3d origin-center transform rotate-x-[11deg] rotate-y-[16.5deg]"
        >

            <div
                className={`relative inline-block w-[175px] h-[250px] overflow-hidden rounded-[15px] shadow-[5px_5px_20px_-5px_rgba(0,0,0,0.6)] perspective-[1200px] transform-style-3d transform translate-z-[35px] transition-transform duration-200 ease-out`}
            >
                <div
                    className="absolute -top-[50px] -bottom-[50px] -left-[50px] -right-[50px] z-0 transform translate-z-[-10px] bg-cover bg-center"
                    style={{ backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlbg.jpg)` }}
                ></div>
                <img className="relative h-full" id={imgId}
                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png" alt="card" />
            </div>
        </div>
    )
}