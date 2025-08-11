import fs from "fs";
import { readFile } from "./mock_module";

// モジュール全体のモック化
// トップレベルで記載する必要がある
jest.mock("fs");
// jest.mockにパスを渡した段階では、モジュールのすべての関数、メソッドは実装を持たないモック関数
// それらのモック関数に何かしらの実装や戻り値を加えることも可能だが、TypeScriptの場合、このままではfsがモジュール化されているということをコンパイラが認識できない
// そのため、以下のようにモック関数に戻り値を設定しようとすると「mockReturnValueが存在しません」というエラーが出る
// fs.readFileSync.mockReturnValue("dummy data")

// コンパイラにfsがモック化されていることを伝えるために、新たにモック化されたfs型のオブジェクトを定義する
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがデータを返却する", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
