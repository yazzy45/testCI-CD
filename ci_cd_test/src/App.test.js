import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("increments count", async () => {
  render(<App />);//Appコンポーネントをレンダリング
  userEvent.click(screen.getByRole("button")); // ボタンをクリック
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument(); // カウントが1に増えたことを確認
});
