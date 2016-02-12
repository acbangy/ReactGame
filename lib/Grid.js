import Row from './Row';
import Cell from './Cell';
import _ from "lodash";

class Grid extends React.Component {
	constructor(props) {
		super(props);

		this.prepareMatrix();

	}
	prepareMatrix() {
		this.matrix = [];
		for (let r=0; r < this.props.rows; r++) {
			let row = [];
			for (let c=0; c < this.props.columns; c++) {
				row.push(`${r}${c}`);
			}
			this.matrix.push(row);
		}

		let flatMatrix = _.flatten(this.matrix);

		this.randomCells = _.sampleSize(flatMatrix, this.props.activeCellsCount);
	}
	recordGuess(cellId) {
		if (this.props.gameState === "recall") {
			this.props.recordGuessResult(this.cellIsActive(cellId), cellId)
		}
	}
	guessState(cellId) {
		if (this.props.correctGuesses.indexOf(cellId) >= 0) {
			return 'green';
		}
		if (this.props.wrongGuesses.indexOf(cellId) >= 0) {
			return 'red';
		}
	}
	cellIsActive(cellId) {
		return this.randomCells.indexOf(cellId) >= 0;
	}
	render() {
		return (
			<div>
				{
					this.matrix.map((cells, i) => 
						<Row key={i}>
							{cells.map(cellId =>
								<Cell key={cellId} id={cellId} 
										guessState={this.guessState(cellId)}
										shouldShow={this.props.gameState === "memorize" && this.cellIsActive(cellId)}
										recordGuess={this.recordGuess.bind(this)}
										gameState={this.props.gameState}/>
							)}
						</Row>
					)
				}
			</div>
		);
	}
}

export default Grid;