const UUi=()=>{
    return (<div className="shimmer-ui sm:m-5">
    <div className="shimmer-img sm:w-48 w-60  sm:h-32 h-40 bg-gray-100"></div>
    <div className="shimmer-h1 bg-gray-100 sm:w-36 w-40 h-2 mt-4"></div>
    <div className="shimmer-p bg-gray-100 sm:w-28 w-32 h-2 mt-2"></div>
</div>)
}
const Shimmer=()=>{
    var arr=[1,2,1,2,1,2,1,2,1,2];
    return (
        <div className="main-shimmer flex flex-wrap sm:ml-4 mt-20 ml-16">
           {
            arr.map((elem,ind)=>{
                return <UUi key={ind}/>
            })
           }
            
        </div>
    )
}
export default Shimmer;