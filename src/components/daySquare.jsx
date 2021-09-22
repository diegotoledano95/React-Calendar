import './daySquare.scss'

export default function daySquare(props){
    const {className, id} = props;
    return(
        <div className={className} id={id}>
            <p>{props.children}</p>
        </div>
    )

};