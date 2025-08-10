import { Calculator } from "./mock_spy";

// モック関数ではなく、オリジナルの関数が何回呼び出されたかや、どんな引数で呼び出されたかを検証したい時は、スパイ関数を呼び出すことで検証することができる
// スパイ：ある関数の呼び出しを監視するためのツール

it("sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  // spyOnはスパイを作成したいメソッドを持つオブジェクトと、そのオブジェクトのスパイを作成したいメソッド名を引数に取る
  // 戻り値のスパイインスタンスはmockImplementationやmockReturnValueなどのメソッドを持ち、これらを用いてオリジナル関数の挙動を変更することも可能
  const sumSpy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  // 関数が何回呼び出されたか
  expect(sumSpy).toHaveBeenCalledTimes(1);
  // 関数がどんな引数で呼び出されたか
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  // 設定したスパイが他のテストに影響を与えないよう、スパイを解除することが推奨される
  // テストケースが多い場合は、afterEachを使用して自動的に解除することが可能
  sumSpy.mockRestore();
});
