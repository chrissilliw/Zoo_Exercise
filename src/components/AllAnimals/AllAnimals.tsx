import './AllAnimals.scss';
import { SyntheticEvent, useEffect, useState } from "react";
import { IAnimalThumbnail } from "../../models/IAnimalThumbnail";
import { getAllAnimals } from "../../services/animalService";
import { Animal } from '../Animal/Animal';

const defaultImageHandler = (e:SyntheticEvent) => {
    require("../../images/defaultImage.jpg");
}//require("../../images/defaultImage.jpg");


export const AllAnimals = () => {
    const [animals, setAnimals] = useState<IAnimalThumbnail[]>([]);
    const [data, setData] = useState([]);

    useEffect( () => {
        const getData = async () => {
            const animalsFromApi =  await getAllAnimals();
            setAnimals(animalsFromApi);
            localStorage.setItem('data', JSON.stringify(animalsFromApi));
            uploadDataFromLocalStorage();
        };

        const uploadDataFromLocalStorage = () => {
            const data = localStorage.getItem('data');
            const d = data !== null ? JSON.parse(data) : [];
            setAnimals(d);
        }

        getData();
    }, []);

    let animalsHtml = animals.map( (animal) => {
        return(

            <Animal animal={animal} key={animal.id}></Animal>
        );
    })
    return(
        <div className="AllAnimalWrapper">
            <h1>Alla djur</h1>
            <div className="animal">{animalsHtml}</div>
        </div>
    );
}