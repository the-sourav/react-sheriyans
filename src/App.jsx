import Card from "./components/Card";
import picture1 from "./assets/images/picture1.webp";
import picture2 from "./assets/images/picture2.jpg";
import picture3 from "./assets/images/picture3.jpg";

const App = () => {
  return (
    <div className="container">
      <Card  title="Modern Villa" description="A modern villa with stunning views. Best for a romantic getaway. Enjoy the luxurious amenities and breathtaking scenery." picture={picture1} rating="4.5" stay="3 Night Stay" />

      <Card title="Swiss Chalet" description="Experience the beauty of Switzerland in this charming chalet. Cozy wooden chalet nestled in the Alps." picture={picture2} rating="4.8" stay="5 Night Stay" />

      <Card title="Beachfront Bungalow" description="A beachfront bungalow with direct access to the ocean. Enjoy the sun, sand, and sea in this idyllic bungalow." picture={picture3} rating="4.7" stay="4 Night Stay" />
    </div>
  );
};

export default App;
