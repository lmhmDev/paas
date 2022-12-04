import './style.css'

const FavCard = ({url, deleteImage}) => {

    return(
        <div className="fav-card">
            <img src={url} alt="" />
            <div>
                <button onClick={deleteImage}>Remove Favorite</button>
            </div>
        </div>
    )
}

export default FavCard