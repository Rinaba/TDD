const fizzBuzz = require('./index');

test("1を渡すと文字列'1'を返す", () => {
    // 準備 (Arrange)
    // 実行 (Act)
    const actual = fizzBuzz(1);
    // 検証 (Assertion)
    expect(actual).toBe('1');
});