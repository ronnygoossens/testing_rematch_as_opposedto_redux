import React from 'react'
import { connect } from 'react-redux'
import './App.css';

// Make a presentational component.
// It knows nothing about redux or rematch.
const App = ({ word, count, resetword, updateword, asyncIncrement, increment }) => (
	<div>
    <div>
      <h1 className="center">Testing Rematch in stead of Redux</h1>
      <hr></hr>
    </div>
		<h2 className="rematchcenter">
			count is <b style={{ backgroundColor: '#ccc'}}>{count}</b>
		</h2>
    <h2 style={{ padding: '10px' }}>
			word is <b style={{ padding: '10px' }}>{word}</b>
		</h2>
    <hr></hr>
		<h2>
			<button onClick={increment}>Increment count</button>{' '}
			<em style={{ backgroundColor: 'yellow' }}>(normal dispatch)</em>
		</h2>
     <h2>
			<button onClick={asyncIncrement}>
				Increment count (delayed 1 second)
			</button>{' '}
			<em style={{ backgroundColor: 'yellow' }}>(simulating an async effect!!!)</em>
		</h2>
    <hr></hr>
    <h2>
			<button onClick={updateword}>Increment word</button>{' '}
			<em style={{ backgroundColor: 'green' }}>Rematch at work</em>
		</h2>
		<h2>
			<button onClick={resetword}>Reset Word </button>{' '}
			<em style={{ backgroundColor: 'green' }}>Rematch at work</em>
		</h2>	
	</div>
)

const mapState = state => ({
  count: state.count,
  word: state.word
})

const mapDispatch = dispatch => ({
	increment: dispatch.count.increment,
  asyncIncrement: dispatch.count.asyncIncrement,
  updateword: dispatch.word.iword,
  resetword: dispatch.word.resetword  
})

// Use react-redux's connect
export default connect(
	mapState,
	mapDispatch
)(App)