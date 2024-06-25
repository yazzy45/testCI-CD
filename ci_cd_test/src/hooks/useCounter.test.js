import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("should add count", () => {
  const { result } = renderHook(() => useCounter());// フックをレンダリング
  expect(result.current.count).toBe(0); // 初期値が0であることを確認
  act(() => result.current.addCount()); // カウントを増やす関数をactで呼び出す
  expect(result.current.count).toBe(1);// カウントが1に増えたことを確認
});
