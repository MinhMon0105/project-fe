import Component from '../../Core/Component';
import './Artists.scss';
import author1 from '../../Assets/Images/author/author-1.jpg'
import author2 from '../../Assets/Images/author/author-2.jpg'
import author3 from '../../Assets/Images/author/author-3.jpg'
import author4 from '../../Assets/Images/author/author-4.jpg'
import author5 from '../../Assets/Images/author/author-5.jpg'

const listImageAuthor = [author1, author2, author3, author4, author5]

export default class Artists extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return this.html`
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
