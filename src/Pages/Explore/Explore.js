import ExploreCom from "../../Components/Explore/ExploreCom";
import Component from "../../Core/Component";
import "./Explore.scss"

export default class Explore extends Component {
  render() {
    const item = this.compile(ExploreCom)
    return this.html`
    <div class="container">
    <h2>Explore</h2>
      <div class="row">
        <div title="">
          <button> 全部 </button>
          <button> 推荐歌单 </button>
          <button> 精品歌单 </button>
          <button> 官方 </button>
          <button> 排行榜 </button>
          <button> 欧美 </button>
          <button> 电子 </button>
          <button> 说唱 </button>
          <button> 全部 </button>
          <button> ACG </button>
          <button> ... </button>
        </div>
      </div>
      <div class = "box_item">
        <div class = "item">${item}</div>
        <div class = "item">${item}</div>
        <div class = "item">${item}</div>
        <div class = "item">${item}</div>
      </div>

      <div class = "button">
        <button>Load More</button>
      </div>
    </div>
    `
  }
}
