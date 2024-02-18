import { render,screen } from "@testing-library/react";
import NewAbout from "../NewAbout";
import "@testing-library/jest-dom"

test('should render my information in about me page', () => {
    render(<NewAbout/>)
    const info=screen.getByText("Hello! I'm Sidharth Surya, a committed MERN Stack Developer currently working at IDFC FIRST BANK. Eager to contribute to innovative projects and expand my knowledge!");
    // console.log(info)
    expect(info).toBeInTheDocument();
})