import './globals.css'
import { Karla } from 'next/font/google'

const karla = Karla({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-karla',
})

export const metadata = {
	title: 'Single Price Grid Component',
	description:
		'FrontEnd Mentor Challenge | Single Price Grid Component | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${karla.variable} bg-lightGray font-sans`}>
				{children}
			</body>
		</html>
	)
}
