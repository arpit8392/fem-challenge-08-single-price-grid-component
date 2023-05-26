const Card = () => {
	return (
		<section className='grid max-w-xs grid-cols-1 overflow-hidden rounded-lg bg-white md:max-w-2xl md:grid-cols-2'>
			<div className='flex flex-col space-y-3 p-7 md:col-span-2'>
				<h1 className='text-xl font-bold text-primaryCyan'>
					Join our community
				</h1>
				<p className='font-bold text-brightYellow'>
					30-day, hassle-free money back guarantee
				</p>
				<p className='text-sm/7 text-grayishBlue'>
					Gain access to our full library of tutorials along with expert code
					reviews. Perfect for any developers who are serious about honing their
					skills.
				</p>
			</div>
			<div className='flex flex-col space-y-2 bg-primaryCyan p-6 text-white md:p-12'>
				<h2 className='pb-2 text-lg font-bold'>Monthly Subscription</h2>
				<h3
					className='flex items-center text-3xl font-bold 
				'>
					$29{' '}
					<span className='ml-2 text-base font-normal text-white/50 '>
						per month
					</span>
				</h3>
				<p className='pb-6 tracking-normal'>
					Full access for less than $1 a day
				</p>
				<button className='w-full rounded bg-brightYellow py-4 font-bold'>
					Sign Up
				</button>
			</div>
			<div className='flex flex-col space-y-4 bg-primaryCyan/75 p-6 text-white md:p-12'>
				<h4 className='text-lg font-bold'>Why Us</h4>
				<ul className='text-lightGray '>
					<li>Tutorials by industry experts</li>
					<li>Peer &amp; expert code review</li>
					<li>Coding exercises</li>
					<li>Access to our GitHub repos</li>
					<li>Community forum</li>
					<li>Flashcard decks</li>
					<li>New videos every week</li>
				</ul>
			</div>
		</section>
	)
}
export default Card
