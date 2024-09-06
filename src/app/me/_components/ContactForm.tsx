'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Modal } from '@/components/Modals';
import { useModal } from '@/hooks/useModal';

type ContactInputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const router = useRouter();
  const [isModalOpen, handleClickTrigger] = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = data => {
    console.log(data);
    handleClickTrigger();
  };

  const handleContact = () => {
    handleClickTrigger();
    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-start box-border flex w-[98.5rem] flex-col gap-[3.2rem] rounded-[4rem] border border-primary-500 bg-white p-[6rem]"
    >
      <div className="flex flex-col gap-[2.3rem]">
        <p className="text-[2.4rem] font-[700]">문의하기</p>
        <p className="text-[1.6rem] font-medium text-[#8f8f8f]">
          문의하고 싶은 내용을 구체적으로 작성해 주셔야 피드백이 정상적으로 반영됩니다.
        </p>
      </div>
      <div className="flex flex-col gap-[0.8rem]">
        <label className="text-[1.8rem] font-medium">Name</label>
        <Input
          placeholder="이름을 적어주세요."
          {...register('name', {
            required: '이름을 입력해 주세요.',
            minLength: { value: 2, message: '이름은 최소 2자 이상이어야 합니다.' },
          })}
        />
        {errors.name && <span className="text-system-warning">{errors.name.message}</span>}
      </div>
      <div className="flex flex-col gap-[0.8rem]">
        <label className="text-[1.8rem] font-medium">Email</label>
        <Input disabled defaultValue={userEmail} {...register('email')} />
      </div>
      <div className="flex flex-col gap-[0.8rem]">
        <label className="text-[1.8rem] font-medium">Message</label>
        <Input placeholder="내용을 적어주세요." isMultiline rows={6} />
      </div>
      <Button
        type="submit"
        shape="rectangle"
        size="large"
        className="w-full text-[1.8rem]"
        onClick={handleSubmit}
      >
        문의 보내기
      </Button>
      <Modal
        gap={24}
        padding={40}
        hasDimmed
        setIsModalOpen={handleClickTrigger}
        isOpen={isModalOpen}
      >
        <Modal.Title size="lg">문의를 보냈어요!</Modal.Title>
        <Modal.Text subtitle={['문의를 성공적으로 전송했어요. 빠른 시일내에 답변해 드릴게요.']} />
        <Modal.Button buttonText="홈으로 가기" variant="singleButton" onClick={handleContact} />
      </Modal>
    </form>
  );
}
