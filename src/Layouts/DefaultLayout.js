import Component from "../Core/Component";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navigo from "navigo";
import { publicRoute } from "../Routes/publicRoute";
import { protectedRoute } from "../Routes/protectedRoute";
import { Error404 } from "../Errors/Error404";

export default class DefaultLayout extends Component {
  render() {
    const router = new Navigo("/");

    let page = "";

    if (Object.keys(publicRoute).length) {
      Object.keys(publicRoute).forEach((path) => {
        router.on(path, (params) => {
          page += this.compile(publicRoute[path], params);
        });
      });
    }

    router.resolve();

    const header = this.compile(Header);
    const footer = this.compile(Footer);

    return this.html`
    <div class = 'container'>
      ${header}
      ${page}
      ${footer}
    </div>
    `;
  }
}
