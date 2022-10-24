import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css"
export default function App() {
  const images = [
    { url: "https://www.w3schools.com/howto/img_nature_wide.jpg" },
    { url: "https://www.w3schools.com/howto/img_snow_wide.jpg" },
    { url: "https://www.w3schools.com/howto/img_lights_wide.jpg" },
    { url: "https://www.w3schools.com/howto/img_mountains_wide.jpg" },
    {
      url:
        "https://images.unsplash.com/photo-1478827217976-7214a0556393?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="App">
      <SimpleImageSlider
        showNavs="true"
        width={900}
        height={400}
        images={images}
      />
    </div>
  );
}
