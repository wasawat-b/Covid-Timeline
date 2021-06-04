export type Items = {
  items: [{
    id: string;
    gender: string;
    age: string;
    job: string;
    detail: [{
      date: string;
      description: string;
    }];
  }];
  change: boolean;
};

export type Item = {
  items: {
    id: string;
    gender: string;
    age: string;
    job: string;
    detail: {
      date: string;
      description: string;
    }
  };
};

export type dayType = {
  day: string;
  time: string;
  description: string;
};