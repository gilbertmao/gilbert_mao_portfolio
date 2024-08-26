import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const Grid = () => {
  // Filter only the tech stack and copy email items
  const filteredItems = gridItems.filter(item => item.id === 3 || item.id === 6);

  return (
    <section id="about">
      <BentoGrid className="w-full py-5">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`${item.className} ${item.id === 3 ? 'md:col-span-3' : 'md:col-span-2'}`}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;