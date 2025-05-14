import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MyCard(props){

    return(
        <div className="card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text"> {props.num && "Size: "+props.num} </p>
            {/* <p className="card-text">{props.add && "Address: "+props.add}</p> */}
                {props.page && <Link to={props.page} class="btn btn-primary">See More</Link>}
            
        </div>
        </div>
    )




}

export default MyCard;