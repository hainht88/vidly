import React from "react";

const GenreList = props => {
  const renderActive = genre =>
    props.selectedGenre.toLowerCase() === genre.toLowerCase() && "active";

  return (
    <div className="col-2">
      <ul className="list-group">
        {props.genres.map(genre => (
          <li
            key={genre._id}
            className={`list-group-item list-group-item-action ${renderActive(
              genre.name
            )}`}
            onClick={() => props.onChange(genre.name)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
