import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const LeftArrow = ({ handlePrev, disabled = false, ArrowLeft = FaArrowLeft, classname = '' }: any) => {
  return (
    <button className={classname} onClick={handlePrev} disabled={disabled}>
      <ArrowLeft />
    </button>
  );
};

export const RightArrow = ({ handleNext, disabled = false, ArrowRight = FaArrowRight, classname = '' }: any) => {
  return (
    <button className={classname} onClick={handleNext} disabled={disabled}>
      <ArrowRight />
    </button>
  );
};

export const CarouselArrows = ({ handlePrev, handleNext, disabledPrev, disabledNext }: any) => {
  return (
    <div className="row justify-content-end mx-0" style={{ marginTop: '-50px', paddingBottom: '10px' }}>
      <LeftArrow className="btn w-auto border-0" disabled={disabledPrev} handlePrev={handlePrev} ArrowLeft={FaArrowLeft} />
      <RightArrow className="btn w-auto border-0" disabled={disabledNext} handleNext={handleNext} ArrowLeft={FaArrowRight} />
    </div>
  );
};
