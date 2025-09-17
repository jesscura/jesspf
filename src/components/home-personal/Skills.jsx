import React from 'react';

function Skills() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                I’ve worked with a <br />
                <span className="opacity-7">diverse range of companies.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/tools/zendesk.svg" alt="Zendesk logo" />
                </div>
              </div>
              <h6 className="fz-18">Zendesk</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/tools/gorgias.svg" alt="Gorgias logo" />
                </div>
              </div>
              <h6 className="fz-18">Gorgias</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/tools/intercom.svg" alt="Intercom logo" />
                </div>
              </div>
              <h6 className="fz-18">Intercom</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/tools/shopify.svg" alt="Shopify logo" />
                </div>
              </div>
              <h6 className="fz-18">Shopify</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/tools/woocommerce.svg" alt="WooCommerce logo" />
                </div>
              </div>
              <h6 className="fz-18">WooCommerce</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/tools/appfolio.svg" alt="AppFolio logo" />
                </div>
              </div>
              <h6 className="fz-18">AppFolio / Buildium</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
