    import axios from "@/service/axios"
    import { useEffect, useState } from "react"
    import PartCard from "./PartCard"
    export default ()=> {
        const [parts,setParts]= useState([])
        const [totalparts,setTotalParts]= useState(0)

        const getparts= ()=>{
            axios.get ('parts').then(res => {
                setParts(res.data.items)
                setTotalParts(res.data.meta.count)
            })

        }
        useEffect(()=>{
            getparts()
        }, [])





        return (
            <div className="container mx-auto">
            <div className="flex items-center ">
                <h4> {totalparts}</h4>
                <div className="ml-auto flex item-center space-x-4">
                    <h5>
                        sortby 
                    </h5>
                </div>
            </div>



            <div className=" grid grid-cols-3 gap-4">
                {parts.length > 0 && parts.map(part => <PartCard part={part} />)}
            </div>
            </div>
        )
    }