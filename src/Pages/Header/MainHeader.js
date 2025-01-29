const MainHeader = ({MainHeader1,MainHeader2}) => {
  return (
    <div
      style={{
        color: "white",
        width: "40%",
        paddingTop: "25px",
        paddingBottom: "25px",
        userSelect: "none",
      }}
    >
      <p
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily:"arial",
          
        }}
      >
        {MainHeader1}
      </p>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "normal",
            color: "white",
            textAlign: "center",
          }}
        >
         {MainHeader2}
        </p>
      </div>
    </div>
  );
};
export default MainHeader;
