import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-3xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          blanditiis omnis esse inventore quasi in sunt velit laboriosam qui
          aliquid vero, sapiente cumque odit iure reiciendis ab? Dolorem,
          corporis animi.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          quos.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
