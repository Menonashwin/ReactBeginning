const SubHeader=({SubHeader})=>{
    return(
        <div
        style={{
          width:"15%",
          marginTop:"70px",
          userSelect:"none",
        }}
      >
        <p
          style={{
            textAlign:"center",
            fontSize: "14px",
            backgroundColor: "black",
            border:"1px solid  white",
            padding: "5px 10px",
            borderRadius: "20px",
            color:"white"
          }}
        >
      {SubHeader}
        </p>
        </div>
    )
}
export default SubHeader;