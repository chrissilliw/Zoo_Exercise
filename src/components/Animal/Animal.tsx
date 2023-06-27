import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalThumbnail } from "../../models/IAnimalThumbnail";
import { getAnimalById } from "../../services/animalService";
import { Image } from "../Image/Image";

interface IAnimalProps {
    animal: IAnimalThumbnail;
}

export const Animal = (props: IAnimalProps) => {
    const navigate = useNavigate();

    const showDeailsClick = () => {
        navigate(`/animal/${props.animal.id}`);
    }


    return(
        <div className="animalContainer">
            <h3>{props.animal.name}</h3>
            {/* <img src={props.animal.imageUrl} alt="" /> */}
            <Image animal={props.animal}></Image>
            <p>{props.animal.shortDescription}</p>
            <button onClick={showDeailsClick}>Se mer</button>
        </div>
    );
}