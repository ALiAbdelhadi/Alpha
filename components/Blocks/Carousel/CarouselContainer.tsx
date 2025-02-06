import { CarouselsData } from '@/app/constant';
import { Card, Carousel } from './Carousel';

const CarouselContainer = () => {
   const cards = CarouselsData.map((card, index) => (
      <Card key={card.src} card={card} index={index} />
   ));
   return (
      <Carousel items={cards} />
   )
}

export default CarouselContainer