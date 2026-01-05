export default function List({name,detail}){
    return(
        <>
            <div className="list">
                <li className="space">{name} , {detail}</li>
            </div>
        </>
    )
}