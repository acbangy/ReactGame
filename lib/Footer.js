class Footer extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div>
				{this.props.hints[this.props.gameState]}
			</div>
		);
	}
}

export default Footer;