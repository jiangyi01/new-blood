// 未登录
const NOT_LOGGED_IN = 0;
// 登录中
const LOGGING_IN = 1;
// 已登录，并且成功
const LOGIN_SUCCESS = 2;
//失败
const LOGIN_FAILD = 3;
//已选择校区
const CHOOSED = 4;
//未选择校区
const UNCHOOSED = 5;
//正在选择
const CHOOSEIN = 6;
//选择失败
const CHOOSEFAID = 7;
const userStatus = {
  NOT_LOGGED_IN,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
  CHOOSED,
  UNCHOOSED,
  CHOOSEIN,
  CHOOSEFAID
};

Object.freeze(userStatus);

export default userStatus;
