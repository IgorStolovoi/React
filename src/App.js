import FormWrapper from "./components/FormWrapper";
import { FormProvider } from "./context/FormContext";
import { initialState, formReducer } from "./reducer/formReducer";
function App() {
  return (
    <>
      <FormProvider initialState={initialState} reducer={formReducer}>
        <FormWrapper />
      </FormProvider>
    </>
  );
}

export default App;
