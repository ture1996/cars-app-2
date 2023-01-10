import { Link } from "react-router-dom";

export const AppCarsTable = ({ data, handleRedirect, handleDeleteCar }) => {
  return (
    <div>
      <h1>Movies</h1>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Image URL</th>
              <th>Duration</th>
              <th>Release Date</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            {data.map((car) => (
              <tr key={car.id}>
                <td><Link to={`/cars/${car.id}`}>{car.title}</Link></td>
                <td>{car.director}</td>
                <td>{car.imageURL}</td>
                <td>{car.duration} Km/h</td>
                <td>{car.releaseDate}</td>
                <td>{car.genre}</td>
                <td>
                  <button onClick={() => handleRedirect(car.id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};
