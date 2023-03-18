export interface ITimelineEntry {
    image: string;
    year: string;
    title: string;
    subtitle?: string;
    content: string;
    side: 0 | 1;
}

export default function TimelineEntry(props: ITimelineEntry) {
    let content;
    if (props.side === 0) {
        content = (
            <>
                <div style={{ flex: '1', justifyContent: 'end', alignItems: 'center', display: 'flex' }}>
                    <h1 style={{ textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9)' }}>{props.year}</h1>
                </div>
                <div style={{ flex: '1', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <h1 style={{ textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9)' }}>{ props.title }</h1>
                    <p style={{ fontFamily: 'Merriweather', width: '60%', fontSize: 'larger', textAlign: 'justify', padding: '1em', borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(15px)' }}>{ props.content }</p>
                </div>
            </>
        );
    } else if (props.side === 1) {
        content = (
            <>
                <div style={{ flex: '1', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                    <h1 style={{ textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9)' }}>{ props.title }</h1>
                    <p style={{ fontFamily: 'Merriweather', width: '60%', fontSize: 'larger', textAlign: 'justify', padding: '1em', borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(15px)' }}>{ props.content }</p>
                </div>
                <div style={{ flex: '1', justifyContent: 'start', alignItems: 'center', display: 'flex' }}>
                    <h1 style={{ textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9)' }}>{props.year}</h1>
                </div>
            </>
        );
    }
    return (
        <div style={{ width: '100%', display: 'flex', gap: '5em', backgroundPosition: '50% 40%', backgroundSize: 'cover', backgroundImage: props.image ? `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.50)), url(${props.image})` : '', color: 'white', padding: '2em' }}>
            { content }
        </div>
    )
}