import Header from "./Pages/Header/Header";
import MainHeader from "./Pages/Header/MainHeader";
import SubHeader from "./Pages/Header/SubHeader";
import "./App.css";
const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <SubHeader />
        <MainHeader />

        <div
        style={{
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <p
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            borderRadius: "9px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Get Started for Free
        </p>
      </div>
      </div>


    </div>
  );
};
export default App;
