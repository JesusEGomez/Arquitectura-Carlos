import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAdaptedProject, ICategory } from "../../models";

export interface ProjectState {
  projects: IAdaptedProject[];
  filteredProjects: IAdaptedProject[];
  categories: ICategory[];
}

const initialState: ProjectState = {
  projects: [],
  filteredProjects: [],
  categories: [],
};

export const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects: (state, action: PayloadAction<IAdaptedProject[]>) => {
      state.projects = action.payload;
    },
    fetchCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
      console.log("Redux Category", action.payload);
    },
    fetchProjectsByCategory: (
      state,
      action: PayloadAction<IAdaptedProject[]>
    ) => {
      console.log("Redux Project", action.payload);
      state.filteredProjects = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProjects, fetchProjectsByCategory, fetchCategories } =
  ProjectSlice.actions;

export default ProjectSlice.reducer;
