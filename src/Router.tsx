import { createBrowserRouter, unstable_HistoryRouter } from "react-router-dom";
import App from "./App";
import { AllAnimals } from "./components/AllAnimals/AllAnimals";
import { Animal } from "./components/Animal/Animal";
import { AnimalDetails } from "./components/AnimalsDetails/AnimalDetails";
import { NotFound } from "./components/NotFound/NotFound";
import { IAnimalThumbnail } from "./models/IAnimalThumbnail";

interface IAnimalImageProps {
    animal?: IAnimalThumbnail;
}

export const router = createBrowserRouter ([

    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <AllAnimals />
            },
            {
                path: "/animal/:id",
                element: <AnimalDetails />,
            }
        ]
    }
]);