import { FC } from 'react'

interface Props {
	children: React.ReactNode
}

const Header1:FC<Props> = ({children}) => {
	return (
		<h1 className=' my-4 text-3xl font-bold primary--font--color'>{children}</h1>
	)
}

export default Header1