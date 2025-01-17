import React from "react";
import "./Basket.scss";

const Basket = () => {
  return (
    <div class="container-fluid mt-3 mb-4">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-9 px-0 pr-lg-2 mb-2 mb-lg-0">
            <div class="card border-light bg-white card proviewcard shadow-sm">
              <div class="card-header">My Cart</div>
              <div class="card-body">
                <div class="col-lg-12 p-3 cardlist">
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2">
                            <div class="row">
                              <a href="cateview.php" class="w-100">
                                <img
                                  src="http://placehold.it/100x100"
                                  class="mx-auto d-block mb-1 addcartimg"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-8 col-lg-9 col-xl-10">
                            <div class="d-block text-truncate mb-1">
                              <a href="cateview.php" class="cartproname">
                                Pure Refined Sugar
                              </a>
                            </div>
                            <div class="seller d-block">
                              <span>Seller: </span>
                              <span>SELL010</span>
                            </div>
                            <div class="cartviewprice d-block">
                              <span class="amt">Rs.6,258</span>
                              <span class="oldamt">Rs.7,365</span>
                              <span class="disamt">28% off</span>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2 p-0 qty">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-minus"></i>
                                </button>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-sm text-center"
                                id=""
                                aria-describedby=""
                                value="8"
                                required
                              />
                              <div class="input-group-append">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-5">
                            <a href="" class="addcardrmv">
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                        <div class="row">
                          <div class="prostatus">
                            <span class="del-time">
                              Delivered <span>2-3 Business Days</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 p-3 cardlist">
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2">
                            <div class="row">
                              <a href="cateview.php" class="w-100">
                                <img
                                  src="http://placehold.it/100x100"
                                  class="mx-auto d-block mb-1 addcartimg"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-8 col-lg-9 col-xl-10">
                            <div class="d-block text-truncate mb-1">
                              <a href="cateview.php" class="cartproname">
                                Ghee
                              </a>
                            </div>
                            <div class="seller d-block">
                              <span>Seller: </span>
                              <span>SELL010</span>
                            </div>
                            <div class="cartviewprice d-block">
                              <span class="amt">Rs.2,567</span>
                              <span class="oldamt">Rs.2,700</span>
                              <span class="disamt">15% off</span>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2 p-0 qty">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-minus"></i>
                                </button>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-sm text-center"
                                id=""
                                aria-describedby=""
                                value="8"
                                required
                              />
                              <div class="input-group-append">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-5">
                            <a href="" class="addcardrmv">
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                        <div class="row">
                          <div class="prostatus">
                            <span class="del-time">
                              Delivered <span>3 Business Days</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 p-3 cardlist">
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2">
                            <div class="row">
                              <a href="cateview.php" class="w-100">
                                <img
                                  src="http://placehold.it/100x100"
                                  class="mx-auto d-block mb-1 addcartimg"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-8 col-lg-9 col-xl-10">
                            <div class="d-block text-truncate mb-1">
                              <a href="cateview.php" class="cartproname">
                                Veg Noodles
                              </a>
                            </div>
                            <div class="seller d-block">
                              <span>Seller: </span>
                              <span>SELL010</span>
                            </div>
                            <div class="cartviewprice d-block">
                              <span class="amt">Rs.4,354</span>
                              <span class="oldamt">Rs.4,698</span>
                              <span class="disamt">35% off</span>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2 p-0 qty">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-minus"></i>
                                </button>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-sm text-center"
                                id=""
                                aria-describedby=""
                                value="8"
                                required
                              />
                              <div class="input-group-append">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-5">
                            <a href="" class="addcardrmv">
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                        <div class="row">
                          <div class="prostatus">
                            <span class="del-time">
                              Delivered <span>8 Business Days</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 p-3 cardlist">
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2">
                            <div class="row">
                              <a href="cateview.php" class="w-100">
                                <img
                                  src="http://placehold.it/100x100"
                                  class="mx-auto d-block mb-1 addcartimg"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="col-8 col-lg-9 col-xl-10">
                            <div class="d-block text-truncate mb-1">
                              <a href="cateview.php" class="cartproname">
                                Sunflower Oil
                              </a>
                            </div>
                            <div class="seller d-block">
                              <span>Seller: </span>
                              <span>SELL010</span>
                            </div>
                            <div class="cartviewprice d-block">
                              <span class="amt">Rs.13,650</span>
                              <span class="oldamt">Rs.14,000</span>
                              <span class="disamt">20% off</span>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-lg-3 col-xl-2 p-0 qty">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-minus"></i>
                                </button>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-sm text-center"
                                id=""
                                aria-describedby=""
                                value="8"
                                required
                              />
                              <div class="input-group-append">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-qty"
                                >
                                  <i class="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3 col-5">
                            <a href="" class="addcardrmv">
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 ml-lg-auto align-self-start mt-2 mt-lg-0">
                        <div class="row">
                          <div class="prostatus">
                            <span class="del-time">
                              Delivered <span>6-10 Business Days</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="card-footer border-light cart-panel-foo-fix">
                <a href="" class="btn btn-add-con">
                  Continue Shopping
                </a>
                <a href="" class="btn btn-cust">
                  Place Order
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
