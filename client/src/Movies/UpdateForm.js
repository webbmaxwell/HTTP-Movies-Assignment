import React from 'react';

const UpdateForm = props => {
  // const { title, director, metascore, stars } = props.movie;
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
