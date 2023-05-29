import Component from '../../Core/Component';
import './Artists.scss';
import pic6 from "../../Assets/Images/playlist/pic-6.jpg"
import pic7 from "../../Assets/Images/playlist/pic-7.jpg"
import pic8 from "../../Assets/Images/playlist/pic-8.jpg"
import pic9 from "../../Assets/Images/playlist/pic-9.jpg"
import pic10 from "../../Assets/Images/playlist/pic-10.jpg"

const listImageAuthor = [pic6, pic7, pic8, pic9, pic10]

export default class Artists extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return this.html `
    <div class="row">
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${listImageAuthor[0]}">
            </span>
            <div class="Music__Author--title">
              <p class="author">陈奕迅</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${listImageAuthor[1]}">
            </span>
            <div class="Music__Author--title">
              <p class="author">陈奕迅</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${listImageAuthor[2]}">
            </span>
            <div class="Music__Author--title">
              <p class="author">陈奕迅</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${listImageAuthor[3]}">
            </span>
            <div class="Music__Author--title">
              <p class="author">陈奕迅</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${listImageAuthor[4]}">
            </span>
            <div class="Music__Author--title">
              <p class="author">陈奕迅</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    `
    }
}