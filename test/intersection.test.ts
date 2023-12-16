describe('Intersection Type', () => {
  it('should can use intersection type', () => {
    interface Person {
      name: string;
    }

    interface Job {
      jobName: string;
      salary: number;
    }

    type PersonAndJob = Person & Job;

    const personAndJob: PersonAndJob = {
      name: 'Badrun',
      jobName: 'Developer',
      salary: 10000,
    };

    expect(personAndJob.name).toEqual('Badrun');
    expect(personAndJob.jobName).toEqual('Developer');
    expect(personAndJob.salary).toEqual(10000);
  });

  it('should can use intersection type with function', () => {
    interface Person {
      name: string;
    }

    interface Job {
      jobName: string;
      salary: number;
    }

    type PersonAndJob = Person & Job;

    const personAndJob: PersonAndJob = {
      name: 'Badrun',
      jobName: 'Developer',
      salary: 10000,
    };

    const result = (value: PersonAndJob) => {
      return {
        name: value.name,
        jobName: value.jobName,
        salary: value.salary,
      };
    };

    expect(result(personAndJob)).toEqual({
      name: 'Badrun',
      jobName: 'Developer',
      salary: 10000,
    });
  });

  it('should can use intersection type with array', () => {
    interface Person {
      name: string;
    }

    interface Job {
      jobName: string;
      salary: number;
    }

    type PersonAndJob = Person & Job;

    const personAndJob: PersonAndJob[] = [
      {
        name: 'Badrun',
        jobName: 'Developer',
        salary: 10000,
      },
      {
        name: 'Sarun',
        jobName: 'Developer',
        salary: 10000,
      },
    ];

    expect(personAndJob).toEqual([
      {
        name: 'Badrun',
        jobName: 'Developer',
        salary: 10000,
      },
      {
        name: 'Sarun',
        jobName: 'Developer',
        salary: 10000,
      },
    ]);
  });

  it('should can use intersection type with generic', () => {
    interface Person {
      name: string;
    }

    interface Job {
      jobName: string;
      salary: number;
    }

    type PersonAndJob<T> = T & Job;

    const personAndJob: PersonAndJob<Person> = {
      name: 'Badrun',
      jobName: 'Developer',
      salary: 10000,
    };

    expect(personAndJob.name).toEqual('Badrun');
    expect(personAndJob.jobName).toEqual('Developer');
    expect(personAndJob.salary).toEqual(10000);
  })

  it('should can use intersection type with generic and function', () => {
    interface Person {
      name: string;
    }

    interface Job {
      jobName: string;
      salary: number;
    }

    type PersonAndJob<T> = T & Job;

    const personAndJob: PersonAndJob<Person> = {
      name: 'Badrun',
      jobName: 'Developer',
      salary: 10000,
    };

    const result = (value: PersonAndJob<Person>) => {
      return {
        name: value.name,
        jobName: value.jobName,
        salary: value.salary,
      };
    };

    expect(result(personAndJob)).toEqual({
      name: 'Badrun',
      jobName: 'Developer',
      salary: 10000,
    });
  })

  it('should can use intersection type with generic and array', () => {
    interface Person {
      name: string;
    }

    interface Job {
      jobName: string;
      salary: number;
    }

    type PersonAndJob<T> = T & Job;

    const personAndJob: PersonAndJob<Person>[] = [
      {
        name: 'Badrun',
        jobName: 'Developer',
        salary: 10000,
      },
      {
        name: 'Sarun',
        jobName: 'Developer',
        salary: 10000,
      },
    ];

    expect(personAndJob).toEqual([
      {
        name: 'Badrun',
        jobName: 'Developer',
        salary: 10000,
      },
      {
        name: 'Sarun',
        jobName: 'Developer',
        salary: 10000,
      },
    ]);
  });


});
