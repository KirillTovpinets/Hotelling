import residenceApi, { createNewResidence } from '@/api/ResidenceApi';
import Button from '@/app/layout/ui/Button';
import Flex from '@/app/layout/ui/Flex';
import FormInput from '@/app/layout/ui/FormInput';
import Modal from '@/app/layout/ui/Modal';
import { Visitor } from '@/interfaces';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { FunctionComponent, useEffect } from 'react';

interface Props {
  selectedBedId?: number;
  residentId?: number;
}
const ResidentInfoModal: FunctionComponent<Props> = ({
  selectedBedId,
  residentId,
}) => {
  const router = useRouter();

  const handleSubmit = async (visitor: Visitor) => {
    const residence = {
      dateStart: new Date(),
      bedId: selectedBedId!,
      isPayed: false,
    };

    if (visitor.id) {
      await residenceApi.updateVisitor(visitor);
    } else {
      await createNewResidence({ residence, visitor });
    }

    router.refresh();
  };

  const formik = useFormik({
    initialValues: {
      surname: '',
      firstname: '',
      appointment: '',
      company: '',
      middlename: '',
      birthdayDate: '',
      sex: '',
      id: 0,
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (!residentId) {
      return;
    }
    residenceApi
      .getResident(residentId)
      .then((data) => formik.resetForm({ values: data }));
  }, [residentId]);

  return (
    <Modal
      useForm
      action={
        <Button type="submit">{residentId ? 'Обновить' : 'Заселить'}</Button>
      }
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
    >
      <Flex>
        <FormInput label="Имя" {...formik.getFieldProps('firstname')} />
        <FormInput label="Фамилия" {...formik.getFieldProps('surname')} />
      </Flex>
      <Flex>
        <FormInput label="Отчество" {...formik.getFieldProps('middlename')} />
        <FormInput
          label="Дата рождения"
          {...formik.getFieldProps('birthdayDate')}
        />
      </Flex>
      <Flex>
        <FormInput label="Должность" {...formik.getFieldProps('appointment')} />
        <FormInput label="Организация" {...formik.getFieldProps('company')} />
        <FormInput label="Пол" {...formik.getFieldProps('sex')} />
      </Flex>
    </Modal>
  );
};

export default ResidentInfoModal;
