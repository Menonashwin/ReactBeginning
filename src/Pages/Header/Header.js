import SpaIcon from "@mui/icons-material/Spa";
import { useState } from "react";

const Header = ({HeaderName,Navtab1,Navtab2,Navtab3,Navtab4,Button1,Button2}) => {
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
            {HeaderName}
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
              userSelect:"none"
            }}
          >
            <p
              style={{
                color: selected === "Resources" ? "red" : "white",
              }}
              onClick={() => handleClick("Resources")}
            >
              {Navtab1}
            </p>
            <p
              style={{
                color: selected === "Blog" ? "red" : "white",
              }}
              onClick={() => handleClick("Blog")}
            >
              {Navtab2}
            </p>
            <p
              style={{
                color: selected === "Pricing" ? "red" : "white",
              }}
              onClick={() => handleClick("Pricing")}
            >
              {Navtab3}
            </p>
            <p
              style={{
                color: selected === "Docs" ? "red" : "white",
              }}
              onClick={() => handleClick("Docs")}
            >
              {Navtab4}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              userSelect:"none"
            }}
          >
            <p
              style={{
                backgroundColor: selected === "Book a call" ? "red" : "white",
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => handleClick("Book a call")}
            >
              {Button1}
            </p>
            <p
              style={{
                backgroundColor: selected === "Discover the platform" ? "red" : "white",
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => handleClick("Discover the platform")}
            >
              {Button2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
