class Flashable extends React.Component {
  constructor() {
    super()
    this.state = {flash: ''}
  }

  animationEnd(evt) {
    if (evt.animationName === 'flash') {
      this.resetFlash();
    }
  }

  flash() {
    this.setState({flash: 'flash'})
  }

  resetFlash() {
    this.setState({flash: ''})
  }

  render () {
    return (
      <div className={this.state.flash}
        onAnimationEnd={this.animationEnd.bind(this)}>
        { this.props.children }
      </div>
    );
  }
}
