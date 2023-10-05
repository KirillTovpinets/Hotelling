import { fetchAllResidents } from '@/api/VisitorsApi';
import FormInput from '@/app/layout/ui/FormInput';
import { FunctionComponent } from 'react';

interface ResidentsProps {}

const Residents: FunctionComponent<ResidentsProps> = async () => {
  const list = await fetchAllResidents(1);
  return (
    <>
      <div className="mb-5">
        <FormInput name="search" label="Поиск" />
      </div>
      <table className="table-auto border border-collapse border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-400">Name</th>
            <th className="border border-slate-400">Surname</th>
            <th className="border border-slate-400">Middlename</th>
            <th className="border border-slate-400">Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-400 px-4 py-2">
                {item.firstname}
              </td>
              <td className="border border-slate-400 px-4 py-2">
                {item.surname}
              </td>
              <td className="border border-slate-400 px-4 py-2">
                {item.middlename}
              </td>
              <td className="border border-slate-400 px-4 py-2">
                {item.birthdayDate?.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Residents;
