import React from 'react';
import { IconType } from 'react-icons';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface LeftArrowInterface {
  handlePrev: () => {};
  disabled: boolean;
  ArrowLeft: IconType;
  classname: string;
}

interface RightArrowInterface {
  handleNext: () => {};
  disabled: boolean;
  ArrowRight: IconType;
  classname: string;
}

interface CarouselArrowInterface {
  handleNext: () => {};
  handlePrev: () => {};
  disabledPrev: boolean;
  disabledNext: boolean;
}

export const LeftArrow = ({ handlePrev, disabled = false, ArrowLeft = FaArrowLeft, classname = '' }: LeftArrowInterface) => {
  return (
    <button className={classname} onClick={handlePrev} disabled={disabled}>
      <ArrowLeft />
    </button>
  );
};

export const RightArrow = ({ handleNext, disabled = false, ArrowRight = FaArrowRight, classname = '' }: RightArrowInterface) => {
  return (
    <button className={classname} onClick={handleNext} disabled={disabled}>
      <ArrowRight />
    </button>
  );
};

export const CarouselArrows = ({ handlePrev, handleNext, disabledPrev = false, disabledNext = false }: CarouselArrowInterface) => {
  return (
    <div className="row justify-content-end mx-0" style={{ marginTop: '-50px', paddingBottom: '10px' }}>
      <LeftArrow classname="btn w-auto border-0" disabled={disabledPrev} handlePrev={handlePrev} ArrowLeft={FaArrowLeft} />
      <RightArrow classname="btn w-auto border-0" disabled={disabledNext} handleNext={handleNext} ArrowRight={FaArrowRight} />
    </div>
  );
};
