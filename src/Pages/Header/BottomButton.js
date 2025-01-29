const BottomButton = ({Button3})=>{
    return(
        <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          userSelect:"none"
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
          {Button3}
        </p>
      </div>
    )
}
export default BottomButton;