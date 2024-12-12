const Cctv = () => {
  return (
    <>
      <div>
        <main id="main">
          {/* ======= Features Section ======= */}
          <section
            id="features"
            className="features"
            style={{ padding: "100px 0" }}
          >
            <div className="container aos-init aos-animate" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                  <div className="row align-self-center gy-4">
                    <h3
                      style={{
                        color: "#012970",
                        fontWeight: 700,
                        fontSize: 32,
                      }}
                    >
                      CCTV Installation
                    </h3>
                    <p style={{ marginTop: 7 }}>
                      For any company having surveillance is a huge
                      consideration that must be taken into account.
                    </p>
                    <p style={{ marginTop: 7 }}>
                      Protection against inventory loss and the ability to
                      monitor employee productivity around the clock is
                      priceless.
                    </p>
                    <p style={{ marginTop: 7 }}>
                      Info Era fast rise in the CCTV Installation arena field is
                      easily credited to our hard work and proven security
                      installation successes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src="assets/img/cctv.jpg"
                    className="img-fluid"
                    alt="cctv installation - Info Era"
                    title="CCTV Installation near me"
                  />
                </div>
              </div>{" "}
              {/* / row */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Cctv;
