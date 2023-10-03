import logo from '../images/manga-logo.webp'
import '../styles/Header.css'

function Header() {
    return (
        <header className='header'>
            <h1 className='title'>Manga<span className='reader'>Reader</span></h1>
            <img className='logo' src={logo} alt="logo" width={150} height={80}/>
        </header>
    )
}
export default Header