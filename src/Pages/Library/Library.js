import Component from "../../Core/Component";
import "./Library.scss"
import image1 from "../../Assets/Images/Library/yesplaymusic.png"
import image2 from "../../Assets/Images/Library/netease-music.png"

export default class Library extends Component {
  render() {
    return this.html`
    <div class="library">
      <div class="icon">
        <img src="${image1}" alt="anh1">
        <div><i class="fa-solid fa-xmark"></i></div>
        <img src="${image2}" alt="anh2">
      </div>
      <div class="login_style">
        <div class="login__title">
          <h3>Login to Netease</h3>
          <p>Access to all data</p>
        </div>
        <span class="angle">
          <i class="fa-solid fa-angle-right"></i>
        </span>
      </div>
      <div class="login_style">
        <div class="search__title">
          <h3>Search account</h3>
          <p>Only access to public data</p>
        </div>
        <span class="angle">
          <i class="fa-solid fa-angle-right"></i>
        </span>
      </div>
    </div>
    `
  }
}
