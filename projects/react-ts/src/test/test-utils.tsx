/* eslint-disable react-refresh/only-export-components */
import { render, type RenderOptions, type RenderResult } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import type { ReactElement } from "react";

// Define a custom render result interface that includes our user event
interface CustomRenderResult extends RenderResult {
  user: UserEvent;
}
// Add any providers here if needed (e.g., Redux, Router, Theme, etc.)
export const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): CustomRenderResult => {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders, ...options })
  };
};