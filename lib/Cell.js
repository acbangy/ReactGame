const Cell = (props) => {
	const logoShow = !props.guessState || !props.shouldShow;
	return (
		<div className={`cell active-${props.shouldShow} ${props.guessState}`}
				onClick={props.recordGuess.bind(this, props.id)}>
			{(props.guessState || props.shouldShow) ? "" : <img src="img/forward3-logo.png" />}
			{(props.guessState === "red") ? <img src="img/tf1.png" /> : ""}
		</div>
	)
}

export default Cell;