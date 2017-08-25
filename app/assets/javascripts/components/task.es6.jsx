class Task extends React.Component {
  render () {
    return (
      <div>
        <p>
          <strong>Name:</strong>
          { this.props.task.name }
        </p>
      </div>
    );
  }
}

Task.propTypes = {
  task: React.PropTypes.object
};
