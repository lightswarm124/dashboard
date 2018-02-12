import Web3Container from '../lib/Web3Container';
import Widget from '../../widget';
import Counter from '../../counter';

class Accounts extends React.Component {
	static defaultProps = {
		interval: 1000 * 60 * 5,
		title: 'Ethereum Addresses'
	};

	state = {
	  count: 0,
	  error: false,
	  loading: true
  	};

	componentDidMount () {
	  	try {
			this.fetchAddresses();
		} catch(err) {
			console.error(`${err.name} @ ${this.constructor.name}`, err.errors);
			this.setState({ error: true, loading: false });
		}
	}

	componentWillUnmount () {
	  	clearTimeout(this.timeout)
	}

	async fetchAddresses() {
		const { accounts } = this.props;

		try {
			const addresses = accounts.json;
			console.log(addresses);
			count = accounts[0];
			console.log(count);
			this.setState({ count, error: false, loading: false })
		} catch (error) {
	      	this.setState({ error: true, loading: false })
	    } finally {
	      	this.timeout = setTimeout(() => this.fetchAddresses(), this.props.interval)
	    }
	}

	render () {
		const { count, error, loading } = this.state
		const { title } = this.props
		return (
			  <Counter value={count} />
		);
	}
}

export default () => (
  	<Web3Container
    	renderLoading={() => <div>Loading Accounts Page...</div>}
    	render={({ accounts }) =>  (
			<Accounts accounts={accounts} />
			<Widget title={title} loading={loading} error={error}> />
			</Widget>
		)}
	/>
)
