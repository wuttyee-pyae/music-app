
import Mobile from "./mobile/page";
import Desktop from "./desktop/page";
import ConstantContext from "../../context/ConstantContent";
import { useContext } from "react";

export default function MainPage ()  {

  const isMobile = useContext(ConstantContext);
  return  isMobile ? (
      <Mobile/>
    ) : (
      <Desktop/>
    )
}