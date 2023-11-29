import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import decodeJwt from "../utilities/decodeJWT.utilities";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const handleError = () => {};
  const handleSuccess = (credentialsResponse: CredentialResponse) => {
    const finalDecode = decodeJwt(credentialsResponse.credential!);
    localStorage.setItem("credential", credentialsResponse.credential!);
    const { email, name, picture } = finalDecode.payload;
    const user = { email, name, picture, active: true };
    dispatch(saveUser(user));
  };
  return (
    <div>
      <GoogleLogin
        theme="filled_blue"
        shape="pill"
        size="large"
        type="standard"
        onError={handleError}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default Login;
