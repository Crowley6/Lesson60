// import { connect } from "react-redux";
// import axios from "axios";
import Friends from "./Friends";
import React from "react";

class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
    }
    componentDidMount() {
        
    }

    dataRefReturnDispatcher = (dataRef) => {
        this.props.dispatch({ type: 'DATA_CHECK', dataRef })
    }
    FriendsDispatcher = (others) => {
        this.props.dispatch({ type: 'FRIENDS_CHECKER', others})
    }

    render() {
        return (
            <Friends
                state={this.props.state.FriendsData}
                dataRefReturnDispatcher={this.dataRefReturnDispatcher}
                FriendsDispatcher={this.FriendsDispatcher}
            />
        )
    }
}

// const FriendsContainer = (props) => {
//     let dataRefReturnDispatcher = dataRef => {
//         props.dispatch({ type: 'DATA_CHECK', dataRef })
//     }
//     return (
//         <Friends
//             state={props.state.FriendsData}
//             dataRefReturnDispatcher={dataRefReturnDispatcher}
//         />
//     )
// }



// let mapToState = (state) => {
//     return {
//         reduxstate: state.reduxstate.getState().FriendsData
//     }
// }

// let mapToDispatch = (dispatch) => {
//     return {
//         dataRefReturnDispatcher: (dataRef) => {
//             dispatch({ type: 'DATA_CHECK', dataRef })
//         }
//     }
// }

// let FriendsContainer = connect(mapToState, mapToDispatch)(Friends);

export default FriendsContainer;