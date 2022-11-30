import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toolService from "./toolService";
import { toast } from "react-toastify";

const initialState = {
    tool: null,
    tools: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    outOfStock: 0,
    category: [],
  };

  //Create new tool
  export const createTool = createAsyncThunk(
    "tools/create",
    async (formData, thunkAPI) => {
      try {
        return await toolService.createTool(formData);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  // Get all tools
export const getTools = createAsyncThunk(
    "tools/getAll",
    async (_, thunkAPI) => {
      try {
        return await toolService.getTools();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  // Delete a tool
export const deleteTool = createAsyncThunk(
    "tools/delete",
    async (id, thunkAPI) => {
      try {
        return await toolService.deleteTool(id);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  // Get a tool
export const getTool = createAsyncThunk(
    "tools/getTool",
    async (id, thunkAPI) => {
      try {
        return await toolService.getTool(id);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  // Update tool
export const updateTool = createAsyncThunk(
    "tools/updateTool",
    async ({ id, formData }, thunkAPI) => {
      try {
        return await toolService.updateTool(id, formData);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  const toolSlice = createSlice({
    name: "tool",
    initialState,
    reducers: {
      CALC_OUTOFSTOCK(state, action) {
        const tools = action.payload;
        const array = [];
        tools.map((item) => {
          const { quantity } = item;
  
          return array.push(quantity);
        });
        let count = 0;
        array.forEach((number) => {
          if (number === 0 || number === "0") {
            count += 1;
          }
        });
        state.outOfStock = count;
      },
      CALC_CATEGORY(state, action) {
        const tools = action.payload;
        const array = [];
        tools.map((item) => {
          const { category } = item;
  
          return array.push(category);
        });
        const uniqueCategory = [...new Set(array)];
        state.category = uniqueCategory;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(createTool.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createTool.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          console.log(action.payload);
          state.tools.push(action.payload);
          toast.success("Tool added successfully");
        })
        .addCase(createTool.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        })
        .addCase(getTools.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getTools.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          console.log(action.payload);
          state.tools = action.payload;
        })
        .addCase(getTools.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        })
        .addCase(deleteTool.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteTool.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          toast.success("Tool deleted successfully");
        })
        .addCase(deleteTool.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        })
        .addCase(getTool.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getTool.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.tool = action.payload;
        })
        .addCase(getTool.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        })
        .addCase(updateTool.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateTool.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          toast.success("Tool updated successfully");
        })
        .addCase(updateTool.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
        });
    },
  });

  export const { CALC_OUTOFSTOCK, CALC_CATEGORY } =
  toolSlice.actions;

export const selectIsLoading = (state) => state.tool.isLoading;
export const selectTool = (state) => state.tool.tool;
export const selectOutOfStock = (state) => state.tool.outOfStock;
export const selectCategory = (state) => state.tool.category;

export default toolSlice.reducer;
