import Sword from "../../../images/pics/sword.jpg"
import Hike from "../../../images/pics/hike.jpg"
import Ride from "../../../images/pics/ride.jpg"
import Hammock from "../../../images/pics/hammock.jpg";

interface IHobbiesAccordianProps {
  title: string;
  image: string;
  imagetitle: string;
  text: string;
 }

export const hobbiesAccordianProps: IHobbiesAccordianProps[] = [
  {
    title: 'Former Martial Arts School Owner',
    image: Sword,
    imagetitle: 'sword cut',
    text: 'Martial arts has taught me discipline, patience, and the importance of continuous self-improvement—values that resonate well with the ever-evolving tech landscape. Just as in martial arts, I believe in the power of practice, the importance of refining one"s skills, and the need to stay agile in the face of challenges.'
  },
  {
    title: 'Motorcycles',
    image: Ride,
    imagetitle: 'riding through Utah',
    text: 'Motorcycles have taught me the importance of balance, both on the road and in life. They"ve also taught me the importance of being present and aware of my surroundings. I apply these lessons to my work as a software engineer, where I strive to create a balanced, intuitive experience for users.'
  },
  {
    title: 'Camping',
    image: Hammock,
    imagetitle: 'relaxing in the woods',
    text: 'Camping brings me closer to nature and reminds me of the beauty of simplicity. It"s a source of inspiration for elegant, minimalist design in software. Just as I appreciate the serenity of a night under the stars, I strive to create clean and intuitive interfaces that make users feel at ease.'
  },
  {
    title: 'Family',
    image: Hike,
    imagetitle: 'family hike',
    text: 'Of all my hobbies, spending time with my family is the most cherished. It reminds me that life is not just about lines of code but also about the meaningful connections we build. It"s a constant reminder to keep the "human" in "human-centered design," ensuring that the technology I create enhances people"s lives.'
  },
]