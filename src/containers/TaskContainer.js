import { connect } from "react-redux";
import newTask from "../actions/newTask"
import TaskView from "../components/TaskView"
import NewTask from "../components/NewTask"

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