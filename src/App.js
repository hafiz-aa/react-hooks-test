import React, { useState, useEffect } from 'react';

function App() {
	const [count, setCount] = useState(0);


	useEffect(() => {
		document.title = `You clicked ${count} times`;
	}, [count]);

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<div className="App">
			<h1>React App</h1>
			<p>Count: {count}</p>
			<button onClick={incrementCount}>Click Me</button>
		</div>
	);
}

export default App;
