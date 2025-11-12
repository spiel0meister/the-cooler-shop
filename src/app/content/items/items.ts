import { Image } from "../../models/image.model";

interface Item {
    name: string;
    priceString: string;
    rating: string;
    image: Image;
}

export const PLACEHOLDER: Image = {
    uri: "../../../../assets/Placeholder.png",
    alt: "placeholder",
};

export const items: Item[] =  [
    { name: "Wireless Noise-Canceling Headphones", priceString: "249.99", rating: "★★★★⯪", image: PLACEHOLDER },
    { name: "Smart Fitness Tracker", priceString: "129.50", rating: "★★★★☆", image: PLACEHOLDER },
    { name: "Protable Espresso Machine", priceString: "89.99", rating: "★★★★⯪", image: PLACEHOLDER },
    { name: "Bluetooth Speaker", priceString: "79.75", rating: "★★★⯪☆", image: PLACEHOLDER },
    { name: "Ergonomic Desk Chair", priceString: "299.00", rating: "★★★★☆", image: PLACEHOLDER },
    { name: "Wireless Charging Pad", priceString: "45.50", rating: "★★★★☆", image: PLACEHOLDER },
    { name: "Smart Home Security Camera", priceString: "179.99", rating: "★★★★☆", image: PLACEHOLDER },
    { name: "Noise-Canceling Earbuds", priceString: "199.50", rating: "★★★★☆", image: PLACEHOLDER },
    { name: "Compact Air Purifier", priceString: "119.75", rating: "★★★⯪☆", image: PLACEHOLDER },
    { name: "Smart Robot Vacuum Cleaner", priceString: "299.99", rating: "★★★★☆", image: PLACEHOLDER },
    { name: "Portable Power Station", priceString: "249.50", rating: "★★★★⯪", image: PLACEHOLDER },
    { name: "Smart Indoor Garden", priceString: "159.75", rating: "★★★⯪☆", image: PLACEHOLDER },
];