import Header from "./Pages/Header/Header";
import MainHeader from "./Pages/Header/MainHeader";
import SubHeader from "./Pages/Header/SubHeader";
import "./App.css";
import BottomButton from "./Pages/Header/BottomButton";
const App = () => {
  
  const headerName = "Contentium";
  const navtab1 = "Resources";
  const navtab2 = "Blog";
  const navtab3 = "Pricing";
  const navtab4 = "Docs";
  const button1 = "Book a call";
  const button2 = "Discover the platform";
  const subHead = "Trusted by 35,000+ People";
  const mainHead1 = "Managing Your Content With AI";
  const mainHead2 ="An open source content management system that uses AI to automate various aspects of content creation, optimization, and distribution."
  const button3 = "Get Started for Free";
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url("https://e0.pxfuel.com/wallpapers/656/54/desktop-wallpaper-dark-theme-dark-mode.jpg")`,
        backgroundSize: "cover",
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
        <Header HeaderName={headerName}
        Navtab1={navtab1}
        Navtab2={navtab2} 
        Navtab3={navtab3} 
        Navtab4={navtab4} 
        Button1={button1}
        Button2={button2} />
        <SubHeader SubHeader={subHead} />
        <MainHeader MainHeader1={mainHead1}
        MainHeader2={mainHead2} />
        <BottomButton Button3={button3}/>
      </div>
    </div>
  );
};
export default App;
