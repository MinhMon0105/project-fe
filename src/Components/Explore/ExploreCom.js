import './ExploreCom.scss';
import pic6 from "../../Assets/Images/playlist/pic-6.jpg"
import pic7 from "../../Assets/Images/playlist/pic-7.jpg"
import pic8 from "../../Assets/Images/playlist/pic-8.jpg"
import pic9 from "../../Assets/Images/playlist/pic-9.jpg"
import pic10 from "../../Assets/Images/playlist/pic-10.jpg"
import Component from '../../Core/Component';

const listImage = [pic6, pic7, pic8, pic9, pic10]

export default class ExploreCom extends Component {
    constructor() {
        super();
        this.state = {
            isHover: false
        }
    }


    render() {
        return this.html `
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