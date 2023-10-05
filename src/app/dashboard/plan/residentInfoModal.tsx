import { createNewResidence } from '@/api/ResidenceApi';
import Button from '@/app/layout/ui/Button';
import Flex from '@/app/layout/ui/Flex';
import FormInput from '@/app/layout/ui/FormInput';
import Modal from '@/app/layout/ui/Modal';
import { Visitor } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';

interface Props {
  selectedBedId: number | null;
}
const ResidentInfoModal: FunctionComponent<Props> = ({ selectedBedId }) => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const visitor = Object.fromEntries(formData.entries()) as never as Visitor;

    const residence = {
      dateStart: new Date(),
      bedId: selectedBedId!,
      isPayed: false,
    };

    await createNewResidence({ residence, visitor });

    router.refresh();
  };

  return (
    <Modal
      useForm
      onSubmit={handleSubmit}
      action={<Button type="submit">Заселить</Button>}
    >
      <Flex>
        <FormInput label="Имя" name="firstname" />
        <FormInput label="Фамилия" name="surname" />
      </Flex>
      <Flex>
        <FormInput label="Отчество" name="middlename" />
        <FormInput label="Дата рождения" name="birthdayDate" />
      </Flex>
      <Flex>
        <FormInput label="Должность" name="appointment" />
        <FormInput label="Организация" name="company" />
        <FormInput label="Пол" name="sex" />
      </Flex>
    </Modal>
  );
};

export default ResidentInfoModal;
