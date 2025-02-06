const Password = ({
	name,
	placeholder,
	value,
	onChange,
	isError,
	onToggle,
	isShow,
}) => {
	return (
		<div className='form__input-wrap'>
			<input
				className={isError ? 'form__input is-error' : 'form__input'}
				type={isShow ? 'text' : 'password'}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<button
				className={
					isShow ? 'form__show form__show_open' : 'form__show form__show_close'
				}
				type='button'
				onClick={onToggle}
			/>
			{isError && <label className='form__text-error'>{isError}</label>}
		</div>
	);
};

export default Password;
