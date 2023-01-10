import { useState } from "react";
import { useHistory } from "react-router-dom";
import { carService } from "../services/CarService";
import { formFunction } from "../functions/FormFunctions";
import { CarForm } from "../components/CarForm.component";

export const AddCarPage = () => {
  const history = useHistory();
  const [car, setCar] = useState({
    title: "",
    director: "",
    imageURL: "",
    duration: 0,
    releaseDate: new Date(),
    genre: "",
  });

  const handleAddCar = async (e) => {
    e.preventDefault();
    if (
      !car.title ||
      !car.director ||
      !car.imageURL ||
      !car.genre
    ) {
      alert("One or more field is blank.");
      return;
    }
    await carService.add(car);
    history.push("/cars");
  };

  return (
    <CarForm
      car={car}
      isCreateMode={true}
      onChange={setCar}
      handleCar={handleAddCar}
      handlePreviewForm={formFunction.previewForm}
      selectbox={formFunction.generateSelectBox}
    />
  );
};
