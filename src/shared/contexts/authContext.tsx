import React, { createContext, PureComponent, useContext } from "react";
import { Cookies } from "../../shared/utility";
import { UserInterface } from "../interfaces/UserInterface";

interface State {
  user: UserInterface;
  isInitialized: boolean;
  isAuthenticated: boolean;
}

interface Context extends State {
  updateUser(user: UserInterface): void;
  getLatestUser(): void;
}

export const AuthContext = createContext<Context>(null);
export const useAuthContext = () => useContext(AuthContext);
export class AuthContextProvider extends PureComponent<any, State> {
  state: State = {
    user: null,
    isInitialized: false,
    isAuthenticated: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isInitialized: true,
      });
    }, 3000);
    const user = Cookies.get("current-user");
    if (user) {
      this.setState({ user, isAuthenticated: true });
      this.getLatestUser();
    }
  }

  getLatestUser(): void {}

  updateUser(user: UserInterface): void {
    if (user) {
      Cookies.set("current-user", user);
      if (user.token) {
        Cookies.set("access-token", user.token);
      }
      this.setState({ user, isAuthenticated: true });
    } else {
      Cookies.remove("current-user");
      Cookies.remove("access-token");
      this.setState({ user, isAuthenticated: false });
    }
  }

  render() {
    const context: Context = {
      ...this.state,
      updateUser: this.updateUser.bind(this),
      getLatestUser: this.getLatestUser.bind(this),
    };
    return (
      <AuthContext.Provider value={context}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
