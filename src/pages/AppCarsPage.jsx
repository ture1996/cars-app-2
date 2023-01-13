import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { carService } from "../services/CarService";
import { AppCarsTable } from "../components/AppCarsTable.component";

export const AppCarsPage = () => {
  const history = useHistory();
  const [cars, setCars] = useState([]);

  const handleGetCars = async () => {
    console.log("test");
    const { data } = await carService.getAll();
    setCars(data);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  const redirect = (id) => {
    history.push(`/edit/${id}`);
  };

  const deleteCar = async (id) => {
    await carService.delete(Number(id));
    setCars(cars.filter((car) => id !== car.id));
  };

  return (
    <AppCarsTable
      data={cars}
      handleRedirect={redirect}
      handleDeleteCar={deleteCar}
    />
  );
};
