import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'taskData',
    initialState: {
        todos: [
         {id: 0, name: "Make this dumb app", status: "incomplete" },
        {id: 1, name: "Finish this dumb course", status: "incomplete"}
        ]
    },
    reducers: {
        NEW_TASK: (state) => {
            state.push({id: 2, name: "test", status: "incomplete"})
            console.log(state.todos)
        },

    }
})

export const { NEW_TASK } = taskSlice.actions

export default taskSlice.reducer


// const taskData = (state = initialTaskData, action) => {
//     switch (action.type) {
//         case NEW_TASK:
//             let stateCopy = [...initialTaskData.todos];
//             stateCopy.push({id: 2, name: "test", status: "incomplete"})
//             console.log(stateCopy)
//         default:
//             return state
//     }
// };

// const taskreducer = combineReducers({
//     taskData
// })

// export default taskreducer;