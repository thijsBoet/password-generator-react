import React, { useState, useRef } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import './App.css';

const App = () => {
	const [generatedPassword, setGeneratedPassword] = useState('');
	const [parameters, setParameters] = useState({
		characters: 15,
		letters: false,
		numbers: false,
		symbols: false,
	});

	const passwordRef = useRef(null);
	const copyToClipboard = e => {
		e.preventDefault();
		passwordRef.current.select();
		document.execCommand('copy');
		// This is just personal preference.
		// I prefer to not show the whole text area selected.
		e.target.focus();
	};

	const letterString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numberString = '0123456789';
	const symbolString = '!@#$%^&*()-_+={}[]|:;"\'<>.?/~`';

	const generatePassword = e => {
		e.preventDefault();

		if (!parameters.letters && !parameters.numbers && !parameters.symbols) {
			alert('Please select at least one character type');
			return;
		}

		let selectionString = '';
		let tempPassword = '';
		if (parameters.letters) selectionString += letterString;
		if (parameters.numbers) selectionString += numberString;
		if (parameters.symbols) selectionString += symbolString;

		for (let i = 0; i < parameters.characters; i++) {
			let random = Math.floor(Math.random() * selectionString.length);
			tempPassword += selectionString[random];
		}

		setGeneratedPassword(tempPassword);
		generatedPassword.select();
	};

	return (
		<div className='container'>
			<div className='form-container'>
				<form>
					<div>
						<input type='text' value={generatedPassword} ref={passwordRef} />
						<button onClick={copyToClipboard}>
							Copy <AiOutlineCopy />
						</button>
					</div>
					<div>
						<select
							name='characters'
							id='characters'
							className='characters'
							value={parameters.characters}
							onChange={e =>
								setParameters({
									...parameters,
									characters: Number(e.target.value),
								})
							}
						>
							<option value='10'>10</option>
							<option value='11'>11</option>
							<option value='12'>12</option>
							<option value='13'>13</option>
							<option value='14'>14</option>
							<option selected value='15'>
								15
							</option>
							<option value='16'>16</option>
							<option value='17'>17</option>
							<option value='18'>18</option>
							<option value='19'>19</option>
							<option value='20'>20</option>
						</select>
					</div>
					<div>
						<input
							type='checkbox'
							name='letter'
							id='letter'
							value={parameters.letters}
							onClick={() =>
								setParameters({ ...parameters, letters: !parameters.letters })
							}
						/>
						<label htmlFor='letter'>Letters</label>
					</div>
					<div>
						<input
							type='checkbox'
							name='number'
							id='number'
							value={parameters.numbers}
							onClick={() =>
								setParameters({ ...parameters, numbers: !parameters.numbers })
							}
						/>
						<label htmlFor='number'>Numbers</label>
					</div>
					<div>
						<input
							type='checkbox'
							name='symbol'
							id='symbol'
							numbers
							value={parameters.numbers}
							onClick={() =>
								setParameters({ ...parameters, symbols: !parameters.symbols })
							}
						/>
						<label htmlFor='symbol'>Symbols</label>
					</div>
					<input onClick={generatePassword} type='submit' value='Generate' />
				</form>
			</div>
		</div>
	);
};

export default App;
