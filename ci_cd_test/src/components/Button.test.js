import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

test("should call onClick", async () => {
  const onClickMock = jest.fn();  // モック関数を作成
  render(<Button onClick={onClickMock}>label</Button>);  // コンポーネントをレンダリング
  await userEvent.click(screen.getByRole("button"));// ボタンをクリック
  expect(onClickMock).toHaveBeenCalledTimes(1);// onClickが1回呼ばれたことを確認
});
