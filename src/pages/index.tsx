import CircularProgress from '@/components/CircularProgress'
import React, { useState } from 'react'

const inputStyles =
	'w-full outline-none border border-slate-200 dark:border-slate-700 bg-transparent px-5 py-2.5 rounded-lg focus:border-blue-600 duration-150'
export default function App() {
	const [isLoading, setIsLoading] = useState(false)

	const [inputField, setInputField] = useState('')
	const [output, setOutput] = useState('')

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault()

		setIsLoading(true)

		setTimeout(() => {
			setIsLoading(false)

			setOutput('Output will show here')
		}, 1500)
	}
	return (
		<div className="flex justify-center items-center flex-col min-h-screen">
			<div className="border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-md overflow-hidden">
				<h1 className="text-center text-2xl font-medium px-7 py-4 bg-blue-600 text-white">
					Enter any 256-bit hexadecimal value
				</h1>
				<div className="relative py-8">
					<form onSubmit={onSubmitHandler} className="flex gap-5 px-7">
						<input
							className={inputStyles}
							placeholder="Input"
							type="text"
							id="hashInput"
							value={inputField}
							onChange={e => setInputField(e.target.value)}
						/>
						<button
							type="submit"
							className="text-white shrink-0 bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
						>
							Calculate
						</button>
					</form>
					<div className="px-7 mt-6">
						<label htmlFor="hashOutput" className="text-base font-medium inline-block mb-2">
							Output:
						</label>
						<br />
						<input
							type="text"
							id="hashOutput"
							value={output}
							onChange={e => setOutput(e.target.value)}
							className={inputStyles}
						/>
						<br />
					</div>

					{isLoading && (
						<div className="absolute top-0 left-0 w-full h-full bg-blue-500 flex items-center justify-center z-10 text-white">
							<CircularProgress size={35} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
// Log to console
console.log('Hello console')
