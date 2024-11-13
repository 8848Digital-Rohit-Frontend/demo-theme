import Link from 'next/link';
import OrderCardDetails from '../components/MyOrder/OrderCardDetails';
import { OverlayTrigger, Popover } from 'react-bootstrap';
// import useCancelOrder from '../hooks/OrderListHooks/useCancelOrder';

function MyOrderCard({ data, selectedMultiLangData, handleCancel }: any) {
  // const { handleCancel }: any = useCancelOrder();

  const popoverBottom = (addr: any) => (
    <Popover id="popover-positioned-bottom" title="Popover bottom">
      <ul className="p-2" aria-labelledby="ship_to">
        <p className=" mb-0 ">{addr?.address_title}</p>
        <p className=" mb-0 ">{addr?.address_1}</p>
        <p className=" mb-0">{addr?.address_2}</p>
        <p className=" mb-0">
          {addr?.city} - {addr?.postal_code}
        </p>
        <p className=" mb-0">{addr?.country}</p>
        <p className=" mb-0">
          {selectedMultiLangData?.mobile_number}: {addr?.contact}
        </p>
      </ul>
    </Popover>
  );
  return (
    <>
      <div key={data.id}>
        <div className="card-header ">
          <div className="row pt-1 pb-1">
            <div className=" mb-sm-0 col-md-2 col-6 ">
              <p className="text-uppercase   m-0">{selectedMultiLangData?.order_placed}</p>

              <p className="gray  m-0">{data?.transaction_date?.split('-')?.reverse()?.join('/')}</p>
            </div>
            <div className=" col-md-2 col-6 order-div">
              <p className="text-uppercase gray  m-0"> {selectedMultiLangData?.total_price}</p>
              {data?.total === 0 ? (
                <p className="border price_request">{selectedMultiLangData?.price_on_request}</p>
              ) : (
                <p className="gray  m-0 price_font_family">
                  {data?.currency_symbol} {data?.total}
                </p>
              )}
            </div>
            <div className="col-md-2 col-4 order-cards">
              <p className="text-uppercase gray  m-0">{selectedMultiLangData?.ship_to}</p>
              {data?.addresses?.map((personAddress: any, index: number) => (
                <div className="dropdown text-dark" key={index}>
                  {personAddress?.name === 'Shipping Address'
                    ? personAddress?.values.map((addr: any) => (
                        <div key={addr.address_id} className="dropdown">
                          <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverBottom(addr)}>
                            <button
                              className="btn btn-link text-decoration-none p-0 text-dark"
                              role="button"
                              id="ship_to"
                              data-bs-toggle="dropdown"
                            >
                              {personAddress?.name}
                            </button>
                          </OverlayTrigger>
                        </div>
                      ))
                    : null}
                </div>
              ))}
            </div>
            <div
              className={`${
                data?.order_status !== 'Order Delivered' && data?.order_status !== 'Cancelled' ? 'col-md-3' : 'col-md-4'
              } order-cards col-4 row text-end`}
            >
              <p className=" pt-2">
                {selectedMultiLangData?.orders} # {data?.name}
              </p>
            </div>
            <div
              className={`${
                data?.order_status !== 'Order Delivered' && data?.order_status !== 'Cancelled' ? 'col-md-3' : 'col-md-2'
              } mx-0  pe-0 col-4 row text-end`}
            >
              {/* <div className="row mx"> */}
              <div
                className={`${
                  data?.order_status !== 'Order Delivered' && data?.order_status !== 'Cancelled' ? 'col-md-6' : 'col-12 '
                } pe-0`}
              >
                <div className=" text-center ">
                  <div className="flex-fill  text-capitalize    fs-13">
                    <Link href={`my-orders/${data?.name}`} legacyBehavior>
                      <button className="btn btn-outline-primary w-100 rounded-0 text-md-uppercase">
                        {selectedMultiLangData?.order_details}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {data?.order_status !== 'Order Delivered' && data?.order_status !== 'Cancelled' && (
                <div className="col-md-6 pe-0">
                  <div className=" text-center ">
                    <div className="flex-fill  text-capitalize    fs-13">
                      <button className="btn btn-outline-danger w-100 rounded-0 text-md-uppercase" onClick={() => handleCancel(data)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
        <OrderCardDetails data={data} selectedMultiLangData={selectedMultiLangData} />
      </div>
    </>
  );
}

export default MyOrderCard;
