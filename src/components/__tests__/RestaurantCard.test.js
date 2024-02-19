import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
import resCardMockData from "../mocks/resCardMockData.json"
it("should render restaurant card component with restaurant name",()=>{
    render(<RestaurantCard {...resCardMockData.info}/>)
    const resName=screen.getByText("Wow! Momo");
    expect(resName).toBeInTheDocument();
})