import accounts from '../data/accounts.json';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-6">
      <h1 className="text-3xl font-bold">문서협업툴 데모버전 운영</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {accounts.map((acc) => (
          <button
            key={acc.route}
            onClick={() => window.location.href = acc.deeplink}
            className="w-full py-4 bg-black text-white text-lg rounded hover:opacity-80"
          >
            {acc.title}
          </button>
        ))}
      </div>
    </div>
  );
}
