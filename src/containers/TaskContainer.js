import { connect } from "react-redux";
import TaskView from "../components/TaskView"

const mapStateToProps = state => {
    return {
        task: state.taskData,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addTask: (name, id, status) => {
//             dispatch(newTask(name, id, status));
//         }}
//     };

const TaskContainer = connect(mapStateToProps, null)(
    TaskView,
);

export default TaskContainer;