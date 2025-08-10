// beforeEach: 各テスト（it）の前に実行される
// afterEach: 各テスト（it）の後に実行される

// beforeAll: グループ内のすべてのテストもしくはファイル内のすべてのテストの前に１度だけ実行される
// afterAll: グループ内のすべてのテストもしくはファイル内のすべてのテストの後に１度だけ実行される

describe("outer describe block", () => {
  beforeAll(() => {
    console.log("outer beforeAll");
  });
  afterAll(() => {
    console.log("outer afterAll");
  });
  beforeEach(() => {
    console.log("outer beforeEach");
  });
  beforeEach(() => {
    console.log("outer beforeEach");
  });

  it("outer test 1", () => {
    console.log("outer test 1");
  });

  it("outer test 2", () => {
    console.log("outer test 2");
  });

  describe("inner describe block", () => {
    beforeAll(() => {
      console.log("inner beforeAll");
    });
    afterAll(() => {
      console.log("inner afterAll");
    });
    beforeEach(() => {
      console.log("inner beforeEach");
    });
    beforeEach(() => {
      console.log("inner beforeEach");
    });

    it("inner test 1", () => {
      console.log("inner test 1");
    });

    it("inner test 2", () => {
      console.log("inner test 2");
    });
  });
});
