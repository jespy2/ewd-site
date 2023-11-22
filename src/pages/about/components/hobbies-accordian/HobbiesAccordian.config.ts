import { Dispatch, SetStateAction } from "react";
import Sword from "../../../../images/pics/sword.jpg"
import Hike from "../../../../images/pics/hike.jpg"
import Ride from "../../../../images/pics/ride.jpg"
import Hammock from "../../../../images/pics/hammock.jpg";

export interface IAccordianItemProps {
  title: string;
  image: string;
  imagetitle: string;
  text: string;
}
 
export interface IAccordianProps { 
	setInfoHidden: Dispatch<SetStateAction<boolean>>;
	openModal: (item: IAccordianItemProps) => void;
}

export const hobbiesAccordianProps: IAccordianItemProps[] = [
  {
    title: 'Martial Arts',
    image: Sword,
    imagetitle: 'sword cut',
    text: "I ran a martial arts school (Dojang) for 17 years.  Martial arts has taught me discipline, patience, and the importance of continuous self-improvement—values that resonate well with the ever-evolving tech landscape. Just as in martial arts, I believe in the power of practice, the importance of refining one's skills, and the need to stay agile in the face of challenges."
  },
  {
    title: 'Motorcycles',
    image: Ride,
    imagetitle: 'riding through Utah',
    text: 'Though I love quick weekend trips into the mountains and moto-camping, my passion is long-distance touring (I will happily talk your ear off about a 6,400 mile trip from Texas to the Alaskan Highway in Canada, and back!). Each epic trip begins with planning, information gathering and coordination with riding partners, and is filled with moments that range from elation to profound uncertainty.  Plans change with the weather and road conditions, so adaptability is essential for a successful trip and a safe return home.  These experiences inform my work as a software engineer.  I thrive when presented with hard challenges, adapt to changing requirements and delight when a completed project exceeds expectations!'
  },
  {
    title: 'Camping',
    image: Hammock,
    imagetitle: 'relaxing in the woods',
    text: "Camping brings me closer to nature and reminds me of the beauty of simplicity. It's a source of inspiration for elegant, minimalist design in software. Just as I appreciate the serenity of a night under the stars, I strive to create clean and intuitive interfaces that make users feel at ease, supported by a backend that is elegant and efficient.  I've often said that the beauty of a well designed UI can be like art, provoking emotion and even aesthetic beauty, but a well-designed backend is like Amish furniture, where the beauty is found in simplicity and functionality.  Camping refreshes my connection to simplicity and beauty, and reminds me of the importance of both in my work."
  },
  {
    title: 'Family',
    image: Hike,
    imagetitle: 'family hike',
    text: 'Of all my hobbies, spending time with my family is the most cherished. We are outdoors when we can.  When inside, we play games, cook, have pun-offs and watch shows/movies together.  Spending time with my family reminds me that life is not just about lines of code but also about the meaningful connections we build. It is a constant reminder to keep the "human" in "human-centered design," ensuring that the technology I create enhances people\'s lives.'
  },
]