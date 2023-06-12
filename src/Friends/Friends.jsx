import React from "react";
import './css/Friends.css';
import axios from "axios";

const Friends_Choose = (props) => {
    return (<li><a href="">{props.id}{props.name}</a></li>
    )
}

const Friends = (props) => {
    let a = React.createRef();
    let valu = props.state.dataRef;

    let dataRefReturner = () => {
        props.dataRefReturnDispatcher(a.current.value)
    }
    axios.get(`https://project.it-arduino.ru/api/projects`)
        .then(response => {
            props.FriendsDispatcher(response.data.data);
            console.log(props.state.others)
        })
    return (
        <div className="Friends">
            <div className="Friends_Choose">
                <ul>
                    {
                        props.state.others.map(
                            (d) => <Friends_Choose key={d.id} id={d.id} name={d.name_project} />)
                    }
                </ul>
            </div>
            <div className="Friends_Messages">
                <textarea onChange={dataRefReturner} name="" id="" cols="30" rows="10" ref={a} value={valu}></textarea>
                <input type="submit" />
            </div>
        </div>
    )
}

export default Friends;