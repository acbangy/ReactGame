import Grid from './Grid';
import Footer from './Footer';

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gameState: "ready",
			wrongGuesses: [],
			correctGuesses: []
		};
	}
	componentDidMount() {
		setTimeout( () => {
			this.setState({gameState: "memorize"}, () => {
				setTimeout( () => {
					this.setState({gameState:"recall"});
				}, 2000);
			});
		}, 2000)
	}
	recordGuessResult(correctGuess, cellId) {
		let {correctGuesses, wrongGuesses} = this.state;

		if (correctGuess) {
			correctGuesses.push(cellId);
		} else {
			wrongGuesses.push(cellId);
		}

		this.setState({
			correctGuesses,
			wrongGuesses
		})
	}
	render() {
		return (
			<div>
				<Grid {...this.props} {...this.state} 
					recordGuessResult={this.recordGuessResult.bind(this)}/>
				<Footer {...this.props} {...this.state} />
			</div>
		);
	}
}

Game.defaultProps = {
	hints: {
		"ready": "Get Ready...",
		"memorize": "Memorize!!!",
		"recall": "Go!!!"
	}
};

export default Game;