import React from 'react';

const Hours = () => {
  // Obtener el día de la semana actual
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Definir los horarios de apertura
  const openingHours = {
    weekday: { open: '10:00 a.m.', close: '4:00 p.m.' },
    weekend: { open: '9:00 a.m.', close: '8:00 p.m.' },
  };

  // Determinar si es un día de semana o fin de semana
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  const hours = isWeekend ? openingHours.weekend : openingHours.weekday;

  return (
    <div>
      <h2>Horario de hoy</h2>
      <p>El refugio está abierto de {hours.open} a {hours.close}</p>
    </div>
  );
};

export default Hours;
