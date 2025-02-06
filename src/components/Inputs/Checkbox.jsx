const Checkbox = ({ onChange, isError, isDisabled, value }) => {
	return (
		<div className='form__input-wrap'>
			<label className='form__checkbox'>
				<input
					className='form__input_check'
					type='checkbox'
					name='confirmPassword'
					value={value}
					defaultChecked={!!value}
					onChange={onChange}
					disabled={isDisabled}
				/>
				Подтверждаю пароль
			</label>
			{isError && <label className='form__text-error'>{isError}</label>}
		</div>
	);
};

export default Checkbox;
