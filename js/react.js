class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      left: "0",
      top: "0"
    };
  }
  componentDidMount() {
    
  }

  FlyingAnimation(event){
    var mainWidth = window.innerWidth - 90;
    var mainHeight = window.innerHeight - 76;

    var randomLeft = Math.floor((Math.random() * mainWidth) + 1);
    var randomTop = Math.floor((Math.random() * mainHeight) + 1);

    var left = randomLeft + "px";
    var top = randomTop + "px";

    this.setState({
      left: left,
      top: top
    });
  }

  render() {
    return <section>
              <div className="fly-box" style={{left: this.state.left, top: this.state.top}} onMouseEnter={this.FlyingAnimation.bind(this)}>
                <img src="img/cartoon-fly.png" />
              </div>
        </section>
  }
}
ReactDOM.render(<Welcome/> , document.querySelector('#app'));