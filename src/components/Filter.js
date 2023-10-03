import '../styles/Filter.css'

function Filter() {
    return (
        <section className="filters">
            <select>
                <option name="anciens">Les plus Anciens</option>
                <option name="recent">Les plus Recents</option>
            </select>
            <label>Nombre de chapitre</label>
            <input type="range" name="nbChapter"/>
        </section>
    )
}
export default Filter