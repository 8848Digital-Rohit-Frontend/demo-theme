import Link from 'next/link';
import Image from 'next/image';
import { CONSTANTS } from '../../../services/config/app-config';
import style from '../../../styles/components/home.module.scss';

const CategoriesData = ({ homeTopCategories }: any) => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="container-fluid slider-container mt-5">
      <h4 className="mt-2 fw-bold">Our Handpicked Categories for You</h4>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
          <Link
            href={`${homeTopCategories[1]?.category_url}`}
            className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
          >
            <div className="category-banner banner banner-fixed ">
              <Image
                loader={imageLoader}
                src={homeTopCategories?.length > 0 && homeTopCategories[1]?.product_img}
                alt="Picture of the author"
                width={590}
                height={500}
                className={`w-100 ${style.catagoryImg}`}
              />
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 d-md-none d-lg-block col-lg-3 col-xl-3">
          <div className="mb-4">
            <Link
              href={`${homeTopCategories[0]?.category_url}`}
              className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
            >
              <div className="category-banner banner banner-fixed ">
                <Image
                  loader={imageLoader}
                  src={homeTopCategories?.length > 0 && homeTopCategories[0]?.product_img}
                  alt="Picture of the author"
                  width={340}
                  height={280}
                  className={`w-100 ${style.catagoryImg}`}
                />
              </div>
            </Link>
          </div>
          <Link
            href={`${homeTopCategories[3]?.category_url}`}
            className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
          >
            <div className="category-banner banner banner-fixed ">
              <Image
                loader={imageLoader}
                src={homeTopCategories?.length > 0 && homeTopCategories[3]?.product_img}
                alt="Picture of the author"
                width={340}
                height={195}
                className={`w-100 ${style.catagoryImg}`}
              />
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Link
            href={`${homeTopCategories[2]?.category_url}`}
            className="banner-title text-white text-capitalize ls-25 homecategory_btnlink"
          >
            <div className="category-banner banner banner-fixed ">
              <Image
                loader={imageLoader}
                src={homeTopCategories?.length > 0 && homeTopCategories[2]?.product_img}
                alt="Picture of the author"
                width={470}
                height={500}
                className={`w-100 ${style.catagoryImg}`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesData;
