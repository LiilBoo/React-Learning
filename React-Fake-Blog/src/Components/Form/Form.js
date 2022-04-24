import './Form.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export function Form(properties) {
	const [article, setArticle] =
		useState({
			title: '',
			body: '',
		});

	const dispatcher = useDispatch();

	const handleForm = (event) => {
		event.preventDefault();

		dispatcher({
			type: 'NEWARTICLES',
			payload: article,
		});

		setArticle({
			title: '',
			body: '',
		});
	};

	const handleInputs = (event) => {
		let actualText = event.target;

		if (
			actualText.classList.contains(
				'input-title'
			)
		) {
			const newObjectState = {
				...article,
				title: actualText.value,
			};
			setArticle(newObjectState);
		} else if (
			actualText.classList.contains(
				'input-body'
			)
		) {
			const newObjectState = {
				...article,
				body: actualText.value,
			};
			setArticle(newObjectState);
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
					type='text'
					id='title'
					className='input-title'
					placeholder='Enter your name'
					value={article.title}
					onChange={handleInputs}
				/>
				<label htmlFor='article'>
					Your article
				</label>
				<textarea
					id='article'
					className='input-body'
					placeholder='your article'
					value={article.body}
					onChange={
						handleInputs
					}></textarea>
				<button>
					Send the article
				</button>
			</form>
		</>
	);
}
