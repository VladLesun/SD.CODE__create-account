const Input = ({ type, name, placeholder, value, onChange, isError }) => {
	return (
		<div className='form__input-wrap'>
			<input
				className={isError ? 'form__input is-error' : 'form__input'}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{isError && <label className='form__text-error'>{isError}</label>}
		</div>
	);
};

export default Input;
