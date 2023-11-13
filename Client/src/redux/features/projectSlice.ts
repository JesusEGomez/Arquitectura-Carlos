import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAdaptedProject } from "../../models";

export interface ProjectState {
  projects: IAdaptedProject[];
}

const initialState: ProjectState = {
  projects: [],
};

export const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects: (state, action: PayloadAction<IAdaptedProject[]>) => {
      state.projects = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProjects } = ProjectSlice.actions;

export default ProjectSlice.reducer;
