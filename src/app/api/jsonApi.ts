import { ApiProvider } from '@/apiAbstractClass';

const jsonApi = new ApiProvider(process.env.NEXT_PUBLIC_API_URL!);
export default jsonApi;
