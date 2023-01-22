import { CreateTrainerHashedRequestDto } from './create-trainer.dtos';

export class CreateTrainerCommand {
  readonly email: string;
  readonly userName: string;
  readonly hashPassword: string;

  constructor(props: CreateTrainerHashedRequestDto) {
    this.email = props.email;
    this.userName = props.userName;
    this.hashPassword = props.hashPassword;
  }
}
