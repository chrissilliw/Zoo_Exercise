import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalThumbnail } from "../../models/IAnimalThumbnail";
import { getAnimalById } from "../../services/animalService";
import { DetailedImage } from "../DetailedImage/DetailedImage";
import { Image } from "../Image/Image";
import './AnimalDetails.scss';

interface IAnimalImageProps {
    animal?: IAnimalThumbnail;
}

export const AnimalDetails = (props: IAnimalImageProps) => {
    const [animal, setAnimal] = useState<IAnimal>();
    const [isFed, setIsFed] = useState(false);

    const { id } = useParams();

    useEffect( () => {
        console.log('isFed: ', isFed);
        getAnimalId(Number(id));

    }, [isFed])
    
    const getAnimalId = (id: number) => {
        const data = localStorage.getItem('data');
        if(data){
            const object = JSON.parse(data) ;
           setAnimal(object[id-1]);
        } 

    }

    const getTimeStamp = () => {
        let timestamp = Date.now();
        let dateFormat = new Date(timestamp);
       return (
            dateFormat.getFullYear()+"-" +
            (dateFormat.getMonth()+1)+"-"+
            dateFormat.getDate()+" "+
            dateFormat.getHours()+":"+
            dateFormat.getMinutes()+":"+
            dateFormat.getSeconds()
        );
    }

    const feedAnimal = () => {
        getTimeStamp();
        updateFedStatus();
    }

    const updateFedStatus = () => {
        setIsFed(true);
        //const data = localStorage.setItem("fedStatus", animal.isFed=test);
        const data = localStorage.getItem('data');
    }

    return(
        <div className="animal-container">
            <h3>{animal?.name}</h3>
            <h4>{animal?.latinName}</h4>
            {/* <Image animal={props.animal}></Image> */}
            <DetailedImage animalId={animal?.imageUrl}></DetailedImage>
            <p>{animal?.longDescription}</p>
            <p>{animal?.yearOfBirth}</p>
            { isFed ? <button className="isClicked">{animal?.name} är Matad</button> : <button onClick={feedAnimal}>Mata {animal?.name}</button>}
            { isFed ? <p>{getTimeStamp()}</p> : <></> }
        </div>
    );
}