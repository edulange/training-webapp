import React from 'react'
import './Home.css'


const Home = () => {
	return (
		<>
			<section id='home'>
				<div className='background-first-fold'></div>
				<div className='first-fold-container'>
					<div className='text-intro'>
						<h1>Fale inglês mais rápido com a Wizard</h1>
						<p>Aqui você aprende mais rápido através de um método de ensino exclusivo!</p>
					</div>
					<div className='image-first-fold'>
						<img src='./aguia.webp' alt='' />
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
