import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome } from 'react-icons/fa';

export default function Home() {
	return (
		<main className='relative bg-primary flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
			<div className=' max-w-7xl w-full '>
				<FloatingNav
					navItems={[{ name: 'home', link: '/', icon: <FaHome /> }]}
				/>
				<Hero />
				<Grid />
			</div>
		</main>
	);
}
