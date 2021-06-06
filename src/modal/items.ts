export type Items = {
  items: [{
    id: string;
    gender: string;
    age: string;
    job: string;
    detail: [{
      id: string;
      date: string;
      description: string;
    }];
  }];
  change: boolean;
  deleteTrigger: boolean;
  showSuccess: boolean;
};

export type Item = {
  items: {
    id: string;
    gender: string;
    age: string;
    job: string;
    detail: {
      id: string;
      date: string;
      description: string;
    }
  };
};

export type dayType = {
  id: string;
  day: string;
  time: string;
  description: string;
};