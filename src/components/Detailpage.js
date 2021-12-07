import React from 'react'
import { useParams } from 'react-router-dom'
const  Detailpage = () => {
    const params = useParams();
    return (
        <div>
            <h1>Detailpage - {params.id}</h1>
        </div>
    )
}
export default Detailpage