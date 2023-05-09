
export default function Footer() {
    
    const year = new Date().getFullYear();

    return (
        <Footer>
        <p>Copyright @ {year}</p>
        </Footer>
    )
}