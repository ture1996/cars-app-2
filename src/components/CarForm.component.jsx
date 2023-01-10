export function CarForm({
  onChange,
  handleCar,
  car,
  selectbox,
  handlePreviewForm,
  isCreateMode
}) {
  return (
    <div>
      <h1>{isCreateMode ? "Add Car" : "Edit Car" }</h1>
      <form onSubmit={handleCar}>
        <label>Title:</label>
        <input
          type="text"
          value={car.title}
          required
          minLength="2"
          onChange={(e) => onChange({ ...car, title: e.target.value })}
        ></input>
        <br />
        <label >Director:</label>
        <input
          type="text"
          value={car.director}
          required
          minLength="2"
          onChange={(e) => onChange({ ...car, director: e.target.value })}
        ></input>
        <br />
        <label >Image URL:</label>
        <input
          type="text"
          required
          value={car.imageURL}
          onChange={(e) => onChange({ ...car, imageURL: e.target.value })}
        />
        <br />
        <label>Duration:</label>
        <input
          type="number"
          value={car.duration}
          onChange={(e) => onChange({ ...car, duration: e.target.value })}
        ></input>

        <br />
        <label>Release date:</label>
        <input
          type="date"
          value={car.releaseDate}
          onChange={(e) => onChange({ ...car, releaseDate: e.target.value})}
        ></input>
        <br />

        <label>Genre</label>
        <input
          type="text"
          value={car.genre}
          required
          onChange={(e) => onChange({ ...car, genre: e.target.value })}
        ></input>
        <br />
        
        <br />
        <br />
        <button type="submit">
          {isCreateMode ? "Add Car" : "Edit Car" }
        </button>
      </form>
      <br />
      <button
        onClick={() =>
          onChange({
            brand: "",
            model: "",
            year: 2022,
            maxSpeed: 0,
            isAutomatic: false,
            engine: "",
            numberOfDoors: 0,
          })
        }
      >
        Reset
      </button>
      <button onClick={() => handlePreviewForm(car)}>Preview</button>
    </div>
  );
}
