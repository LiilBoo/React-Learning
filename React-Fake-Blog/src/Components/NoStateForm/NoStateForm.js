import './NoStateForm.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

export function NoStateForm() {


	const dispatcher = useDispatch();

	const handleForm = (event) => {
		event.preventDefault();

		let refOfTheTitle = INPUTS_REF.current[0].value;
		let refOfTheBody = INPUTS_REF.current[1].value;

		const NEW_ARTICLE = {
			title: refOfTheTitle,
			body: refOfTheBody,
		}

		dispatcher({
			type: 'NEWARTICLES',
			payload : NEW_ARTICLE,
		});

		event.target.reset();
	};

	const INPUTS_REF = useRef([]);

	const addedReference = (element) => {
			 if(element && !INPUTS_REF.current.includes(element)){
				 INPUTS_REF.current.push(element);
			 }
	};

	return (
		<>
			<h1 className='form-title'>
				Write an article
			</h1>
			<form
				className='form-container'
				onSubmit={handleForm}>
				<label htmlFor='title'>
					Title
				</label>
				<input
				ref={addedReference}
					type='text'
					id='title'
					placeholder='Enter your name'
				/>
				<label htmlFor='article'>
					Your article
				</label>
				<textarea
				ref={addedReference}
					id='article'
					placeholder='your article'></textarea>
				<button>
					Send the article
				</button>
			</form>
		</>
	);
}
