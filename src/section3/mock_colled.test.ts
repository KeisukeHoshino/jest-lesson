// api呼び出しやDBへの書き込みなどの副作用を含む処理はユニットテストでは基本的にモック化される
// そのため、モック化された処理が期待通りの引数で期待通りの回数呼び出されたかを検証するテストが行われる

// モック関数が呼び出されたかを検証するテスト
it("モック関数が呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled();
});

// モック関数が何回呼び出されたかを検証するテスト
it("モック関数が2回呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

// モック関数が特定の引数で実行されたかを検証するテスト
it("モック関数に引数hogeが渡される", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  expect(mockFunc).toHaveBeenCalledWith("hoge");
});
