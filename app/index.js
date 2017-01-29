var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    console.log(this.props);
    return (
      <div> Hello {this.props.name} </div>
    )
  }
});

ReactDom.render(
  <HelloWorld name="Jayce" data={29}/>,
  document.getElementById('app')
);
