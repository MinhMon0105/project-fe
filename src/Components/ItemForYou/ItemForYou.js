import Component from '../../Core/Component';
import "./ItemForYou.scss";
import image1 from "../../Assets/Images/ForYou/image1.jpg";
import image2 from "../../Assets/Images/ForYou/image2.jpg";

const ForYouImage = [image1, image2]

export default class ItemForYou extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return this.html`
    <div class="itemForYou container">
        <div class="itemFirst">
          <img src="${ForYouImage[0]}">
          <div class="title">
            <div><span>每 日</span></div>
            <div><span>推 荐</span></div>
          </div>
          <div class="button">
            <span><i class="fa-solid fa-play"></i></span>
          </div>
        </div>

        <div class="itemSecond">
          <div class="image">
            <img src="${ForYouImage[1]}" alt="">
          </div>
          <div class="content">
            <div class="title">
              <div><span class = "textFirst">每 日</span></div>
              <div><span class = "textSecond">推 荐</span></div>
            </div>
            <div class="control">
              <div class="button">
                <span><i class="fa-solid fa-thumbs-down"></i></span>
                <span><i class="fa-solid fa-play"></i></span>
                <span><i class="fa-solid fa-forward-step"></i></span>
              </div>
              <div class="radio">
                <span> <i class="fa-solid fa-radio"></i> 私人FM</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    `
  }
}
