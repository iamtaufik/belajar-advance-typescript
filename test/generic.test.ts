describe('Generic', () => {
  const reverse = <T>(arr: T[]): T[] => {
    return arr.reverse();
  };

  it('should can reverse any array', () => {
    const item = [1, 2, 3];
    const result = reverse(item);

    const item2 = ['a', 'b', 'c'];
    const result2 = reverse(item2);

    expect(result).toEqual([3, 2, 1]);
    expect(result2).toEqual(['c', 'b', 'a']);
  });

  interface Pair<T, U> {
    first: T;
    second: U;
  }

  it('should can use generic with interface', () => {
    const pair: Pair<number, string> = {
      first: 1,
      second: 'second',
    };

    expect(pair.first).toEqual(1);
    expect(pair.second).toEqual('second');

    const pair2: Pair<boolean, void> = {
      first: true,
      second: undefined,
    };

    expect(pair2.first).toEqual(true);
    expect(pair2.second).toEqual(undefined);
  });

  type Pair2<T> = T

    it('should can use generic with type', () => {
        const pair: Pair2<number> = 1;
        expect(pair).toEqual(1);
    
        const pair2: Pair2<boolean> = true;
        expect(pair2).toEqual(true);
    });
});

describe('Nested Generic', () => {
    type Pair<T, U> = {
        first: T;
        second: U;
      }

    it('should can use nested generic', () => {
        const pair: Pair<number, Pair<number, string>> = {
            first: 1,
            second: {
                first: 2,
                second: 'second',
            },
        };

        expect(pair.first).toEqual(1);
        expect(pair.second.first).toEqual(2);
        expect(pair.second.second).toEqual('second');
    });
});
