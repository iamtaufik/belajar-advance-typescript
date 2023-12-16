describe('Union Type', () => {
  it('should can use union type', () => {
    let result: number | string;
    result = 1;
    expect(result).toEqual(1);
    result = '1';
    expect(result).toEqual('1');
  });

  it('should can use union type with function', () => {
    const result = (value: number | string) => value;
    expect(result(1)).toEqual(1);
    expect(result('1')).toEqual('1');
  });

  it('should can use union type with array', () => {
    const result: (number | string)[] = [1, '1'];
    expect(result).toEqual([1, '1']);
  });

  it('should can use union type with object', () => {
    const result: { first: number | string } = { first: 1 };
    expect(result).toEqual({ first: 1 });
  });

  it('should can use union type with interface', () => {
    interface Pair<T, U> {
      first: T;
      second: U;
    }

    const result: Pair<number, string | number> = {
      first: 1,
      second: '1',
    };

    expect(result).toEqual({ first: 1, second: '1' });
  });

  it('should can use union with 2 interface', () => {
   interface Person {
        name: string;
    }

    interface   Contact {
        phone: string;
    }

    type PersonOrContact = Person | Contact;

    const person: PersonOrContact = {
        name: 'Sarun',
    };

    const contact: PersonOrContact = {
        phone: '0123456789',
    };

    expect(person.name).toEqual('Sarun');
    expect(contact.phone).toEqual('0123456789');
  });

  it('should can use union type with type', () => {
    type Pair<T, U> = {
      first: T;
      second: U;
    };

    const result: Pair<number, string | number> = {
      first: 1,
      second: '1',
    };

    expect(result).toEqual({ first: 1, second: '1' });
  });

  it('should can use union type with nested union type', () => {
    const result: (number | string)[] = [1, '1'];
    expect(result).toEqual([1, '1']);
  });
});
