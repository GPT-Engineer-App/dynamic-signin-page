import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors: { ...colors, brand: { ...colors.brand, 700: "#030005" } },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "src='/images/darkmode.jpg'" alt="Logo'" : "url('https://api.wallpapers.ai/static/downloads/bf459d59d8904f08841e2c1d9a78ceae/upscaled/000000_43196607_kdpmpp2m15_PS7.5_4k_wallpaper_minimalistic_anime_girl_with_silver_hair_and_dark_green_eyes_on_left_side_picture._digital_art_concept_art_[upscaled].jpg')",
        backgroundSize: "cover",
        transition: "background 0.3s ease-out",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
