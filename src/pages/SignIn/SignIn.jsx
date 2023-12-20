import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiGoogleLogoBold } from "react-icons/pi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useEffect, useState } from "react";
import LinkBanner from "../../Components/LinkBanner/LinkBanner";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const from = location?.state?.from?.pathname || "/";

  const { signIn } = useAuth();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    signIn(email, password)
      .then(() => {
        toast.success("User Log in successfully");
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
    axios
      .put("http://localhost:3000/users", user)
      .then((data) => console.log(data.data));
  };

  return (
    <>
      <LinkBanner location={"Sign In"} />
      <div className="flex justify-center items-center py-20">
        <div
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0,0.06)",
          }}
          className="flex flex-col md:min-w-[400px] max-w-lg p-6 rounded-md sm:p-10 bg-white  text-gray-900"
        >
          <div className="mb-8 text-center">
            <h1 className="my-3 text-2xl text-gray-800 font-bold">Sign In</h1>
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
            Don’t have account?
            <Link
              to="/sign-up"
              className="hover:underline font-semibold hover:text-[#00B207] text-[#00B207]"
            >
              Sing Up
            </Link>
            .
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default SignIn;
