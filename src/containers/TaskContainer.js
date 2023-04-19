import { connect } from "react-redux";
import NewTaskButton from "../components/NewTaskButton";
import NewTask from "../components/NewTask"
import newTask from "../actions/newTask"

const mapStateToProps = state => {
    return {
        name: state.name,
        taskId: state.taskId,
        status: state.status,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (name, id, status) => {
            dispatch(newTask(name, id, status));
        }}
    };

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(
    NewTask,
    NewTaskButton
);

export default TaskContainer;