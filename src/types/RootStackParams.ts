export type RootStackParams = {
  EntryScreen: undefined;
  Signup: undefined;
  Home: {
    username ?: string;
    Email: string;
  };
  Login: undefined;
  ForgotPassword :  undefined;
  ChangePassword : {
    email : string;
  }
};