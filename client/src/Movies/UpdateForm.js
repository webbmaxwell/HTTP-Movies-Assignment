import React from 'react';

class UpdateForm extends React.Component {
  // const { title, director, metascore, stars } = props.movie;
  constructor(props) {
    super(props);
    this.state = {
      movieQuote: {
        
      }
    }
  }
  return (
    <form>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="director" placeholder="director" />
      <input type="text" name="metascore" placeholder="metascore" />
      <input type="text" name="stars" placeholder="stars" />
    </form>
  )
}

export default UpdateForm;
