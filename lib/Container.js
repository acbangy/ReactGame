import Game from './Game';

class Container extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}
	render() {
		return (
			<div>
				<Game rows={5} columns={5} activeCellsCount={6}/>
			</div>
		);
	}
}

export default Container;