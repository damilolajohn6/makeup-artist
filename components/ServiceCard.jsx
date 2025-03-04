import Image from "next/image";

export const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
          <h3 className="text-sm uppercase text-gray-500 font-semibold">
            {service.title}
          </h3>
          <p className="text-gray-800 font-semibold text-lg">{service.price}</p>
          <p className="text-gray-700 text-sm mt-2">{service.description}</p>
        </figcaption>
      </figure>
    </div>
  );
};