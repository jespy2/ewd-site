
import { useMediaQuery } from "@mui/material";

export const useScreenSize = () => {
  return {
    isSmall: useMediaQuery("(max-width:600px)"),
    isMedium: useMediaQuery("(max-width:900px)"),
    isLarge: useMediaQuery("(max-width:1200px)"),
    isXLarge: useMediaQuery("(max-width:1536px)")
  };
}	

export const useScreenOrientation = () => {
  return {
    isLandscape: useMediaQuery("(orientation:landscape)"),
    isPortrait: useMediaQuery("(orientation:portrait)")
  };
}