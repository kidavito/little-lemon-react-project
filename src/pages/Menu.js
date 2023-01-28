export default function Menu() {
    const style = {
        color: 'red',
    }
    const item = [10]
    const items = [10, 20, 30]

    return (
        <>
            <h1 style={style}>This is "Menu" page {item*10}.</h1>
            <h1 style={style}>This is "Menu" page {items*10}.</h1>
        </>
    );
}