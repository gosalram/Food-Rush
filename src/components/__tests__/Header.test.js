import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

it("Should load Header component with a login componet", () => {
  render(
    <BrowserRouter>
      <Provider>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
