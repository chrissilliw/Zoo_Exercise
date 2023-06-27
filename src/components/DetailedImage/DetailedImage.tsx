import { useEffect, useState } from "react";
import { IAnimalImage } from "../../models/IAnimalImage";
import { IAnimalThumbnail } from "../../models/IAnimalThumbnail";
import { getAllAnimals, getAnimalImages } from "../../services/animalService";

interface IDetailedImageProps {
    animalId?: string;
}

export const DetailedImage = (props: IDetailedImageProps) => {
    const [image, setImage] = useState<IAnimalImage>();
    const [imgSrc, setImgSrc] = useState(props.animalId);

    useEffect ( () => {
        const getData = async () => {
            const animalsFromApi = await getAllAnimals();
            setImage(animalsFromApi);
        }
    });

    //const imageUrl = props.animalId;
    const imageUrl = props.animalId;

    const defaultImg = "http://via.placeholder.com/640x360";

    return(
        <img 
            src={ imgSrc ? imgSrc : imageUrl }
            alt=""
            onError={() => {
              setImgSrc(defaultImg);
            }}
        />
    );
}