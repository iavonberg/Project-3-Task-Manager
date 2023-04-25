import { SHOW_VIEW } from "../constants/constants.js";

const showView = (completed) => {
    return {
        type: SHOW_VIEW,
        completed: completed
    };
};

export default showView;