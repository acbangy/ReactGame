const Cell = (props) => {

	return (
		<div className={`cell active-${props.shouldShow} ${props.guessState}`}
				onClick={props.recordGuess.bind(this, props.id)}>

		</div>
	)
}

export default Cell;