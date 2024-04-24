'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function Home() {
	const green = useRef(null)
	const orange = useRef(null)
	const fuchsia = useRef(null)

	useGSAP(() => {
		// gsap code here...
		gsap.to('.green', { rotation: -360, x: 300, duration: 1, y: 50 })
		gsap.from('.orange', { rotation: 360, x: 100, duration: 1 })
		gsap.fromTo(
			'.fuchsia',
			{ x: 300 },
			{ rotation: 360, x: 100, duration: 10 },
		)

		// <-- automatically reverted
	})

	return (
		<main className="h-screen  text-[#fffce1]">
			<h1 className="text-8xl uppercase">
				Hi welcome to my animation hub{' '}
			</h1>
			<h2 className="upperlcase text-5xl">
				{' '}
				A place to show my abilities{' '}
			</h2>

			<div className="flex flex-col gap-9 pt-20">
				<div
					ref={green}
					className="green h-24 w-24 rounded-md bg-green-400"
				></div>
				<div
					ref={orange}
					className="orange h-24 w-24 rounded-md bg-orange-400"
				></div>
				<div
					ref={fuchsia}
					className="fuchsia h-24 w-24 rounded-md bg-fuchsia-400"
				></div>
			</div>
		</main>
	)
}
