import React, {Fragment} from "react"
import '../styles/MangaItem.css'

function MangaItem({cover,titre,auteur,description}) {
    return (
        <React.Fragment>
            <img className="manga-img-cover" src={cover} alt={titre}/>
            <h2 className="manga-title">{titre}</h2>
            <h3 className="manga-auteur">{auteur}</h3>
            <p className="manga-desc">{description}</p>
        </React.Fragment>
    )
}
export default MangaItem