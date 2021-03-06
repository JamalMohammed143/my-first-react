class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      left: "80px",
      top: "80px",
      isMobile: false
    };
  }
  componentDidMount() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.setState({
      isMobile: isMobile
    });
  }

  FlyingAnimation(event) {
    var mainWidth = window.innerWidth - 100;
    var mainHeight = window.innerHeight - 86;

    var maximumWidth = mainWidth;
    var minimumWidth = 100;

    var maximumHeight = mainHeight;
    var minimumHeight = 100;

    var randomLeft = Math.floor(Math.random() * (maximumWidth - minimumWidth + 1)) + minimumWidth;
    var randomTop = Math.floor(Math.random() * (maximumHeight - minimumHeight + 1)) + minimumHeight;

    // console.log('randomLeft', randomLeft);
    // console.log('randomTop', randomTop);

    // var randomLeft = Math.floor((Math.random() * mainWidth) + 1);
    // var randomTop = Math.floor((Math.random() * mainHeight) + 1);

    var left = randomLeft + "px";
    var top = randomTop + "px";

    this.setState({
      left: left,
      top: top
    });
  }

  render() {
    if (this.state.isMobile) {
      return <section>
        <div className="fly-box mobile" style={{ left: this.state.left, top: this.state.top }} onTouchStart={this.FlyingAnimation.bind(this)}>
          <img src="img/cartoon-fly.png" />
        </div>
      </section>
    } else {
      return <section>
        <div className="fly-box" style={{ left: this.state.left, top: this.state.top }} onMouseMove={this.FlyingAnimation.bind(this)}>
          <img src="img/cartoon-fly.png" />
        </div>
      </section>
    }
  }
}
ReactDOM.render(<Welcome />, document.querySelector('#app'));