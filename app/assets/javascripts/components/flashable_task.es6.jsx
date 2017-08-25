class FlashableTask extends React.Component {
  onClick() {
    this.flashable.flash()
  }

  render () {
    return (
      <div onClick={this.onClick.bind(this)}>
        <Flashable ref={(ref) => this.flashable = ref}>
          <Task task={this.props.task } />
        </Flashable>
      </div>
    );
  }
}

FlashableTask.propTypes = {
  task: React.PropTypes.object
};
