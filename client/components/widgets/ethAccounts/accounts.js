import Web3Container from '../lib/Web3Container';
import Widget from '../../widget';
import Counter from '../../counter';

class Accounts extends React.Component {
	state = {
	  count: 0,
	  error: false,
	  loading: true
	}

	render () {
		return (
			<div>
			  <h1>My Accounts</h1>
			  <pre>{JSON.stringify(accounts, null, 4)}</pre>
			</div>
		);
	}
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ accounts }) =>  (
		<Accounts accounts={accounts} />
		<Widget title={title} loading={loading} error={error}>
		  <Counter value={count} />
		</Widget>
	)}
  />
)
