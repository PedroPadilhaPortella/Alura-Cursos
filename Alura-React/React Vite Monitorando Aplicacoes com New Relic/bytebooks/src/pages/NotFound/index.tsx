import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const navigation = useHistory();

  return (
    <div className="flex-1 flex flex-col items-center justify-content mt-4">
      <h2 className='text-center text-[#002f52] text-[32px]'>Oops, Não há nada para ver aqui.</h2>
      <img src="/not_found.webp" alt="" className='w-1/2 max-w-[500px] mx-auto mt-4' />
      <button onClick={() => navigation.push('/')} className='py-3 w-1/4 bg-[#eb9b00] hover:opacity-80 rounded-md shadow-md'>
        <h3 className='text-white text-lg font-medium'>Voltar ao Inicio</h3>
      </button>
    </div>
  );
};

export default NotFound;