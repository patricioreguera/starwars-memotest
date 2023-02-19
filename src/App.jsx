import { useState, useEffect } from "react";
import "./App.css";
import { IMAGES } from "./IMAGES";

function App() {
	const [guessed, setGuessed] = useState([]);
	const [selected, setSelected] = useState([]);
	const [images, setImages] = useState(IMAGES);

	useEffect(() => {
		if (selected.length === 2) {
			if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
				setGuessed((guessed) => guessed.concat(selected));
			}
			setTimeout(() => {
				setSelected([]);
			}, 700);
		}
	}, [selected]);

	useEffect(() => {
		setImages(IMAGES);
	}, []);

	useEffect(() => {
		if (guessed.length === images.length) {
			setTimeout(() => {
				alert("You Win");
				setGuessed([]);
				setImages(IMAGES.sort(() => Math.random() - 0.5));
			}, 500);
		}
	}, [guessed]);

	return (
		<div className="App">
			<div className="title-container">
				<img
					className="logo"
					src="https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676833006/logo_mebswo.png"
					alt="logo"
				/>
				<p>
					Personajes encontrados : {guessed.length / 2} de {images.length / 2}
				</p>
			</div>

			<div className="cards-container">
				{images.map((imagen) => {
					const [, url] = imagen.split("|");
					return (
						<div
							key={imagen}
							onClick={() =>
								selected.length < 2 &&
								!selected.includes(imagen) &&
								setSelected((selected) => selected.concat(imagen))
							}
						>
							{selected.includes(imagen) || guessed.includes(imagen) ? (
								<img src={url} alt="icon" draggable="false" className="card" />
							) : (
								<img
									className="card"
									draggable="false"
									src="https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824470/default_id79pr.jpg"
									alt="default image"
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
