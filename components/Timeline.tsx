import TimelineEntry, { ITimelineEntry } from "./TimelineEntry";

interface Props {
    entries: ITimelineEntry[];
}

export default function Timeline(props: Props) {
    return (
        <div style={{ width: '100vw', position: 'relative', display: 'flex', flexDirection: 'column', overflowY: 'auto', flex: '1' }}>
            {/* <div style={{ width: '10px', height: '100px', backgroundColor: '#E3C16F', position: 'absolute', left: '50%' }}></div> */}
            { props.entries.map((entry, i) => (
                <TimelineEntry
                key={i}
                title={entry.title}
                image={entry.image}
                content={entry.content}
                year={entry.year}
                side={i % 2 === 0 ? 0 : 1} />
            )) }
        </div>
    )
}