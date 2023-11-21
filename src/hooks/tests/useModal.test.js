import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useModal from "../useModal";

test("should set isShowing True", () => {
  const { result } = renderHook(() => useModal());
  act(() => {
    result.current.toggle();
  });
  expect(result.current.isShowing).toBe(true);
  act(() => {
    result.current.toggle();
  });
  expect(result.current.isShowing).toBe(false);
});
