declare namespace API {
  type GET_USER = {
    username?: string;
    password?: string;
  };
  type GET_USER_RESULT = {
    username?: string;
    accountname?: string;
    token?: string;
  };
}
