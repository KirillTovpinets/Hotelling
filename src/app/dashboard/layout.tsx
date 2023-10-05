import { PropsWithChildren } from 'react';
import ModalDialogs from '../components/dialogs/withModalDialog';
import Navbar from '../layout/Navbar';
import Header from '../layout/ui/Header';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <div className="px-10 py-5">
          <div className="container-fluid">{children}</div>
        </div>
      </main>
      <ModalDialogs />
    </div>
  );
}
