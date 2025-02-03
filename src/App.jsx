import './App.css';
import Form from './components/Form/Form';

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<div className='app__content'>
					<h1 className='app__title'>Создание аккаунта</h1>
					<p className='app__desc'>
						Введите свои данные, чтобы создать аккаунт в сервисе
					</p>
					<Form />
					<p className='app__sing-in'>
						Уже есть аккаунт ?
						<a href='#!' className='app-sign-in__link'>
							Войти
							<svg
								className='app-sign-in__svg'
								width='14'
								height='14'
								viewBox='0 0 14 14'
								stroke='currentColor'
								fill='none'
							>
								<path
									d='M1 7H13'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M7.75 1.75L13 7L7.75 12.25'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
