import Navigo from "navigo";
import Component from "../../Core/Component";
import Item from "../../Components/Item/Item";
import Artists from "../../Components/ItemArtists/Artists";
import './Home.scss'
import ItemForYou from "../../Components/ItemForYou/ItemForYou";


export default class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const item = this.compile(Item)
        const artists = this.compile(Artists)
        const forYou = this.compile(ItemForYou)
        return this.html `

      <div class = "Home">

        <div class = "AppleMusic">
          <h2>By Apple Music</h2>
          ${item}
        </div>

        <div class = "RecommendedPlaylists">
          <h2> Recommended Playlists</h2>
            <div class = "row_first">${item}</div>
            <div>${item}</div>
        </div>

        <div class = "ForYou">
          <h2>For You</h2>
          <div>${forYou}</div>
        </div>

        <div class = "Artists">
          <h2>Recommended Artists</h2>
            <div class = "Artists__item">
              <div> ${artists}</div>
            </div>
        </div>

        <div class = "LatestAlbums">
          <h2>Latest Albums</h2>
          <div class = "LatestAlbumsItem">
            <div>${item}</div>
          </div>
        </div>

        <div class = 'Charts'>
          <h2>Charts</h2>
          <div>
            ${item}
          </div>
        </div>

      </div>
    `
    }
}