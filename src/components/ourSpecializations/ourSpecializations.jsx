import "./ourSpecializations.css";
import Floor from "../../assets/ourSpecializations/floor-plan.jpeg";
import InteriorDesign from "../../assets/ourSpecializations/interior-design.jpeg";
import ArhitectureDesign from "../../assets/ourSpecializations/arhitecture-design.jpeg";
import Construction from "../../assets/ourSpecializations/construction.jpeg";

function OurSpecializations() {
  return (
    <>
      <div style={{ position: "relative", top: "90px" }}>
        <p
          style={{
            fontFamily: "Oswald",
            fontWeight: "400",
            color: "#FFC978",
            fontSize: "16px",
            margin: "0px",
            textAlign: "center",
          }}
        >
          Top services
        </p>
        <p style={{ fontFamily: "Oswald", fontSize: "60px", margin: "0px" }}>
          Our Specializations
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          height: "630px",
          alignItems: "flex-start",
        }}
      >
        <div style={{}}>
          <img
            src={Floor}
            style={{
              width: "300px",
              height: "500px",
              alignSelf: "flex-start",
            }}
          />
          <div
            style={{
              width: "240px",
              position: "relative",
              top: "-156px",
              marginLeft: "30px",
              marginRight: "30px",
              marginBottom: "30px",
            }}
          >
            <p style={{ fontSize: "24px", fontFamily: "Oswald" }}>Floor plan</p>
            <p>Tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div style={{ position: "relative", top: "130px" }}>
          <img
            src={InteriorDesign}
            style={{
              width: "300px",
              height: "500px",
            }}
          />
          <div
            style={{
              width: "240px",
              position: "relative",
              top: "-156px",
              marginLeft: "30px",
              marginRight: "30px",
              marginBottom: "30px",
            }}
          >
            <p style={{ fontSize: "24px", fontFamily: "Oswald" }}>
              Interior Design
            </p>
            <p>Tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div style={{ position: "relative", top: "130px" }}>
          <img
            src={ArhitectureDesign}
            style={{
              width: "300px",
              height: "500px",
            }}
          />
          <div
            style={{
              width: "240px",
              position: "relative",
              top: "-156px",
              marginLeft: "30px",
              marginRight: "30px",
              marginBottom: "30px",
            }}
          >
            <p style={{ fontSize: "24px", fontFamily: "Oswald" }}>
              Architecture Design
            </p>
            <p>Tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div style={{}}>
          <img
            src={Construction}
            style={{
              width: "300px",
              height: "500px",
              alignSelf: "flex-start",
            }}
          />
          <div
            style={{
              width: "240px",
              position: "relative",
              top: "-156px",
              marginLeft: "30px",
              marginRight: "30px",
              marginBottom: "30px",
            }}
          >
            <p style={{ fontSize: "24px", fontFamily: "Oswald" }}>
              Construction
            </p>
            <p>Tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { OurSpecializations };
export default OurSpecializations;
