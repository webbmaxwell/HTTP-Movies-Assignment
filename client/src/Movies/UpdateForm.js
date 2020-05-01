import React from 'react';

class UpdateForm extends React.Component {
  // const { title, director, metascore, stars } = props.movie;
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: []
      }
    }
  }

  handleChange = e => {
    console.log(this);
    this.setState({
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="update-form">
        <form>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="director" placeholder="director" />
          <input type="text" name="metascore" placeholder="metascore" />
          <input type="text" name="stars" placeholder="stars" />
        </form>
        <button type="submit" onClick={this.handleChange}>Update</button>
      </div>
  )};
};

export default UpdateForm;
