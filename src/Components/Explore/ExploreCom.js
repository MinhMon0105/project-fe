import './ExploreCom.scss';
import appleMusicItem1 from "../../Assets/Images/Item/apple-music-item-1.jpg"
import appleMusicItem2 from "../../Assets/Images/Item/apple-music-item-2.jpg"
import appleMusicItem3 from "../../Assets/Images/Item/apple-music-item-3.jpg"
import appleMusicItem4 from "../../Assets/Images/Item/apple-music-item-4.jpg"
import appleMusicItem5 from "../../Assets/Images/Item/apple-music-item-5.jpg"
import Component from '../../Core/Component';

const listImage = [appleMusicItem1, appleMusicItem2, appleMusicItem3, appleMusicItem4, appleMusicItem5]

export default class ExploreCom extends Component {
  constructor() {
    super();
    this.state = {
      isHover: false
    }
  }


  render() {
    return this.html`
      <div class="row">
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[0]}">
            </span>
            <div class="Music__item--title">
              <span><i class="fa-solid fa-play"></i>57.9K</span>
              <p class="name">助眠辑 | 自然音，伴灵动乐符萦绕耳畔</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[1]}">
            </span>
            <div class="Music__item--title">
              <span><i class="fa-solid fa-play"></i>57.9K</span>
              <p class="name">助眠辑 </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[2]}">
            </span>
            <div class="Music__item--title">
              <span><i class="fa-solid fa-play"></i>57.9K</span>
              <p class="name">伴灵动乐符萦绕耳畔</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[3]}">
            </span>
            <div class="Music__item--title">
              <span><i class="fa-solid fa-play"></i>57.9K</span>
              <p class="name"> 自然</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[4]}">
            </span>
            <div class="Music__item--title">
              <span><i class="fa-solid fa-play"></i>57.9K</span>
              <p class="name">自然音，伴灵动乐符萦绕耳畔</p>
            </div>
          </div>
        </div>
      </div>
  `;
  }
}
