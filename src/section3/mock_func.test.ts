it("初めてのmock", () => {
  // jest.fn()の引数にコールバック関数を渡すことで、引数がモック関数の動作として設定される
  const mockFunc = jest.fn(() => "Hello mock");

  expect(mockFunc()).toBe("Hello mock");
});

it("mockImplementation", () => {
  // mockImplementationを使うことで、初めは空のモック関数として定義しておき、後から実装を変更することが可能
  const mockFunc = jest.fn()
  mockFunc.mockImplementation(() => "Hello mock2")

  expect(mockFunc()).toBe("Hello mock2")

})
