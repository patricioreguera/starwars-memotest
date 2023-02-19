export const IMAGES = [
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824470/2_nihgwk.jpg",
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824470/11_vhqye4.jpg",
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824470/8_hbxnfl.jpg",
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824470/3_qfpmy9.jpg",
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824469/4_zc0vyp.jpg",
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824469/7_rvykjg.jpg",
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824469/6_jvvfos.jpg",
	"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1676824469/1_uhiiwm.jpg",
]
	.flatMap((imagen) => [`a|${imagen}`, `b|${imagen}`])
	.sort(() => Math.random() - 0.5);
