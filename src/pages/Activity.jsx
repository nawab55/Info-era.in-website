import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Activity() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/activities/get-all-activities`
      );
      console.log(response);
      const { activities } = response.data;
      if (Array.isArray(activities)) {
        setActivities(activities);
      } else {
        console.error("Unexpected data format:", activities);
        toast.error("Unexpected data format");
        setActivities([]);
      }
    } catch (error) {
      console.error("Error fetching activities:", error);
      toast.error("Failed to fetch activities");
      setActivities([]);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="activity">
        <Helmet>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="google-site-verification"
          content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
        />
        <title>Info Era Software Services Pvt. Ltd. | Software Company</title>
        <meta
          name="description"
          content="Info Era Software Services Pvt. Ltd. is a fast - growing IT company that provides holistic IT solutions to businesses across geographies. So far, we have forayed into healthcare, food services, travel &amp; tourism, logistics &amp; shipping, e-commerce, banking, technology, manufacturing, and IT-enabled education service industries."
        />
        <meta
          name="keywords"
          content="Info Era Software Services Pvt Ltd, Website Designing company, software company, industrial training "
        />
        <link rel="canonical" href="https://infoera.in/activity" />
        <meta name="content-language" content="EN" />
        <meta name="search engines" content="ALL" />
        <meta name="Robots" content="INDEX,ALL" />
        <meta name="YahooSeeker" content="INDEX, FOLLOW" />
        <meta name="msnbot" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="INDEX, FOLLOW" />
        <meta name="language" content="en-us" />
        <meta name="Expires" content="never" />
        <meta name="rating" content="General" />
        <meta name="Resource-type" content="document" />
        <meta name="Author" content="www.infoera.in" />
        <meta name="document-classification" content="Software & Website development company" />
        <meta name="Distribution" content="Global" />
        
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />

        <meta name="Publisher" content="www.infoera.in" />

      </Helmet>
      <div className="container mb-4" style={{ marginTop: 100 }}>
        <div
          className="row"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: 16,
            background: "#f3f6fc",
            paddingTop: 20,
          }}
        >
          <div className="col-md-12">
            <h3
              style={{
                margin: 0,
                padding: 15,
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="row mb-4"
          style={{ borderRadius: 20, background: "#f3f6fc", paddingTop: 20 }}
        >
          {activities.map((activity) => (
              <div
                className="col-lg-4 mb-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-once="true"
                key={activity._id}
              >
                <div className="single-academics-card">
                  <div className="card" style={{ borderRadius: 20 }}>
                    <div style={{ padding: 10 }}>
                      <Link to="#" target="_blank">
                        <img
                          id="ContentPlaceHolder1_listview1_image1_1"
                          src={activity.image}
                          style={{ height: 250, width: "100%" }}
                          alt={activity.title}
                        />
                      </Link>
                      <br />
                      <div className="pull-right">
                        <p style={{ textAlign: "center", marginBottom: 1 }}>
                          <b>Date: </b>
                          <span id="ContentPlaceHolder1_listview1_Label1_1">
                            {new Date(activity.createdAt).toDateString()}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p style={{ textAlign: "center", marginBottom: 1 }}>
                        <span id="ContentPlaceHolder1_listview1_Label2_1">
                          {activity.title}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;
