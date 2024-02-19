import { render,screen } from "@testing-library/react";
import NewAbout from "../NewAbout";
import "@testing-library/jest-dom"

test('should render my information in about me page', () => {
    render(<NewAbout/>)
    const info=screen.getByRole("heading")
    // console.log(info)
    expect(info).toBeInTheDocument();
})

test('should render profile image',()=>{
    render(<NewAbout/>);
    const pic=screen.getByAltText("Sidharth pic")
    expect(pic).toBeInTheDocument();
})