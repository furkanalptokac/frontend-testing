export type defaultValuesType = {
  name: string;
  surname: string;
  password: string;
};

export interface IForm {
  onSubmit: (data: defaultValuesType) => void;
}
