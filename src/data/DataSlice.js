// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  boards: data.boards,
  currentBoardIndex: 0, // Assume the default current board index
  ClickedTaskName: "",
  ClickedTaskIndex: 0,
};

const DataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    // Add unique IDs for columns and task
    initializeBoard: (state, action) => {
      state.boards.forEach((board) => {
        board.id = uuidv4(); // Unique ID for the board
        board.columns.forEach((column) => {
          column.id = uuidv4(); // Unique ID for the board
          column.tasks.forEach((task) => {
            task.id = uuidv4(); // Unique ID fo the board
          });
        });
      });
    },

    // ACTION TO SET THE CURRENT BOARD
    setCurrentBoard: (state, action) => {
      // Assuming payload is an index
      const index = action.payload - 1;

      // Check if the index is within bounds
      if (index >= 0 && index < state.boards.length) {
        // Update the current board index
        state.currentBoardIndex = index;
      }
    },

    // ACTION TO SET THE CLICKED TASK PREVIEW
    setClickedTaskPreview: (state, action) => {
      state.ClickedTaskName = action.payload.name;
      state.ClickedTaskIndex = action.payload.index;
    },

    // ACTION TO DELETE A TASK
    deleteTask: (state, action) => {
      const { ClickedTaskName, ClickedTaskIndex } = action.payload;

      // Find the index of the column with the specified name
      const columnIndex = state.boards[
        state.currentBoardIndex
      ].columns.findIndex((column) => column.name === ClickedTaskName);

      // If the column is found
      if (columnIndex !== -1) {
        // Create a new array of tasks excluding the one at ClickTaskIndex
        const updatedTasks = state.boards[state.currentBoardIndex].columns[
          columnIndex
        ].tasks.filter((_, i) => i !== ClickedTaskIndex);

        state.boards[state.currentBoardIndex].columns[columnIndex].tasks =
          updatedTasks;
      }
    },
    // ACTION TO DELETE A BOARD
    deleteBoard: (state, action) => {
      state.boards = [
        ...state.boards.slice(0, action.payload),
        ...state.boards.slice(action.payload + 1),
      ];

      state.currentBoardIndex =
        state.currentBoardIndex >= state.boards.length
          ? state.boards.length - 1
          : state.currentBoardIndex;
    },

    // ACTION TO RESET A BOARD
    resetBoard: (state) => {
      const currentBoard = state.boards[state.currentBoardIndex];
      currentBoard.columns = [];
    },

    // ACTION TO CREATE A NEW BOARD
    createBoard: (state, action) => {
      const { BoardName, columns } = action.payload.data;

      // Map over the columns to add a task array to each column
      const columnsWithTask = columns.map((column) => ({
        ...column,
        id: uuidv4(), // Unique ID for column
        tasks: [],
      }));

      const updatedBoard = [
        ...state.boards,
        {
          name: BoardName,
          id: uuidv4(), // Unique ID for board
          columns: columnsWithTask,
        },
      ];
      state.boards = updatedBoard;

      // setting new board to the currrent board
      state.currentBoardIndex = action.payload.currentBoard;
    },

    // ACTION TO ADD A NEW COLUMN
    addNewColumn: (state, action) => {
      const { columns } = action.payload;

      // Find the current board
      const currentBoard = state.boards[state.currentBoardIndex];

      // Check if the current board and columns exist
      if (currentBoard && currentBoard.columns) {
        columns.forEach((col) => {
          // Create a new column object
          const newColumn = {
            name: col.name,
            id: uuidv4(), // Unique ID for new column
            tasks: [], // Initialize tasks as an empty array instead of an object
          };
          // Push the new column to the columns array
          currentBoard.columns.push(newColumn);
        });
      }
    },

    //ACTION TO ADD A NEW TASK
    addNewTask: (state, action) => {
      const { title, status, description, subTasks } = action.payload;
      const data = action.payload;

      // Find the column with the matching status

      const column = state.boards[state.currentBoardIndex].columns.find(
        (col) =>
          typeof col.name === "string" && col.name.toLowerCase() === status,
      );

      if (column && subTasks.at(0).title === "") {
        const newTask = {
          id: uuidv4(), // Unique ID for new task
          title,
          description,
          status,
          subtasks: "",
        };

        // Update the tasks array of the found column with the new task
        column.tasks.push(newTask);
      } else if (column && subTasks.at(0).title !== "") {
        const newTask = {
          id: uuidv4(), // Unique ID for new task
          title,
          description,
          status,
          subtasks: subTasks.map((subTask) => ({
            ...subTask,
            isCompleted: false,
          })),
        };

        // Update the tasks array of the found column with the new task
        column.tasks.push(newTask);
      } else {
        throw new Error(`Column with status ${status} not found`);
      }
    },

    // ACTION TO UPDATE CHECKED AND UNCHECKED SUBTAKS
    updateSubTasks: (state, action) => {
      // Find the clicked task to get the subtasks
      const clickedTask = state.boards[state.currentBoardIndex].columns.find(
        (column) => column.name === state.ClickedTaskName,
      )?.tasks?.[state.ClickedTaskIndex];

      if (clickedTask) {
        // Create a new array with updated subtasks
        const updatedSubtasks = action.payload;

        // Create a new state object and return it
        return {
          ...state,
          boards: state.boards.map((board, index) => {
            if (index === state.currentBoardIndex) {
              return {
                ...board,
                columns: board.columns.map((column) => {
                  if (column.name === state.ClickedTaskName) {
                    return {
                      ...column,
                      tasks: column.tasks.map((task, taskIndex) => {
                        if (taskIndex === state.ClickedTaskIndex) {
                          return {
                            ...task,
                            subtasks: updatedSubtasks,
                          };
                        }
                        return task;
                      }),
                    };
                  }
                  return column;
                }),
              };
            }
            return board;
          }),
        };
      }

      // If clicked task is not found or not valid, return the current state
      return state;
    },

    // ACTION TO UPDATE TASK STATUS
    updateTaskStatus: (state, action) => {
      const { task, statusToMoveTo } = action.payload;
      const { currentBoardIndex, ClickedTaskName, ClickedTaskIndex } = state;

      // Check if the task is already in the desired status column
      if (statusToMoveTo === ClickedTaskName) {
        return state; // No need to make any changes
      }

      // To remove the task from its previous column
      const updatedColumns = state.boards[currentBoardIndex].columns.map(
        (column) => {
          if (column.name === ClickedTaskName) {
            const updatedTasks = column.tasks.filter(
              (_, i) => ClickedTaskIndex !== i,
            );
            return { ...column, tasks: updatedTasks };
          }
          return column;
        },
      );

      // To find the index of the column to move the task to
      const columnIndexToMoveTo = state.boards[
        currentBoardIndex
      ].columns.findIndex((column) => column.name === statusToMoveTo);

      // To add the task to the new column
      if (columnIndexToMoveTo !== -1) {
        const updatedTasks = [
          ...updatedColumns[columnIndexToMoveTo].tasks,
          task,
        ];
        updatedColumns[columnIndexToMoveTo].tasks = updatedTasks;
      }

      state.boards[currentBoardIndex].columns = updatedColumns;
    },

    // ACTIVE TO EDIT TASK AND STATUS TOO
    editTask: (state, action) => {
      const { title, currentStatus, description, subTasks } = action.payload;

      const { ClickedTaskIndex, currentBoardIndex } = state;

      if (ClickedTaskIndex !== -1) {
        const clickedColumn =
          state.boards[currentBoardIndex].columns[ClickedTaskIndex];

        if (!clickedColumn) {
          return;
        }

        const clickedTask = clickedColumn.tasks[ClickedTaskIndex];

        // If the currentStatus is the same as clickedTask.status, return
        if (currentStatus === clickedTask.status) {
          return;
        }

        // Update the properties of the clicked task with the new values
        clickedTask.description = description;
        clickedTask.subtasks = subTasks;
        clickedTask.title = title;

        // Remove the edited task from its previous status column
        const previousStatusColumn = state.boards[
          currentBoardIndex
        ].columns.find((column) => column.name === clickedTask.status);

        if (previousStatusColumn) {
          previousStatusColumn.tasks = previousStatusColumn.tasks.filter(
            (task) => task !== clickedTask,
          );
        }

        // Find the column corresponding to the currentStatus
        const currentStatusColumn = state.boards[
          currentBoardIndex
        ].columns.find((column) => column.name === currentStatus);

        // Push the edited task to the task list of the currentStatus column
        if (currentStatusColumn) {
          currentStatusColumn.tasks.push(clickedTask);
        }
      }
    },
  },
});

// Export actions and reducer from the data slice
export const {
  initializeBoard,
  setCurrentBoard,
  setClickedTaskPreview,
  deleteTask,
  deleteBoard,
  resetBoard,
  createBoard,
  addNewColumn,
  addNewTask,
  updateSubTasks,
  updateTaskStatus,
  editTask,
} = DataSlice.actions;

export default DataSlice.reducer;
