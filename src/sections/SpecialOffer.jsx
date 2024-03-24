import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-3xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          offer
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
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor={'bg-white'}
            borderColor={'border-slate-gray'}
            textColor={'text-slate-gray'}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
