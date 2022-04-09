import {useState, useEffect} from "react";

function App() {
	const [dataImg, setdataImg] = useState();

	useEffect(() => {
		console.log(`Rendering`);

		let catData;

		async function getCats() {
			const response = await fetch(
				"https://api.thecatapi.com/v1/images/search"
			);

			const catData = await response.json();

			setdataImg(catData[0].url);
		}

		getCats();
	}, []);

	return (
		<div className="App">
			{dataImg && <img src={dataImg} style={{width: "500px"}}></img>}
		</div>
	);
}

export default App;
