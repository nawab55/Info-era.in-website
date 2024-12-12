const Biometric = () => {
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
                      Biometric Installation
                    </h3>
                    <p style={{ marginTop: 7 }}>
                      Info Era is a modular, open platform used to enable a
                      biometric system with advanced biometric data processing
                      and management functionality in a web services
                      architecture. It provides workflow, data management and
                      formatting, and other important utilities for large-scale
                      biometric systems..
                    </p>
                    <p style={{ marginTop: 7 }}>
                      Info Era is well suited for applications that require the
                      collection of biometrics throughout a distributed network,
                      and subsequent aggregation, analysis, processing,
                      distribution, matching, and sharing of data with other
                      system components.
                    </p>
                    <p style={{ marginTop: 7 }}>
                      This is modular, programmable, scalable, and secure,
                      capable of managing all aspects of transaction workflow
                      including messaging, submissions, responses, and logging.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src="assets/img/biometric.png"
                    className="img-fluid"
                    alt="biometric installation - Info Era"
                    title="Biometric Installation near me"
                  />
                </div>
              </div>{" "}
              {/* / row */}
            </div>
          </section>
        </main>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
    </>
  );
};

export default Biometric;
