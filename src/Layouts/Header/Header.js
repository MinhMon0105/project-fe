import Component from "../../Core/Component";
import defaultAvatar from "../../Assets/Images/default_avatar.jpg";
import "./Header.scss"

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            isShowAccount: false,
            isFocusSearch: false,
        };

        document.addEventListener("click", () => {
            this.handleFocusOutInput();
            this.handleHideAccount();
        });

        document.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                this.handleHideAccount();
            }
        });
    }

    // handle Input
    handleFocusOutInput = () => {
        if (this.state.isFocusSearch) {
            this.setState({
                isFocusSearch: false,
            });
        }
    };

    handleFocusInput = (e) => {
        e.stopPropagation();
        if (!this.state.isFocusSearch) {
            this.setState({
                isFocusSearch: true,
            });
        }
    };
    // handle input end

    // handle Toggle Account
    handleToggle = (e) => {
        e.stopPropagation();
        this.setState({
            isShowAccount: !this.state.isShowAccount,
        });
    };

    handleHideAccount = () => {
        if (this.state.isShowAccount) {
            this.setState({
                isShowAccount: false,
            });
        }
    };
    // handle Toggle Account end

    render() {
        const { isFocusSearch, isShowAccount } = this.state

        return this.html `
    <header class="header">
      <div class="row">
        <div class="col-3">
          <div class="header__nav">
            <span>
              <i class="fa-solid fa-angle-left"></i>
            </span>
            <span>
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </div>
        <div class="col-6">
          <nav class="header__menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Library</a></li>
            </ul>
          </nav>
        </div>
        <div class="col-3">
          <div class="header__right">
            <form class ='header__right--search'>
              <div class="input--group ${isFocusSearch && "active"}">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input onfocus="${this.handleFocusInput} type="search" placeholder="Search"></input>
              </div>
            </form>
            <div class ='header__right--account'>
              <span onclick=" ${this.handleToggle}">
                <img src="${defaultAvatar}"></img>
              </span>
              <div class="account ${isShowAccount && "show"}">
                <ul>
                  <li>
                    <a href="">
                      <span><i class="fa-sharp fa-solid fa-gear"></i></span>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span><i class="fa-solid fa-right-to-bracket"></i></span>
                      <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span><i class="fa-brands fa-github"></i></span>
                      <span>GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    `;
    }
}