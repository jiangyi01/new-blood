import {
  STATUS_GET_INFORMATION_AVAIL,
  STATUS_GET_INFORMATION_UNAVA,
} from "../request";

const defaultState = {
  get_info_isAvail: false,
};
export default function Status(state = defaultState, action) {
  switch (action.type) {
    case STATUS_GET_INFORMATION_AVAIL:
      return {
        get_info_isAvail: true,
      };
    case STATUS_GET_INFORMATION_UNAVA:
      return {
        get_info_isAvail: false,
      };
    default:
      return state;
  }
}
