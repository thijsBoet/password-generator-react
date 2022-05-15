import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [parameters, setParameters] = useState({
    characters: 15,
    letters: false,
    numbers: false,
    symbols: false,
  });
  const lettersArray = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
  ];
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '\\', '~', '`'];
  const generatePassword = () => {
    if (!parameters.letters && !parameters.numbers && !parameters.symbols) {
      alert('Please select at least one character type');
      return
    }

    const selectionArray = []; 
    if (parameters.letters) selectionArray.push(lettersArray);
    if (parameters.numbers) selectionArray.push(numbersArray);
    if (parameters.symbols) selectionArray.push(symbolsArray);

    const iterationArray = new Array(parameters.characters)
			.fill(0)
      .map(() => {
        const random = Math.floor(Math.random() * selectionArray.length);
        const random2 = Math.floor(Math.random() * selectionArray[random].length);
        return selectionArray[random][random2];
      });
  }


	return (
		<div className='container'>
			<div className='form-container'>
				<form>
					<h1></h1>
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
							onChange={() =>
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
							onChange={() =>
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
							onChange={() =>
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
