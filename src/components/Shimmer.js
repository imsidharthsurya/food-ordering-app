const UUi=()=>{
    return (<div className="shimmer-ui">
    <div className="shimmer-img"></div>
    <div className="shimmer-h1"></div>
    <div className="shimmer-p"></div>
</div>)
}
const Shimmer=()=>{
    var arr=[1,2,1,2,1,2,1,2,1,2];
    return (
        <div className="main-shimmer">
           {
            arr.map(()=>{
                return <UUi/>
            })
           }
            
        </div>
    )
}
export default Shimmer;