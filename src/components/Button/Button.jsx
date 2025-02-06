const Button = ({ onClick, text }) => (
	<button onClick={onClick} className='form__submit' type='button'>
		{text}
	</button>
);

export default Button;
