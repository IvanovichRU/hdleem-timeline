import Timeline from "../../components/Timeline";

export default function Home() {
	return (
		<div style={{ padding: '1em', fontSize: 'larger', fontFamily: 'Rubik', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', overflowY: 'clip' }}>
			<h1 style={{ color: 'white', fontSize: '50px' }}>Educación en el México Prehispánico</h1>
			<Timeline entries={[
				{
					title: 'Olmecas',
					image: 'https://www.unionjalisco.mx/wp-content/uploads/2021/05/cultura-olmeca-ii-secundaria_1.jpg',
					content: 'La civilización Olmeca surge en la zona costera del golfo de México, con evidencias probando su desarrollo de un sistema de escritura y el uso de las matemáticas en sus construcciones arquitectónicas.',
					year: '2000 A.C. a 200 D.C.',
					side: 0
				},
				{
					title: 'Civilización Zapoteca',
					image: 'https://www.gtush.com/wp-content/uploads/2018/09/Cultura-Zapoteca.jpg',
					content: 'La civilización Zapoteca, situada en Oaxaca, desarrolla un sistema de escritura jeroglífica, así como avances en matemáticas y Astronomía.',
					year: '500 A.C. a 500 D.C',
					side: 0
				},
				{
					title: 'Los Mayas',
					image: 'https://cienciauanl.uanl.mx/wp-content/uploads/2019/10/mayas.png',
					content: 'La civilización Maya clásica alcanza su máximo esplandor en la península de Yucatán y el sur de México, con el desarrollo de un sistema de escritura complejo, matemáticas y astronomia.',
					year: '500 D.C. a 900 D.C. ',
					side: 0
				},
				{
					title: 'Toltecas a Aztecas',
					image: 'https://etnias.mx/wp-content/uploads/2020/01/Econom%C3%ADa-Trabajo-y-Actividades-Toltecas.jpg',
					content: 'La civilización Tolteca surge en el área del bajío y establece una capital en Tula. Son conocidos por su arquitectura impresionante y su rol en el desarrollo de la civilización Azteca.',
					year: '900 D.C. a 1521 D.C. ',
					side: 0
				},
				{
					title: 'El Imperio Azteca',
					image: 'https://www.booksfact.com/images/history/Aztecs.jpg',
					content: 'El pueblo Azteca se desarrolla en México central, con el establecimiento de la ciudad capital Tenochtitlan. La educación en la sociedad azteca se enfoca principalmente en la capacitación de sacerdotes, guerreros y líderes gubernamentales. Los varones atienden el tepochcalli una escuela pública, mientras que las damas son educadas en casa.',
					year: '1325 D.C. a 1521 D.C.',
					side: 0
				},
				{
					title: 'Nezahualcóyotl',
					image: 'https://cdn1.matadornetwork.com/blogs/2/2019/07/shutterstock_1415093777.jpg',
					content: 'El reinado de Nezahualcóyotl, gobernante de Texcoco, ciudad reconocida por su énfasis en la educación y las artes. Nezahualcóyotl establece una escuela destinada solo para hijos de nobleza, enfatiza el desarrollo de la poesía, la música y la literatura.',
					year: '1434 D.C. a 1481 D.C.',
					side: 0
				},
				{
					title: 'La Nueva España',
					image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Aspectos_educativos_de_la_Nueva_espa%C3%B1a.JPG',
					content: 'La llegada del conquistador español Hernán Cortés marca el comienzo del final para las civilizaciones prehispánicas. Los españoles establecieron un sistema de educación enfocado a la conversión de indígenas a la cristiandad y el idioma español. Los sistemas tradicionales son suprimidos y eventualmente desaparecen.',
					year: '1434 D.C. a 1481 D.C.',
					side: 0
				},
			]} />
		</div>
	)
}
