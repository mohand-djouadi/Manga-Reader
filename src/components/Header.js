import logo from '../images/manga-logo.webp'

function Header() {
    return (
        <div className='header'>
            <h1 className='title'>Manga<span className='reader'>Reader</span></h1>
            <img className='logo' src={logo} alt="logo" width={150} height={80}/>
        </div>
    )
}
export default Header