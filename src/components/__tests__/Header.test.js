import { fireEvent, render,screen } from "@testing-library/react"
import NewHeader from "../NewHeader"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom" //for expect.toBe fns. to work
it("should render header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <NewHeader/>
        </Provider>
        </BrowserRouter>
        
        );
    const loginBtn=screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();
})

it("should render header component with cart - 0 items",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <NewHeader/>
        </Provider>
        </BrowserRouter>
        
        );
    const loginBtn=screen.getByText("Cart- (0 Items)");
    expect(loginBtn).toBeInTheDocument();
})

it("should change login button to logout on click",()=>{
    render(<BrowserRouter><Provider store={appStore}><NewHeader/></Provider></BrowserRouter>);
    const loginBtn=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginBtn);
    const logoutBtn=screen.getByRole("button",{name:"Logout"});
    expect(loginBtn).toBeInTheDocument()
})