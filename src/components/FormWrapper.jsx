import { useFormContext } from "../context/FormContext";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import FourthForm from "./FourthForm";
import FinalData from "./FinalData";
import Box from "../../node_modules/@material-ui/core/Box";
function FormWrapper() {
  const [state] = useFormContext();
  const showedForm = () => {
    switch (state.step) {
      case 1:
        return <FirstForm />;
      case 2:
        return <SecondForm />;
      case 3:
        return <ThirdForm />;
      case 4:
        return <FourthForm />;
      case 5:
        return <FinalData />;
      default:
        return <h1>Something Wrong:C</h1>;
    }
  };
  return (
    <Box
      sx={{
        maxWidth: 350,
        minHeight: 350,
        borderRadius: "12px",
        boxShadow: 1,
        textAlign: "center",
        boxSizing: "border-box",
        p: "35px",
        m: "auto",
      }}
    >
      {showedForm()}
    </Box>
  );
}

export default FormWrapper;
