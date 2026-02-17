import { TbLoader2 } from "react-icons/tb";
import { forwardRef, ReactNode } from "react";

export const OfficeSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <TbLoader2 className="animate-spin text-4xl" />
    </div>
  );
};

interface OfficeContainerProps {
  children: ReactNode;
}

export const OfficeContainer = forwardRef<HTMLDivElement, OfficeContainerProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="voxel-dog m-auto w-[380px] h-[230px] relative"
      >
        {children}
      </div>
    );
  }
);

OfficeContainer.displayName = "OfficeContainer";

const Loader = () => {
  return (
    <OfficeContainer>
      <OfficeSpinner />
    </OfficeContainer>
  );
};

export default Loader;
