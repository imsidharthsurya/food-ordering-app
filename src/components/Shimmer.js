const UUi=()=>{
    return (<div className="shimmer-ui m-5">
    <div className="shimmer-img w-48 h-32 bg-gray-100"></div>
    <div className="shimmer-h1 bg-gray-100 w-36 h-2 mt-4"></div>
    <div className="shimmer-p bg-gray-100 w-28 h-2 mt-2"></div>
</div>)
}
const Shimmer=()=>{
    var arr=[1,2,1,2,1,2,1,2,1,2];
    return (
        <div className="main-shimmer flex flex-wrap mt-20 ml-8">
           {
            arr.map((elem,ind)=>{
                return <UUi key={ind}/>
            })
           }
            
        </div>
    )
}
export default Shimmer;