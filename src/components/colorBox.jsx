export function ColorBox({ allBox }) {
    return (
        <div style={{
            display: 'flex',
            flexFlow: ' row wrap',
            gap: '2px',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            {allBox.map((box, index) => (<Box name={box.name} color={box.color} key={index} />))}
        </div>
    )
}

function Box({ name, color }) {
    return (
        <div style={{
            width: '50px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color

        }}> {name}
        </div>
    )
}