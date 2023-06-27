import axios from "axios";
import { IApiResponse } from "../models/IApiResponse";


export const getAllAnimals = async () => {
    let response = await axios.get("https://animals.azurewebsites.net/api/animals");
    return response.data;

    console.log(response.data);
}

export const getAnimalImages = async () => {
    let response = await axios.get("https://animals.azurewebsites.net/api/animals");
    return response.status;
}

export const getAnimalById = async (id: number): Promise<IApiResponse> => {
        let response = await axios.get("https://animals.azurewebsites.net/api/animals/" +id);
        return {animal: response.data, error: ""};
};