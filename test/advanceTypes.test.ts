describe('Advance Types', () => {
  it('should can use type alias', () => {
    type Name = string;
    const name: Name = 'Sarun';
    expect(name).toEqual('Sarun');
  });

  it('should can use type alias with union', () => {
    type Name = string | string[];
    const name: Name = ['Sarun', 'Sarun'];
    expect(name).toEqual(['Sarun', 'Sarun']);
  });

  it('should can use type alias with generic', () => {
    type Name<T> = T[];
    const name: Name<string> = ['Sarun', 'Sarun'];
    expect(name).toEqual(['Sarun', 'Sarun']);
  });

  it('should can use typeof', () => {
    const name = 'Sarun';
    type Name = typeof name;
    const name2: Name = 'Sarun';
    expect(name2).toEqual('Sarun');
  });

  it('should can use keyof', () => {
    interface Person {
      name: string;
      age: number;
    }

    type PersonKey = keyof Person;
    const name: PersonKey = 'name';
    expect(name).toEqual('name');
  });

  it('should can use conditional types', () => {
    type IsString<T> = T extends string ? true : false;
    type Result = IsString<string>;
    const result: Result = true;
    expect(result).toEqual(true);
  });

  it('should can use mapped types', () => {
    type Readonly<T> = {
      readonly [P in keyof T]: T[P];
    };

    interface Person {
      name: string;
      age: number;
    }

    type ReadonlyPerson = Readonly<Person>;
    const person: ReadonlyPerson = {
      name: 'Sarun',
      age: 25,
    };

    expect(person).toEqual({
      name: 'Sarun',
      age: 25,
    });
  });

  it('should can use inferential types', () => {
    const result = <T>(arg: T): T => {
      return arg;
    };
    expect(result(1)).toEqual(1);
    expect(result('1')).toEqual('1');
    expect(result(true)).toEqual(true);
  });
});
