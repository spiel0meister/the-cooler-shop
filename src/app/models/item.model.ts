import { Image } from "../models/image.model";

export interface Item {
    name: string;
    priceString: string;
    rating: string;
    image: Image;
}

