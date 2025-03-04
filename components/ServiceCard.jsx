import Image from "next/image";

export const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden">
      <figure>
        <Image
          src={service.image}
          alt={service.title}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
          priority
        />
        <figcaption className="p-4">
          <h3 className="text-sm uppercase text-gray-900 font-semibold">
            {service.title}
          </h3>
          <p className="text-black font-light text-lg">{service.price}</p>
          <p className="text-black font-medium text-md mt-2">{service.description}</p>
        </figcaption>
      </figure>
    </div>
  );
};