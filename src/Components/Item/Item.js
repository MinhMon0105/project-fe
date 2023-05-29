import './Item.scss';
import appleMusicItem1 from "../../Assets/Images/Item/apple-music-item-1.jpg"
import appleMusicItem2 from "../../Assets/Images/Item/apple-music-item-2.jpg"
import appleMusicItem3 from "../../Assets/Images/Item/apple-music-item-3.jpg"
import appleMusicItem4 from "../../Assets/Images/Item/apple-music-item-4.jpg"
import appleMusicItem5 from "../../Assets/Images/Item/apple-music-item-5.jpg"
import Component from '../../Core/Component';

const listImage = [appleMusicItem1, appleMusicItem2, appleMusicItem3, appleMusicItem4, appleMusicItem5]

export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            isHover: false
        }

        // document.addEventListener('mouseover', (e) => {
        //   e.preventDefault()
        //   this.handleHoverItem()
        // })
        // document.addEventListener('mouseout', (e) => {
        //   e.preventDefault()
        //   this.handlerOutHoverItem()
        // })
    }

    // handleHoverItem = (e) => {
    //   if (!this.state.isHover) {
    //     this.setState({
    //       isHover: true
    //     })
    //   }
    // }

    // handlerOutHoverItem = (e) => {
    //   if (this.state.isHover) {
    //     this.setState({
    //       isHover: false
    //     })
    //   }
    // }



    render() {
        return this.html `
      <div class="row">
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[0]}">
            </span>
            <div class="Music__item--title">
              <p class="name">Happy Hits</p>
              <p class="author">by Apple Music</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[1]}">
            </span>
            <div class="Music__item--title">
              <p class="name">Happy Hits</p>
              <p class="author">by Apple Music</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[2]}">
            </span>
            <div class="Music__item--title">
              <p class="name">Happy Hits</p>
              <p class="author">by Apple Music</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[3]}">
            </span>
            <div class="Music__item--title">
              <p class="name">Happy Hits</p>
              <p class="author">by Apple Music</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__item">
            <span class="Music__item--image">
              <img src="${listImage[4]}">
            </span>
            <div class="Music__item--title">
              <p class="name">Happy Hits</p>
              <p class="author">by Apple Music</p>
            </div>
          </div>
        </div>
      </div>
  `;
    }
}