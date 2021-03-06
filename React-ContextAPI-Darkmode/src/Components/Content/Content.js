import './Content.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Contexts';
import { ToggleButton } from '../ToggleButton';

export function Content() {
	const { theme } = useContext(
		ThemeContext
	);

	return (
		<>
			<div className='container'>
				<ToggleButton />
				<h1>
					Let me tell you the story of
					Darth Plagueis
				</h1>
				<p className='content-txt'>
					- I'm sure it's quite a
					mystery as to where you are
					and who I am?
					<br />
					- As to where I am... I was
					admittedly lost for a moment,
					between Charing Cross and
					Holborn, but I was saved by
					the bread shop on Southford
					Hill. The only baker to use
					the certain French glaze on
					their loaves a Brittany sage.
					after that the carriage fork
					left and right until a
					tell-tale bump at the Fleet
					conduit. And as to who you
					are? that took every ounce of
					my not inconsiderable
					experience. The letters on
					your desk were addressed to a
					Sir Thomas Rodrum. Lord Chief
					Justice. That would be the
					official title Who you really
					are... is of course another
					matter entirely. Judging by
					the sacred ox on your ring.
					you're the secret head of the
					Temple of the Four Orders in
					who's headquarters we now sit.
					Located, Northwest corner of
					St. James square I think.
					That's the mystery, the only
					mystery is to why you bothered
					to blind fold me at all.
					<br />- Yes... well, standard
					procedure I suppose. I dare
					say we have the right man,
					gentlemen.
				</p>
				<p>
					- I'm Ambassador Standish of
					America and Lord Coward, the
					home secretary. I suppose you
					already have some notion as to
					the practices of our order.
					<br />
					- Yes. They are practically
					interesting. <br />
					- Be as sceptical as you like.
					but our secret system have
					steered the world for the
					greater good for centuries.
					There danger is they can also
					be used for more nefarious
					purposes. What some call the
					dark arts or practical magic.
					We know you don't believe in
					magic Mr. Holmes We don't
					expect you to share our faith
					merely our fears. <br />
					- fear is the more infectious
					condition. In this instance.
					fear of your own child.
					Blackwood is your son You have
					the same irises, a rare dark
					green, the diamond shaped
					hazel flex together with
					identical outer ears or
					pinner, which are only past
					down through direct blood line
					which makes by necessity
					either brothers or in this
					case, more likely father and
					son. <br />- Very few people
					are privy to that information.
					And we'd want to keep it that
					way. He was conceived during
					one of our rituals. His mother
					wasn't my wife. But she shared
					our beliefs. She was a
					powerful practitioner. though
					not enough to survive giving
					birth to him. Death followed
					him wherever he went.
				</p>
				<p>
					- Those five girls were not
					the first to be butchered.{' '}
					<br />
					He killed many more using them
					to enhance his powers.
					<br />
					No one could prove anything of
					course, but we all knew.
					<br />
					The boy was a curse.
					<br />
					We'd done our best to stop him
					ourselves, but its not enough.
					<br />
					His power grows daily.
					<br />
					His resurrection is evidence
					of that.
					<br />
					But what he does next will be
					far more dangerous.
					<br />
					The secret lies in the book of
					spells. This is the source of
					his power.
					<br />
					His going to raise a force
					that will alter the very
					course of the world.
					<br />
					- I want you to find him and
					stop him before he does.
					<br />
					- We'll give you any
					assistance that we can.
					<br />
					- As home secretary, I have a
					considerable influence over
					the police.
					<br />
					- Oh, yes - So...
					<br />
					Name your price?
					<br />
					- Well, of great benefit to
					being a consulting detective
					is that I can pick and choose
					my clients. Consider it done,
					I'll stop him. But not for
					you. And certainly not for a
					price. I do have a parting
					query Sir Thomas.
					<br />
					- What is that?
					<br />
					- If the rest of his family's
					dead... how long do you expect
					to survive?
					<br />
					Food for thought.
				</p>
			</div>
		</>
	);
}
