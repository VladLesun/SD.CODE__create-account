import { useState } from 'react';
import Button from '../Button/Button';
import Checkbox from '../Inputs/Checkbox';
import Input from '../Inputs/Input';
import Password from '../Inputs/Password';
import './Form.css';

const Form = () => {
	const [form, setForm] = useState({
		name: '',
		surname: '',
		phone: '',
		email: '',
		password: '',
		repeatPassword: '',
		confirmPassword: false,
	});
	const [isShowPassword, setShowPassword] = useState(false);
	const [isShowRepeatPassword, setShowRepeatPassword] = useState(false);
	// const [isError, setError] = useState(false);

	// const validationForm = (name, value) => {
	// 	const fioValid = /^[a-zA-Zа-яА-ЯёЁ\s]+$/,
	// 		phoneValid = /^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/,
	// 		emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// 	if (value) {
	// 		if (name === 'name' && !fioValid.test(value))
	// 			return 'Имя состоит только из букв';

	// 		if (name === 'surname' && !fioValid.test(value))
	// 			return 'Фамилия состоит только из букв';

	// 		if (name === 'phone' && !phoneValid.test(value))
	// 			return 'Введите телефон в соответствии с схемой "375-ХХ-ХХХ-ХХ-ХХ"';

	// 		if (name === 'email' && !emailValid.test(value))
	// 			return 'Введите корректный адрес электронный почты';

	// 		if (name === 'password') {
	// 			if (value.length < 8) return 'Слишком короткий пароль';
	// 			if (!value.includes('_')) return 'Пароль должен содержать "_" символ';
	// 			if (!value.includes('-')) return 'Пароль должен содержать "-" символ';
	// 			if (!value.includes('@')) return 'Пароль должен содержать "@" символ';
	// 		}

	// 		if (name === 'repeatPassword') {
	// 			return value !== form.password ? 'Пароли не совпадают' : '';
	// 		}

	// 		// if ((name === 'password') !== (name === 'repeatPassword')) {
	// 		// 	setDisabled(true);
	// 		// 	return form.confirmPassword ? '' : 'Подтвердите пароль !';
	// 		// }

	// 		// if (name === 'confirmPassword') {
	// 		// }
	// 	} else {
	// 		return;
	// 	}
	// };

	const handleInputChange = e => {
		const { name, value, type, checked } = e.target;
		//! Продумать валидацию
		// const errorMessage = validationForm(name, value);

		// setError(prevErrors => ({
		// 	...prevErrors,
		// 	[name]: errorMessage,
		// }));

		// setForm(prevState => ({
		// 	...prevState,
		// 	[name]: type !== 'checkbox' ? value : checked,
		// }));

		setForm({ ...form, [name]: type !== 'checkbox' ? value : checked });
	};

	const handleCreateAccountClick = () => {
		const { password, repeatPassword, confirmPassword } = form;
		const formKeys = ['name', 'surname', 'phone', 'email', 'password'];
		let message = 'Ваши данные\n';

		if (password === repeatPassword) {
			if (password === '' && repeatPassword === '') {
				alert('Заполните поле паролей');
				return;
			}
			if (!confirmPassword) {
				alert('Подтвердите ваши пароли');
				return;
			}
		} else {
			alert('Ваши пароли не совпадают');
			return;
		}

		for (let key in form) {
			// if (!form[key]) {
			// 	alert('Все поля обязательны для заполнения !');
			// 	return;
			// }
			if (formKeys.includes(key)) {
				message += `${key}: ${form[key]}\n`;
			}
		}

		alert('Ваш аккаунт успешно создан');
		alert(message);
	};

	return (
		<form className='app__form form'>
			<Input
				type='text'
				name='name'
				placeholder='Имя'
				value={form.name}
				onChange={handleInputChange}
			/>
			<Input
				type='text'
				name='surname'
				placeholder='Фамилия'
				value={form.surname}
				onChange={handleInputChange}
			/>

			<Input
				type='tel'
				name='phone'
				placeholder='Номер телефона'
				value={form.phone}
				onChange={handleInputChange}
			/>

			<Input
				type='mail'
				name='email'
				placeholder='Email'
				value={form.email}
				onChange={handleInputChange}
			/>

			<Password
				type='password'
				name='password'
				placeholder='Пароль'
				value={form.password}
				onChange={handleInputChange}
				onToggle={() => setShowPassword(!isShowPassword)}
				isShow={isShowPassword}
			/>

			<Password
				type='password'
				name='repeatPassword'
				placeholder='Повторите пароль'
				value={form.repeatPassword}
				onChange={handleInputChange}
				onToggle={() => setShowRepeatPassword(!isShowRepeatPassword)}
				isShow={isShowRepeatPassword}
			/>

			<Checkbox value={form.confirmPassword} onChange={handleInputChange} />

			<Button onClick={handleCreateAccountClick} text='Продолжить' />
		</form>
	);
};

export default Form;
