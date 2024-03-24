import P from 'prop-types';

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor ?? 'bg-coral-red'
      } ${textColor ?? 'text-white'} ${borderColor ?? 'border-red-coral'}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: P.string,
  iconUrl: P.string,
  backgroundColor: P.string,
  textColor: P.string,
  borderColor: P.string,
};
