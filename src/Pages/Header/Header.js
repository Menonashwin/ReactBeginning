import SpaIcon from "@mui/icons-material/Spa";
import { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState("Resources");
  const handleClick = (tabName) => {
    setSelected(tabName);
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "80%",
        borderRadius: "15px",
        border: "1px solid gray",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <SpaIcon
            style={{
              color: "white",
            }}
          />
          <p
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Contentium
          </p>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "30px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                color: selected === "Resources" ? "red" : "white",
              }}
              onClick={() => handleClick("Resources")}
            >
              Resources
            </p>
            <p
              style={{
                color: selected === "Blog" ? "red" : "white",
              }}
              onClick={() => handleClick("Blog")}
            >
              Blog
            </p>
            <p
              style={{
                color: selected === "Pricing" ? "red" : "white",
              }}
              onClick={() => handleClick("Pricing")}
            >
              Pricing
            </p>
            <p
              style={{
                color: selected === "Docs" ? "red" : "white",
              }}
              onClick={() => handleClick("Docs")}
            >
              Docs
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1px",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: selected === "Book a call" ? "red" : "white",
                backgroundColor: "gray",
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => handleClick("Book a call")}
            >
              Book a call
            </p>
            <p
              style={{
                color: selected === "Discover the platform" ? "red" : "black",
                backgroundColor: "white",
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => handleClick("Discover the platform")}
            >
              Discover the platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
