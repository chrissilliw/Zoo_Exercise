import { useEffect, useState } from "react";
import { IAnimalImage } from "../../models/IAnimalImage";
import { IAnimalThumbnail } from "../../models/IAnimalThumbnail";
import { getAllAnimals, getAnimalImages } from "../../services/animalService";

interface IAnimalImageProps {
    animal?: IAnimalThumbnail;
}

export const Image = (props: IAnimalImageProps) => {
    const [image, setImage] = useState<IAnimalImage>();
    const [imgSrc, setImgSrc] = useState(props.animal?.imageUrl);

    useEffect ( () => {
        const getData = async () => {
            const animalsFromApi = await getAllAnimals();
            setImage(animalsFromApi);
        }
    });

    const getImageResponseStatus = async () => {
        const animalImageStatus = await getAnimalImages();
        return animalImageStatus;
    }

    //const imageUrl = props.animalId;
    const imageUrl = props.animal?.imageUrl;

    const defaultImg = "http://via.placeholder.com/640x360";

    return(
        <>
        <img 
            src={ imgSrc ? imgSrc : defaultImg}
            alt=""
            onError={() => {
                setImgSrc(defaultImg);
            }}
        />
        </>
    );
}