import './Modal.css';
import { useState } from 'react';

export function Modal() {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<>
			<button onClick={toggleModal} className='btn-modal'>
				Open
			</button>
			{modal && (
				<div className='overlay'>
					<div className='modal'>
						<div className='modal-content'>
							<h2>Hello Modal</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem corporis recusandae officia earum culpa
								necessitatibus natus sunt libero, sapiente architecto.
							</p>
							<button onClick={toggleModal} className='close-modal'>
								CLOSE
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
