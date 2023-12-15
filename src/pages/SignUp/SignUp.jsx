import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiGoogleLogoBold } from "react-icons/pi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import LinkBanner from "../../Components/LinkBanner/LinkBanner";
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log({ location });
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const from = location?.state?.from?.pathname || "/";
  const { createUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirmation = form.confirm_password.value;
    const passwordValidation = validatePassword(password, passwordConfirmation);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      setLoading(false);
      return;
    }
    // creating a new user
    if (password === passwordConfirmation) {
      createUser(email, password)
        .then(() => {
          toast.success("User created successfully");
          navigate("/");
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.message);
          setLoading(false);
        });
    }
  };

  const validatePassword = (password, passwordConfirmation) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one capital letter.";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character.";
    }
    if (password !== passwordConfirmation) {
      return "Provided you valid password";
    }

    return setPasswordError("");
  };

  return (
    <>
      <LinkBanner location={"Create Account"} />

      <div className="flex justify-center items-center py-20">
        <div
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0,0.06)",
          }}
          className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white  text-gray-900"
        >
          <div className="mb-8 text-center">
            <h1 className="my-3 text-2xl text-gray-800 font-bold">Sign Up</h1>
            <p className="text-xl font-semibold text-gray-600">
              Welcome to <span className="text-[#00B207]">Eco Bazar</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00B207] bg-white text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    id="password"
                    required
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00B207] bg-white text-gray-900"
                  />
                  <span
                    className="absolute top-[14px] right-4"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="mb-4 relative">
                  <input
                    type={confirmShowPassword ? "text" : "password"}
                    name="confirm_password"
                    autoComplete="new-password"
                    id=""
                    required
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00B207] bg-white text-gray-900"
                  />
                  <span
                    className="absolute top-[14px] right-4"
                    onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                  >
                    {confirmShowPassword ? (
                      <FaEyeSlash></FaEyeSlash>
                    ) : (
                      <FaEye></FaEye>
                    )}
                  </span>
                </div>
                {passwordError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {passwordError}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#00B207] w-full rounded-md transform font-semibold duration-100 hover:bg-[rgb(0,178,7,0.8)] py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>

          <p className="px-6 mt-3 text-sm text-center text-gray-400">
            Already have account?
            <Link
              to="/sign-in"
              className="hover:underline font-semibold hover:text-[#00B207] text-[#00B207]"
            >
              Sign In
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
