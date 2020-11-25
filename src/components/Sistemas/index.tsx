import React, { useEffect, useState } from 'react';
import SistemaDTO from '../../dtos/SistemaDTO';
import { useApi } from '../../hooks/useApi';
import Sistema from './Sistema';

const Sistemas: React.FC = () => {
  const [sistemas, setSistemas] = useState<SistemaDTO[]>([]);

  const { data, error } = useApi('/api/jurisdicionado/sistemas');

  useEffect(() => {
    setSistemas(data);
  }, [data]);

  return (
    <div className="mt-10">
      <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {sistemas &&
          sistemas.map((sistema) => (
            <li key={sistema.id} className="mt-10 md:mt-0">
              <Sistema sistema={sistema} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sistemas;
