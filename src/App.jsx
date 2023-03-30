import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Experience,
	Feedback,
	Hero,
	Navbar,
	Tech,
	Work,
	StarsCanvas,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='relative z-0'>
					<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
					<Work />

					<Feedback />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
