import { useState } from 'react';
import './Tabs.css';

export function Tabs() {
	const [toggleState, setToggleState] =
		useState(1);

	const tabSwitcherToIndex = (
		index
	) => {
		setToggleState(index);
	};

	const verifyActiveIndexTab = (
		val
	) => {
		return toggleState === val
			? 'tabs active-tabs'
			: 'tabs';
	};

	const verifyActiveIndexContent = (
		val
	) => {
		return toggleState === val
			? 'tab-content active-content'
			: 'tab-content';
	};

	return (
		<section className='container'>
			<div className='tabs-block'>
				<button
					className={verifyActiveIndexTab(
						1
					)}
					onClick={() =>
						tabSwitcherToIndex(1)
					}>
					Tab1
				</button>
				<button
					className={verifyActiveIndexTab(
						2
					)}
					onClick={() =>
						tabSwitcherToIndex(2)
					}>
					Tab2
				</button>
				<button
					className={verifyActiveIndexTab(
						3
					)}
					onClick={() =>
						tabSwitcherToIndex(3)
					}>
					Tab3
				</button>
			</div>
			<div className='tabs-block-content'>
				<div className={verifyActiveIndexContent(
						1
					)}>
					<h2>Content 1</h2>
					<hr />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, hic architecto ab dignissimos saepe voluptatem cupiditate facere eligendi quod libero. Ab totam deleniti amet voluptatibus ipsa cumque adipisci sit at recusandae quae ut eaque officia tenetur perferendis sapiente libero temporibus harum error, odit, dolorum perspiciatis in laborum repudiandae quo. Nisi.</p>
				</div>
				<div className={verifyActiveIndexContent(
						2
					)}>
					<h2>Content 2</h2>
					<hr />
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem harum aliquam ullam optio error. Odio numquam dolorem repellendus, explicabo veritatis sapiente quidem assumenda exercitationem eius.</p>
				</div>
				<div className={verifyActiveIndexContent(
						3
					)}>
					<h2>Content 3</h2>
					<hr />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sapiente?</p>
				</div>
			</div>
		</section>
	);
}
