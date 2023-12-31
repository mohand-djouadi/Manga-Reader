import { Mangas } from "../datas/Mangas"
import MangaItem from "./MangaItem"
import '../styles/MangaList.css'

function MangaList() {
    return (
        <main className="manga-list">
        {Mangas.map((manga) => (
            <div key={manga.id} className="manga-item">
            <MangaItem
                cover={manga.cover}
                titre={manga.titre}
                auteur={manga.auteur}
                description={manga.description}
            /> 
            </div>
        ))}
        </main>
    ) 
}
export default MangaList