import { Button, Flex } from "antd";
import { CompoundModal } from "../../components/CompoundModal";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import { useAuth } from "../../contexts/AuthContext";

export default function GroupButton() {
  const { isAuthenticated } = useAuth();

  return (
    !isAuthenticated && (
      <Flex className="md:gap-3 gap-2 md:flex-row flex-col">
        <CompoundModal>
          <CompoundModal.Trigger
            render={(openModal) => (
              <Button
                id="signup-button"
                variant="filled"
                className="!bg-[var(--color-brand-primary-lighter)] hover:!bg-[var(--color-brand-primary)] !text-[white] border-none rounded-full lg:!text-base md:!text-[12px] !text-[10px] uppercase font-semibold"
                onClick={openModal}
              >
                Đăng ký
              </Button>
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
              <Button
                id="login-button"
                className="!bg-[transparent] !text-[var(--color-brand-primary-lighter)] border-[var(--color-brand-primary-lighter)] rounded-full lg:!text-base md:!text-[12px] !text-[10px] hover:!text-[var(--color-brand-primary)] hover:!border-[var(--color-brand-primary)] uppercase font-semibold"
                onClick={openModal}
              >
                Đăng nhập
              </Button>
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

        {/* <Button
        variant="filled"
        className="!bg-[var(--color-brand-primary)] !text-[white] border-[3px] hover:!border-[var(--text-color)] rounded-full hidden"
      >
        Tải APP
      </Button> */}
      </Flex>
    )
  );
}
