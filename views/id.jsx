var React = require('react');
class Id extends React.Component {
  render() {
    let editLink = "/artists/" + String(this.props.artist[0].id) + "/edit";
    return (
      <html>
      <head>
        </head>
        <body>
          <div>
            <img src={this.props.artist[0].photo_url}></img>
          </div>
          <div>
            <div>
              <p>Artist name: { this.props.artist[0].name }</p>
              <p>Nationality: { this.props.artist[0].nationality}</p>
              <a href={editLink}>Edit Artist Details</a>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Id;