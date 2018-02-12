import { Component } from 'react'
import tinytime from 'tinytime'
import styled from 'styled-components'
import Widget from '../../widget'

const TimeItem = styled.div`
  font-size: 4em;
  text-align: center;
`

const DateItem = styled.div`
  font-size: 1.5em;
  text-align: center;
`

export default class DateTime extends Component {
  static defaultProps = {
    interval: 1000
  }

  state = {
    date: new Date()
  }

  componentDidMount () {
    const { interval } = this.props
    this.timeout = setTimeout(() => this.setState({ date: new Date() }), interval)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  async fetchTime () {
	try {
		this.setState({ date: new Date() })
	} catch (error) {
		console.log(error);
	} finally {
		this.timeout = setTimeout(() => this.fetchTime(), this.props.interval);
	}
  }

  render () {
    const { date } = this.state
    return (
      <Widget>
        <TimeItem>{tinytime('{H}:{mm}:{ss}').render(date).bind(this)}</TimeItem>
        <DateItem>{tinytime('{DD}.{Mo}.{YYYY}').render(date).bind(this)}</DateItem>
      </Widget>
    )
  }
}
