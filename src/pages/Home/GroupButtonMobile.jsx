import { Flex } from "antd";
import { useAuth } from "../../contexts/AuthContext";
import { CompoundModal } from "../../components/CompoundModal";
import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";

export default function GroupButtonMobile() {
  const { isAuthenticated } = useAuth();

  return (
    !isAuthenticated && (
      <Flex className="flex-row flex sm:hidden w-full mb-3">
        <CompoundModal>
          <CompoundModal.Trigger
            render={(openModal) => (
              <button
                id="signup-button"
                className="text-white text-base uppercase font-semibold w-[50%] h-[41px]"
                style={{
                  background:
                    "linear-gradient(90deg, #F49122 0%, #CE5A19 47.02%, #A72611 100%)",
                }}
                onClick={openModal}
              >
                Đăng ký
              </button>
            )}
          />
          <CompoundModal.Content
            className="!bg-[var(--background-color)] border-[2px] border-[#C0C0C0] !rounded-3xl !pb-0"
            classNames={{
              content: "!rounded-3xl !bg-transparent",
              body: "mt-8",
              mask: "backdrop-blur-md",
            }}
            centered={true}
            style={{
              background:
                "radial-gradient(71.52% 71.52% at 50% 100%, #44331C 0%, #101010 100%)",
            }}
          >
            <SignUpForm />
          </CompoundModal.Content>
        </CompoundModal>

        <CompoundModal>
          <CompoundModal.Trigger
            render={(openModal) => (
              <button
                id="login-button"
                className="text-white text-base uppercase font-semibold w-[50%] h-[41px]"
                style={{
                  background:
                    "linear-gradient(90deg, #F2C668 0%, #AC8940 47.02%, #6F541C 100%)",
                }}
                onClick={openModal}
              >
                Đăng nhập
              </button>
            )}
          />
          <CompoundModal.Content
            className="!bg-[var(--background-color)] border-[2px] border-[#C0C0C0] !rounded-3xl !pb-0"
            classNames={{
              content: "!rounded-3xl !bg-transparent",
              body: "mt-8",
              mask: "backdrop-blur-md",
            }}
            centered={true}
            style={{
              background:
                "radial-gradient(71.52% 71.52% at 50% 100%, #44331C 0%, #101010 100%)",
            }}
          >
            <LoginForm />
          </CompoundModal.Content>
        </CompoundModal>
      </Flex>
    )
  );
}
