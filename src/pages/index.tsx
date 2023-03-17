import Timeline from "../../components/Timeline";

export default function Home() {
	return (
		<div style={{ padding: '1em', fontSize: 'larger', fontFamily: 'Rubik', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h1>Historia de la Educación en México</h1>
			<Timeline />
		</div>
	)
}
