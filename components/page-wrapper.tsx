import React from "react";
import PageTitle from "./page-title";
import dynamic from "next/dynamic";
import VoxelOfficeLoader from './voxel-office-loader'


const LazyVoxelOffice = dynamic(() => import('./voxel-office'), {
  ssr: false,
  loading: () => <VoxelOfficeLoader />
})

interface Props {
  classNames?: string;
  title: string;
  keyword?: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({
  children,
  classNames,
  title,
  keyword = "welcome",
}) => {
  return (
    <div className={classNames}>
      <div className="">
        <LazyVoxelOffice />
      </div>
      <div className="z-20 w-full sm:max-w-2xl mx-auto md:pt-8 mb-8 -mt-14">
        <PageTitle title={title} keyword={keyword} />
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
