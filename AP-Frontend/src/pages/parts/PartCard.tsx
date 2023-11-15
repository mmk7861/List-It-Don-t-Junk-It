export default (props: any)=>{
    const {part}=props
    return(
        <div className="p-5 border border-black ">
<div className="overflow-hidden w-full h-[150px]">
    <img src={part.image_url} loading='lazy'/>
    
</div><h5> {part.name}</h5>

        </div>
    )
}